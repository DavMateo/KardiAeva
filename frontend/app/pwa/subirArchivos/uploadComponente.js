export class UploadComponente extends HTMLElement {
    constructor() {
        super();
        const container = this.createContainer();
        this.appendChild(container);
        this.eventosJS();
    }

    createContainer() {
        const main = document.createElement('main');
        main.classList.add('main');

        const title = document.createElement('h1');
        title.classList.add('main__title');
        title.textContent = 'Subir Documento';
        main.appendChild(title);
        main.appendChild(this.createUploadForm());

        return main;
    }

    createUploadForm() {
        const form = document.createElement('form');
        form.classList.add('upload-form');

        // Crear la zona de dropzone
        const dropzone = this.createDropzone();
        form.appendChild(dropzone);

        // Crear los campos del formulario
        const fields = this.createFormFields();
        form.appendChild(fields);

        return form;
    }

    createDropzone() {
        const dropzoneDiv = document.createElement('div');
        dropzoneDiv.classList.add('upload-form__dropzone');
        dropzoneDiv.id = 'dropzone';

        const content = document.createElement('div');
        content.classList.add('upload-form__dropzone-content');

        const icon = document.createElement('i');
        icon.classList.add('upload-form__dropzone-icon');
        content.appendChild(icon);

        const text = document.createElement('p');
        text.classList.add('upload-form__dropzone-text');
        text.textContent = 'Subir un archivo o arrastra y suelta';
        content.appendChild(text);

        const subtext = document.createElement('p');
        subtext.classList.add('upload-form__dropzone-subtext');
        subtext.textContent = 'PDF hasta 10MB';
        content.appendChild(subtext);

        dropzoneDiv.appendChild(content);

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.classList.add('upload-form__file-input');
        fileInput.id = 'fileInput';
        fileInput.accept = '.pdf';
        dropzoneDiv.appendChild(fileInput);

        return dropzoneDiv;
    }

    createFormFields() {
        const fieldsDiv = document.createElement('div');
        fieldsDiv.classList.add('upload-form__fields');

        // Campo de título del documento
        const titleField = this.createField({
            label: 'Título del Documento',
            type: 'input',
            className: 'upload-form__input',
            maxLength: 255,
            counter: true
        });
        fieldsDiv.appendChild(titleField);

        // Campo de categoría
        const categoryField = this.createField({
            label: 'Categoría',
            type: 'select',
            className: 'upload-form__select-input',
            options: ['Seleccionar categoría']
        });
        fieldsDiv.appendChild(categoryField);

        // Campo de especialidad
        const specialtyField = this.createField({
            label: 'Especialidad',
            type: 'select',
            className: 'upload-form__select-input',
            options: ['Seleccionar especialidad']
        });
        fieldsDiv.appendChild(specialtyField);

        // Campo de descripción
        const descriptionField = this.createField({
            label: 'Descripción',
            type: 'textarea',
            className: 'upload-form__textarea',
            maxLength: 255,
            counter: true
        });
        fieldsDiv.appendChild(descriptionField);

        // Botón de envío
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.classList.add('upload-form__submit');
        submitButton.textContent = 'Cargar PDF';
        fieldsDiv.appendChild(submitButton);

        return fieldsDiv;
    }

    createField({ label, type, className, maxLength = null, options = [], counter = false }) {
        const fieldDiv = document.createElement('div');
        fieldDiv.classList.add('upload-form__field');

        const fieldLabel = document.createElement('label');
        fieldLabel.classList.add('upload-form__label');
        fieldLabel.textContent = label;
        fieldDiv.appendChild(fieldLabel);

        let fieldElement;

        if (type === 'input') {
            fieldElement = document.createElement('input');
            fieldElement.type = 'text';
            fieldElement.classList.add(className);
            if (maxLength) fieldElement.maxLength = maxLength;

            if (counter) {
                const counterSpan = document.createElement('span');
                counterSpan.classList.add('upload-form__counter');
                counterSpan.textContent = `0/${maxLength}`;
                fieldElement.addEventListener('input', () => {
                    counterSpan.textContent = `${fieldElement.value.length}/${maxLength}`;
                });
                fieldDiv.appendChild(counterSpan);
            }
        }

        if (type === 'textarea') {
            fieldElement = document.createElement('textarea');
            fieldElement.classList.add(className);
            if (maxLength) fieldElement.maxLength = maxLength;

            if (counter) {
                const counterSpan = document.createElement('span');
                counterSpan.classList.add('upload-form__counter');
                counterSpan.textContent = `0/${maxLength}`;
                fieldElement.addEventListener('input', () => {
                    counterSpan.textContent = `${fieldElement.value.length}/${maxLength}`;
                });
                fieldDiv.appendChild(counterSpan);
            }
        }

        if (type === 'select') {
            fieldElement = document.createElement('select');
            fieldElement.classList.add(className);
            options.forEach((optionText) => {
                const option = document.createElement('option');
                option.value = optionText.toLowerCase().replace(' ', '-');
                option.textContent = optionText;
                fieldElement.appendChild(option);
            });
        }

        fieldDiv.appendChild(fieldElement);

        return fieldDiv;
    }

    eventosJS() {
        const dropzone = document.getElementById('dropzone');
        const fileInput = document.getElementById('fileInput');
        const form = document.querySelector('.upload-form');
        const textInputs = document.querySelectorAll('input[type="text"], textarea');

        // Drag and drop functionality
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = 'var(--color-primary)';
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.style.borderColor = 'var(--color-border)';
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = 'var(--color-border)';

            const files = e.dataTransfer.files;
            if (files.length > 0 && files[0].type === 'application/pdf') {
                fileInput.files = files;
                updateDropzoneText(files[0].name);
            }
        });

        // File input change handler
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                updateDropzoneText(e.target.files[0].name);
            }
        });

        // Character counter for text inputs
        textInputs.forEach(input => {
            const counter = input.parentElement.querySelector('.upload-form__counter');
            if (counter) {
                input.addEventListener('input', () => {
                    counter.textContent = `${input.value.length}/255`;
                });
            }
        });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });

        // Helper function to update dropzone text
        function updateDropzoneText(filename) {
            const text = dropzone.querySelector('.upload-form__dropzone-text');
            text.textContent = `Archivo seleccionado: ${filename}`;
        }

        // Add loading state to submit button
        const submitButton = document.querySelector('.upload-form__submit');
        submitButton.addEventListener('click', (e) => {
            if (!form.checkValidity()) return;

            submitButton.classList.add('loading');
            submitButton.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitButton.classList.remove('loading');
                submitButton.disabled = false;

                // Show success message
                const fields = document.querySelectorAll('.upload-form__field');
                fields.forEach(field => field.classList.add('success'));
            }, 2000);
        });

        // Add drag-over class for dropzone
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('drag-over');
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('drag-over');
        });

        dropzone.addEventListener('drop', (e) => {
            dropzone.classList.remove('drag-over');
            // Existing drop handling code...
        });

        // Character counter animations
        textInputs.forEach(input => {
            const counter = input.parentElement.querySelector('.upload-form__counter');
            if (counter) {
                input.addEventListener('input', () => {
                    const length = input.value.length;
                    const max = 255;

                    counter.textContent = `${length}/${max}`;

                    if (length >= max) {
                        counter.classList.add('at-limit');
                        counter.classList.remove('near-limit');
                    } else if (length >= max * 0.8) {
                        counter.classList.add('near-limit');
                        counter.classList.remove('at-limit');
                    } else {
                        counter.classList.remove('near-limit', 'at-limit');
                    }
                });
            }
        });

        // Add error animation to invalid fields
        form.addEventListener('invalid', (e) => {
            e.target.classList.add('error');

            // Remove error class after animation
            setTimeout(() => {
                e.target.classList.remove('error');
            }, 400);
        }, true);
    }
}

customElements.define('upload-componente', UploadComponente);