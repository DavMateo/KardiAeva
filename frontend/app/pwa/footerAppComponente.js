export class FooterAppComponente extends HTMLElement {
    constructor() {
        super();
        const footer = this.createNav();
        this.appendChild(footer);
        this.eventosJS();
    }


    createNav() {
        const nav = document.createElement('nav');
        nav.classList.add('nav');

        nav.appendChild(this.createNavItem('#', './../assets/img/png/icono_página_principal.png', 'Principal', true));
        nav.appendChild(this.createFabButton());
        nav.appendChild(this.createNavItem('#', './../assets/img/png/icono_buscar_documentos.png', 'Buscar'));

        return nav;
    }

    createNavItem(href, iconSrc, text, isActive = false) {
        const link = document.createElement('a');
        link.href = href;
        link.classList.add('nav__item');
        link.id = text.toLowerCase();
        if (isActive) {
            link.classList.add('nav__item--active');
        }

        const icon = document.createElement('img');
        icon.src = iconSrc;
        icon.alt = '';
        icon.classList.add('nav__icon');
        link.appendChild(icon);

        const span = document.createElement('span');
        span.classList.add('nav__text');
        span.textContent = text;
        link.appendChild(span);

        return link;
    }

    createFabButton() {
        const button = document.createElement('button');
        button.classList.add('nav__fab');
        button.id = "subir";

        const span = document.createElement('span');
        span.classList.add('nav__fab-icon');
        span.textContent = '+';
        button.appendChild(span);

        return button;
    }

    eventosJS() {
        const linkBaseRedir = "/static/templates/kardiAeva";
        const btnInicio = document.getElementById("principal");
        const btnSubirArchivos = document.getElementById("subir");
        const btnVerArchivos = document.getElementById("buscar");

        const infoValues = [
            {
                paginaRedir: btnInicio,
                link: `${linkBaseRedir}_principal.html`
            },
            {
                paginaRedir: btnSubirArchivos,
                link: `${linkBaseRedir}_subirDocs.html`
            },
            {
                paginaRedir: btnVerArchivos,
                link: `${linkBaseRedir}_verDocs.html`
            }
        ];

        infoValues.forEach(elementBtnLink => {
            let elementBtn = elementBtnLink.paginaRedir;
            let elementLink = elementBtnLink.link;

            elementBtn.addEventListener("click", () => {
                location.href = elementLink;
            });
        });
    }
}

customElements.define("footerapp-componente", FooterAppComponente);