export class KardiaevaPrincipalComponente extends HTMLElement {
    constructor() {
        super();
        const container = this.createContainer();
        this.appendChild(container);
        this.eventosJs();
    }


    createContainer() {
        const app = document.createElement("div");
        app.appendChild(this.principal());

        return app;
    }


    // PRINCIPAL
    principal() {
        const main = document.createElement('main');
        main.classList.add('main');

        const title = document.createElement('h2');
        title.classList.add('main__title');
        title.textContent = 'Panel de control';

        main.appendChild(title);
        main.appendChild(this.createStatsSection());
        main.appendChild(this.createActivitySection());

        return main;
    }

    createStatsSection() {
        const statsDiv = document.createElement('div');
        statsDiv.classList.add('stats');

        statsDiv.appendChild(this.createStatsCard('document', 'Total Documentos', '156'));
        statsDiv.appendChild(this.createCategoriesCard());
        statsDiv.appendChild(this.createStorageCard());

        return statsDiv;
    }

    createStatsCard(iconType, label, number) {
        const card = document.createElement('div');
        card.classList.add('stats__card');

        const icon = document.createElement('div');
        icon.classList.add('stats__icon', `stats__icon--${iconType}`);
        card.appendChild(icon);

        const content = document.createElement('div');
        content.classList.add('stats__content');

        const statsLabel = document.createElement('h3');
        statsLabel.classList.add('stats__label');
        statsLabel.textContent = label;
        content.appendChild(statsLabel);

        const statsNumber = document.createElement('p');
        statsNumber.classList.add('stats__number');
        statsNumber.textContent = number;
        content.appendChild(statsNumber);

        card.appendChild(content);

        return card;
    }

    createCategoriesCard() {
        const card = document.createElement('div');
        card.classList.add('stats__card');

        const icon = document.createElement('div');
        icon.classList.add('stats__icon', 'stats__icon--folder');
        card.appendChild(icon);

        const content = document.createElement('div');
        content.classList.add('stats__content');

        const statsLabel = document.createElement('h3');
        statsLabel.classList.add('stats__label');
        statsLabel.textContent = 'Categorias Principales';
        content.appendChild(statsLabel);

        const list = document.createElement('ul');
        list.classList.add('stats__list');

        const categories = [
            { label: 'Historia Clinica', number: 45 },
            { label: 'Receta Médica', number: 78 },
            { label: 'Análisis', number: 33 }
        ];

        categories.forEach(({ label, number }) => {
            const listItem = document.createElement('li');
            listItem.classList.add('stats__list-item');

            const listLabel = document.createElement('span');
            listLabel.classList.add('stats__list-label');
            listLabel.textContent = label;
            listItem.appendChild(listLabel);

            const listNumber = document.createElement('span');
            listNumber.classList.add('stats__list-number');
            listNumber.textContent = number;
            listItem.appendChild(listNumber);

            list.appendChild(listItem);
        });

        content.appendChild(list);
        card.appendChild(content);

        return card;
    }

    createStorageCard() {
        const card = document.createElement('div');
        card.classList.add('stats__card');

        const icon = document.createElement('div');
        icon.classList.add('stats__icon', 'stats__icon--storage');
        card.appendChild(icon);

        const content = document.createElement('div');
        content.classList.add('stats__content');

        const statsLabel = document.createElement('h3');
        statsLabel.classList.add('stats__label');
        statsLabel.textContent = 'Almacenamiento';
        content.appendChild(statsLabel);

        const storageDiv = document.createElement('div');
        storageDiv.classList.add('stats__storage');

        const storageText = document.createElement('div');
        storageText.classList.add('stats__storage-text');
        storageText.textContent = '75% Usado';
        storageDiv.appendChild(storageText);

        const storageBar = document.createElement('div');
        storageBar.classList.add('stats__storage-bar');

        const storageProgress = document.createElement('div');
        storageProgress.classList.add('stats__storage-progress');
        storageProgress.style.width = '75%';
        storageBar.appendChild(storageProgress);

        storageDiv.appendChild(storageBar);
        content.appendChild(storageDiv);
        card.appendChild(content);

        return card;
    }

    createActivitySection() {
        const section = document.createElement('section');
        section.classList.add('activity');

        const title = document.createElement('h2');
        title.classList.add('activity__title');
        title.textContent = 'Actividad Reciente';
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.classList.add('activity__grid');

        const column1 = this.createActivityColumn([
            { documento: 'Documento_1.pdf', time: 'Subido hace 1 hora', tag: 'HC' },
            { documento: 'Documento_2.pdf', time: 'Subido hace 5 horas', tag: 'RM' },
            { documento: 'Documento_3.pdf', time: 'Subido hace 8 horas', tag: 'ANS' }
        ]);

        const column2 = this.createActivityColumn([
            { documento: 'Documento_4.pdf', time: 'Subido hace 8 horas', tag: 'RM' },
            { documento: 'Documento_5.pdf', time: 'Subido hace 12 horas', tag: 'RM' },
            { documento: 'Documento_6.pdf', time: 'Subido hace 74 horas', tag: 'HC' }
        ]);

        grid.appendChild(column1);
        grid.appendChild(column2);

        section.appendChild(grid);

        return section;
    }

    createActivityColumn(activities) {
        const column = document.createElement('div');
        column.classList.add('activity__column');

        activities.forEach(({ documento, time, tag }) => {
            const card = document.createElement('div');
            card.classList.add('activity__card');

            const icon = document.createElement('div');
            icon.classList.add('activity__icon');
            card.appendChild(icon);

            const content = document.createElement('div');
            content.classList.add('activity__content');

            const documentTitle = document.createElement('h3');
            documentTitle.classList.add('activity__document');
            documentTitle.textContent = documento;
            content.appendChild(documentTitle);

            const documentTime = document.createElement('p');
            documentTime.classList.add('activity__time');
            documentTime.textContent = time;
            content.appendChild(documentTime);

            card.appendChild(content);

            const activityTag = document.createElement('span');
            activityTag.classList.add('activity__tag');
            activityTag.textContent = tag;
            card.appendChild(activityTag);

            column.appendChild(card);
        });

        return column;
    }


    // PIE DE PÁGINA
    


    // EVENTOS JS
    eventosJs() {
        const updateStorageBar = (percentage) => {
            const progressBar = document.querySelector('.stats__storage-progress');
            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
            }
        };

        // Example usage:
        updateStorageBar(75);
    }
}

customElements.define("kardiaeva-principal", KardiaevaPrincipalComponente);