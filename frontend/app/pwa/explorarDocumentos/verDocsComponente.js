export class VerDocsComponente extends HTMLElement {
    constructor() {
        super();
        const container = this.createContainer();
        this.appendChild(container);
        this.eventosJs();
    }

    createContainer() {
        const main = document.createElement('main');
        main.classList.add('main');
        main.appendChild(this.createExplorerSection());

        return main;
    }

    createExplorerSection() {
        const section = document.createElement('section');
        section.classList.add('explorer');

        const title = document.createElement('h2');
        title.classList.add('explorer__title');
        title.textContent = 'Explorar Documentos';
        section.appendChild(title);

        const controls = this.createExplorerControls();
        section.appendChild(controls);

        const documents = this.createDocuments();
        section.appendChild(documents);

        return section;
    }

    createExplorerControls() {
        const controlsDiv = document.createElement('div');
        controlsDiv.classList.add('explorer__controls');

        // Contenedor de búsqueda
        const searchDiv = document.createElement('div');
        searchDiv.classList.add('search');

        const searchIcon = this.createSvgIcon('search__icon', [
            { tag: 'circle', attrs: { cx: '11', cy: '11', r: '8' } },
            { tag: 'line', attrs: { x1: '21', y1: '21', x2: '16.65', y2: '16.65' } }
        ]);
        searchDiv.appendChild(searchIcon);

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.classList.add('search__input');
        searchInput.placeholder = 'Buscar documentos...';
        searchDiv.appendChild(searchInput);

        controlsDiv.appendChild(searchDiv);

        // Contenedor de filtros
        const filterDiv = document.createElement('div');
        filterDiv.classList.add('filter');

        const filterButton = document.createElement('button');
        filterButton.classList.add('filter__button');
        filterButton.id = 'filterButton';

        const filterIcon = this.createSvgIcon('filter__icon', [
            { tag: 'polygon', attrs: { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' } }
        ]);
        filterButton.appendChild(filterIcon);

        const filterText = document.createTextNode('Filtros');
        filterButton.appendChild(filterText);
        filterDiv.appendChild(filterButton);

        const filterDropdown = document.createElement('div');
        filterDropdown.classList.add('filter__dropdown');
        filterDropdown.id = 'filterDropdown';
        filterDiv.appendChild(filterDropdown);

        controlsDiv.appendChild(filterDiv);

        return controlsDiv;
    }

    createDocuments() {
        const documentsDiv = document.createElement('div');
        documentsDiv.classList.add('documents');

        // Crear la lista de documentos en formato "cards"
        const documentCards = this.createDocumentCards();
        documentsDiv.appendChild(documentCards);

        // Crear la tabla de documentos
        const documentTable = this.createDocumentTable();
        documentsDiv.appendChild(documentTable);

        return documentsDiv;
    }

    createDocumentCards() {
        const cardList = document.createElement('div');
        cardList.classList.add('documents__list', 'documents__list--cards');

        const documents = [
            {
                title: 'Historia_Clinica_2024.pdf',
                date: '2024-02-15',
                category: 'Historia Clínica',
                specialty: 'Cardiología'
            },
            {
                title: 'Analisis_Sangre.pdf',
                date: '2024-02-14',
                category: 'Análisis',
                specialty: 'Hematología'
            },
            {
                title: 'Receta_Medicamentos.pdf',
                date: '2024-02-13',
                category: 'Receta Médica',
                specialty: 'Neurología'
            }
        ];

        documents.forEach((doc) => {
            const card = this.createDocumentCard(doc);
            cardList.appendChild(card);
        });

        return cardList;
    }

    createDocumentCard({ title, date, category, specialty }) {
        const card = document.createElement('article');
        card.classList.add('document-card');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('document-card__title');
        cardTitle.textContent = title;
        card.appendChild(cardTitle);

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('document-card__info');

        const cardDate = document.createElement('span');
        cardDate.classList.add('document-card__date');
        cardDate.textContent = date;
        cardInfo.appendChild(cardDate);

        const cardCategory = document.createElement('span');
        cardCategory.classList.add('document-card__category');
        cardCategory.textContent = category;
        cardInfo.appendChild(cardCategory);

        const cardSpecialty = document.createElement('span');
        cardSpecialty.classList.add('document-card__specialty');
        cardSpecialty.textContent = specialty;
        cardInfo.appendChild(cardSpecialty);

        card.appendChild(cardInfo);

        const cardActions = this.createDocumentActions();
        card.appendChild(cardActions);

        return card;
    }

    createDocumentActions() {
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('document-card__actions');

        const actions = [
            { title: 'Ver', icon: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z', circle: { cx: '12', cy: '12', r: '3' } },
            { title: 'Editar', icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' },
            { title: 'Eliminar', icon: 'M3 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' }
        ];

        actions.forEach(({ title, icon, circle }) => {
            const button = document.createElement('button');
            button.classList.add('document-card__action');
            button.title = title;

            const svg = this.createSvgIcon('svgIcono', [{ tag: 'path', attrs: { d: icon } }]);
            if (circle) {
                svg.appendChild(this.createSvgElement('circle', circle));
            }

            button.appendChild(svg);
            actionsDiv.appendChild(button);
        });

        return actionsDiv;
    }

    createDocumentTable() {
        const table = document.createElement('table');
        table.classList.add('documents__table');

        const thead = document.createElement('thead');
        thead.innerHTML = `
        <tr>
          <th>NOMBRE</th>
          <th>CATEGORÍA</th>
          <th>ESPECIALIDAD</th>
          <th>FECHA</th>
          <th>ACCIONES</th>
        </tr>
      `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        const rows = [
            ['Historia_Clinica_2024.pdf', 'Historia Clínica', 'Cardiología', '2024-02-15'],
            ['Analisis_Sangre.pdf', 'Análisis', 'Hematología', '2024-02-14'],
            ['Receta_Medicamentos.pdf', 'Receta Médica', 'Neurología', '2024-02-13']
        ];

        rows.forEach((row) => {
            const tr = document.createElement('tr');
            row.forEach((text) => {
                const td = document.createElement('td');
                td.textContent = text;
                tr.appendChild(td);
            });

            const actionsTd = document.createElement('td');
            actionsTd.appendChild(this.createDocumentActions());
            tr.appendChild(actionsTd);

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        return table;
    }

    createSvgIcon(className, paths) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.classList.add(className);

        paths.forEach(({ tag, attrs }) => {
            const element = this.createSvgElement(tag, attrs);
            svg.appendChild(element);
        });

        return svg;
    }

    createSvgElement(tag, attrs) {
        const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const [key, value] of Object.entries(attrs)) {
            element.setAttribute(key, value);
        }
        return element;
    }

    eventosJs() {
        // Referencias a elementos del DOM
        const searchInput = document.querySelector('.search__input');
        const filterButton = document.getElementById('filterButton');
        const filterDropdown = document.getElementById('filterDropdown');
        const documentsListCards = document.querySelector('.documents__list--cards');
        const documentsTable = document.querySelector('.documents__table tbody');

        // Estado de la aplicación
        let documents = [
            {
                id: 1,
                name: 'Historia_Clinica_2024.pdf',
                date: '2024-02-15',
                category: 'Historia Clínica',
                specialty: 'Cardiología'
            },
            {
                id: 2,
                name: 'Analisis_Sangre.pdf',
                date: '2024-02-14',
                category: 'Análisis',
                specialty: 'Hematología'
            },
            {
                id: 3,
                name: 'Receta_Medicamentos.pdf',
                date: '2024-02-13',
                category: 'Receta Médica',
                specialty: 'Neurología'
            }
        ];

        // Funcionalidad de búsqueda
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase();
            filterDocuments(searchTerm);
        });

        // Toggle del dropdown de filtros
        filterButton.addEventListener('click', function () {
            filterDropdown.classList.toggle('filter__dropdown--active');
        });

        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', function (e) {
            if (!filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
                filterDropdown.classList.remove('filter__dropdown--active');
            }
        });

        // Función para filtrar documentos
        function filterDocuments(searchTerm) {
            const filteredDocs = documents.filter(doc =>
                doc.name.toLowerCase().includes(searchTerm) ||
                doc.category.toLowerCase().includes(searchTerm) ||
                doc.specialty.toLowerCase().includes(searchTerm)
            );
            renderDocuments(filteredDocs);
        }

        // Función para renderizar documentos
        function renderDocuments(docs) {
            // Renderizar vista de tarjetas
            documentsListCards.innerHTML = docs.map(doc => `
                <article class="document-card">
                    <h3 class="document-card__title">${doc.name}</h3>
                    <div class="document-card__info">
                        <span class="document-card__date">${doc.date}</span>
                        <span class="document-card__category">${doc.category}</span>
                        <span class="document-card__specialty">${doc.specialty}</span>
                    </div>
                    <div class="document-card__actions">
                        <button class="document-card__action" title="Ver">
                            <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                        <button class="document-card__action" title="Editar">
                            <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button class="document-card__action" title="Eliminar">
                            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                </article>
            `).join('');

            // Renderizar vista de tabla
            documentsTable.innerHTML = docs.map(doc => `
                <tr>
                    <td>${doc.name}</td>
                    <td>${doc.category}</td>
                    <td>${doc.specialty}</td>
                    <td>${doc.date}</td>
                    <td>
                        <div class="document-card__actions">
                            <button class="document-card__action" title="Ver">
                                <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </button>
                            <button class="document-card__action" title="Editar">
                                <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </button>
                            <button class="document-card__action" title="Eliminar">
                                <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `).join('');
        }

        // Inicializar la vista
        renderDocuments(documents);
    }
}

customElements.define("kardiaeva-verdocs", VerDocsComponente);