export class FormCredencialesComponente extends HTMLElement {
    constructor() {
        super();
        const container = this.createContainer();
        this.appendChild(container);
    }


    createContainer() {
        const mainPrincipal = document.createElement("main");
        mainPrincipal.classList.add('principal');
        mainPrincipal.id = 'principal';

        const credencialesMysqlForm = this.createCredencialesMysqlForm();
        const informacionPersonalForm = this.createInformacionPersonalForm();
        const botones = this.createButtons();

        mainPrincipal.appendChild(credencialesMysqlForm);
        mainPrincipal.appendChild(informacionPersonalForm);
        mainPrincipal.appendChild(botones);

        return mainPrincipal;
    }

    createCredencialesMysqlForm() {
        const div = document.createElement('div');
        div.classList.add('credencialesMysql');

        const form = document.createElement('form');
        form.classList.add('credencialesMysql__formulario');
        form.id = 'credMysql';

        const tituloDiv = document.createElement('div');
        tituloDiv.classList.add('formulario__titulo');

        const svgIcon = this.createSvgIcon('lucide lucide-database h-6 w-6 text-blue-500 mr-2', [
            {
                tag: 'ellipse',
                attrs: {
                    cx: '12',
                    cy: '5',
                    rx: '9',
                    ry: '3'
                }
            },
            {
                tag: 'path',
                attrs: { d: 'M3 5V19A9 3 0 0 0 21 19V5' }
            },
            {
                tag: 'path',
                attrs: { d: 'M3 12A9 3 0 0 0 21 12' }
            }
        ]);
        tituloDiv.appendChild(svgIcon);

        const legend = document.createElement('legend');
        const textLegend = document.createTextNode('Credenciales MySQL');
        legend.appendChild(textLegend);
        tituloDiv.appendChild(legend);
        form.appendChild(tituloDiv);

        form.appendChild(this.createInputField('formulario__usuario', 'Usuario', 'usuario', 'text', true));
        form.appendChild(this.createInputField('formulario__contrasenya', 'Contraseña', 'contrasenya', 'password', true));
        form.appendChild(this.createInputField('formulario__host', 'Host', 'host', 'text', true));
        form.appendChild(this.createInputField('formulario__puerto', 'Puerto', 'puerto', 'number', true, { min: 1, max: 65565 }));
        form.appendChild(this.createInputField('formulario__baseDeDatos', 'Nombre Base de Datos', 'baseDeDatos', 'text', true));

        div.appendChild(form);
        return div;
    }

    createInformacionPersonalForm() {
        const div = document.createElement('div');
        div.classList.add('informacionPersonal');

        const form = document.createElement('form');
        form.classList.add('informacionPersonal__formulario');
        form.id = 'infoPersona';

        const tituloDiv = document.createElement('div');
        tituloDiv.classList.add('formulario__titulo');

        const svgIcon = this.createSvgIcon('lucide lucide-circle-user h-6 w-6 text-blue-500 mr-2', [
            {
                tag: 'circle',
                attrs: {
                    cx: '12',
                    cy: '12',
                    r: '10'
                }
            },
            {
                tag: 'circle',
                attrs: {
                    cx: '12',
                    cy: '10',
                    r: '3'
                }
            },
            {
                tag: 'path',
                attrs: { d: 'M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662' }
            }
        ]);
        tituloDiv.appendChild(svgIcon);

        const legend = document.createElement('legend');
        const textLegend = document.createTextNode('Información Personal');
        legend.appendChild(textLegend);
        tituloDiv.appendChild(legend);
        form.appendChild(tituloDiv);

        const residenciaDiv = this.createResidenciaSection();
        form.appendChild(residenciaDiv);

        form.appendChild(this.createInputField('formulario__fechaNacimiento', 'Fecha de Nacimiento', 'fechaNacimiento', 'date'));
        form.appendChild(this.createGeneroSelector());
        form.appendChild(this.createInputField('formulario__peso', 'Peso (Kg)', 'peso', 'number', true, { min: 0, max: 600 }));
        form.appendChild(this.createInputField('formulario__estatura', 'Estatura (cm)', 'estatura', 'number', true, { min: 10, max: 450 }));
        form.appendChild(this.createInputField('formulario__edad', 'Edad', 'edad', 'number', true, { min: 0, max: 250 }));
        form.appendChild(this.createInputField('formulario__nickname', 'Nickname', 'nickname', 'text', true));

        div.appendChild(form);
        return div;
    }

    createResidenciaSection() {
        const div = document.createElement('div');
        div.classList.add('formulario__residencia');

        div.appendChild(this.createInputField('residencia__tipoVia', 'Tipo Vía', 'tipoVia', 'text', true));
        div.appendChild(this.createInputField('residencia__nombreVia', 'Nombre de la Vía', 'nombreVia', 'text', true));
        div.appendChild(this.createInputField('residencia__numero', 'Número Donde Reside', 'numeroResidencia', 'text', true));
        div.appendChild(this.createInputField('residencia__pisoApt', 'Piso o Apartamento', 'pisoOrApt', 'text', true));

        const paisDiv = document.createElement('div');
        paisDiv.classList.add('residencia__pais', 'ui-wrapper');

        const inputs = [
            'Colombia',
            'Filipinas',
            'Indonesia',
            'Espanya',
            'Polonia',
            'EstadosUnidos'
        ];

        inputs.forEach((id) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'flag';
            input.id = id;
            if (id === 'Colombia') input.checked = true;
            paisDiv.appendChild(input);
        });

        const dropdownCheckbox = document.createElement('input');
        dropdownCheckbox.type = 'checkbox';
        dropdownCheckbox.id = 'dropdown';
        dropdownCheckbox.classList.add('pais__dropdownCheckbox');
        paisDiv.appendChild(dropdownCheckbox);

        const dropdownLabel = document.createElement('label');
        dropdownLabel.setAttribute('for', 'dropdown');
        dropdownLabel.classList.add('pais__dropdownContainer');
        paisDiv.appendChild(dropdownLabel);

        const contenidoInputDiv = document.createElement('div');
        contenidoInputDiv.classList.add('pais__contenidoInput');
        const legend = document.createElement('legend');
        const label = document.createElement('label');
        label.setAttribute('for', 'phonenumber');
        label.textContent = 'País de residencia';
        legend.appendChild(label);
        contenidoInputDiv.appendChild(legend);

        const textFieldDiv = document.createElement('div');
        textFieldDiv.classList.add('contenidoInput__textfield');
        const phoneNumberInput = document.createElement('input');
        phoneNumberInput.type = 'text';
        phoneNumberInput.id = 'phonenumber';
        phoneNumberInput.classList.add('textfield__phoneNumber');
        phoneNumberInput.setAttribute('pattern', '\\d+');
        phoneNumberInput.setAttribute('maxlength', '11');
        phoneNumberInput.readOnly = true;
        textFieldDiv.appendChild(phoneNumberInput);

        const invalidMsg = document.createElement('span');
        const textInvalidMsg = document.createTextNode('Esto no es un país válido.');
        invalidMsg.classList.add('textfield__invalidMsg');
        invalidMsg.appendChild(textInvalidMsg);
        textFieldDiv.appendChild(invalidMsg);

        contenidoInputDiv.appendChild(textFieldDiv);
        paisDiv.appendChild(contenidoInputDiv);

        div.appendChild(paisDiv);
        return div;
    }

    createGeneroSelector() {
        const div = document.createElement('div');
        div.classList.add('formulario__genero');

        const svg = this.createSvgIcon('genero__svg', [
            {
                tag: 'path',
                attrs: {
                    d: 'M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z',
                    'stroke-width': '4',
                    'stroke-linejoin': 'round',
                    'stroke-linecap': 'round',
                    fill: 'none',
                }
            }
        ]);
        div.appendChild(svg);

        const select = document.createElement('select');
        select.classList.add('genero__selector');
        ['Hombre', 'Mujer'].forEach((optionText) => {
            const option = document.createElement('option');
            const textOption = document.createTextNode(optionText);
            option.appendChild(textOption);
            select.appendChild(option);
        });
        div.appendChild(select);

        return div;
    }

    createButtons() {
        const div = document.createElement('div');
        div.classList.add('principal__btns');

        const guardarBtn = document.createElement('button');
        guardarBtn.classList.add('btns__guardar');
        guardarBtn.type = 'submit';

        const texto1 = document.createElement('span');
        const textTexto1 = document.createTextNode('Guardar info');
        texto1.classList.add('guardar__texto1');
        texto1.appendChild(textTexto1);
        guardarBtn.appendChild(texto1);

        const texto2 = document.createElement('span');
        const textTexto2 = document.createTextNode('¡Guardado!');
        texto2.classList.add('guardar__texto2');
        texto2.appendChild(textTexto2);
        guardarBtn.appendChild(texto2);

        const cargarContenedor = document.createElement('span');
        cargarContenedor.classList.add('guardar__contenedorCargar');

        const loader = document.createElement('span');
        loader.classList.add('contenedorCargar__loader');
        cargarContenedor.appendChild(loader);

        guardarBtn.appendChild(cargarContenedor);
        div.appendChild(guardarBtn);

        const rehacerBtn = document.createElement('button');
        rehacerBtn.classList.add('btns__rehacer');
        rehacerBtn.type = 'reset';

        const textoRehacer = document.createElement('span');
        const textTextoRehacer = document.createTextNode('Limpiar');
        textoRehacer.classList.add('rehacer__texto');
        textoRehacer.appendChild(textTextoRehacer);
        rehacerBtn.appendChild(textoRehacer);

        const iconoRehacer = document.createElement('span');
        iconoRehacer.classList.add('rehacer__icono');
        iconoRehacer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
        </svg>`;
        rehacerBtn.appendChild(iconoRehacer);
        div.appendChild(rehacerBtn);

        return div;
    }

    createInputField(wrapperClass, labelText, inputId, type, required = false, additionalAttrs = {}) {
        const div = document.createElement('div');
        div.classList.add(wrapperClass);

        const label = document.createElement('label');
        const textLabel = document.createTextNode(labelText);
        label.setAttribute('for', inputId);
        label.appendChild(textLabel);
        div.appendChild(label);

        const input = document.createElement('input');
        input.type = type;
        input.id = inputId;
        input.name = inputId;

        if (required) input.required = true;

        for (const [key, value] of Object.entries(additionalAttrs)) {
            input[key] = value;
        }

        div.appendChild(input);
        return div;
    }

    createSvgIcon(classList, paths) {
        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.classList.add(...classList.split(' '));

        paths.forEach(({ tag, attrs }) => {
            const element = document.createElement(tag);
            for (const [key, value] of Object.entries(attrs)) {
                element.setAttribute(key, value);
            }
            svg.appendChild(element);
        });

        return svg;
    }

    createInputField(wrapperClass, labelText, inputId, type, required = false, additionalAttrs = {}) {
        const div = document.createElement('div');
        div.classList.add(wrapperClass);

        const label = document.createElement('label');
        const textLabel = document.createTextNode(labelText);
        label.setAttribute('for', inputId);
        label.appendChild(textLabel);
        div.appendChild(label);

        const input = document.createElement('input');
        input.type = type;
        input.id = inputId;
        input.name = inputId;

        if (required) input.required = true;

        for (const [key, value] of Object.entries(additionalAttrs)) {
            input[key] = value;
        }

        div.appendChild(input);
        return div;
    }

    createSvgIcon(classList, paths) {
        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.classList.add(...classList.split(' '));

        paths.forEach(({ tag, attrs }) => {
            const element = document.createElement(tag);
            for (const [key, value] of Object.entries(attrs)) {
                element.setAttribute(key, value);
            }
            svg.appendChild(element);
        });

        return svg;
    }
}

customElements.define("form-credenciales", FormCredencialesComponente);