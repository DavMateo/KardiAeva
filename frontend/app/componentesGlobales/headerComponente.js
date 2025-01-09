export class HeaderComponente extends HTMLElement {
    constructor() {
        super();
        const header = this.encabezado();
        this.appendChild(header);
        this.eventosJs();
    }

    encabezado() {
        const headerEncabezado = document.createElement("header");
        headerEncabezado.classList.add("header");

        const divHeaderLogo = document.createElement("div");
        divHeaderLogo.classList.add("header__logo-container");
        headerEncabezado.appendChild(divHeaderLogo);

        const imgHeaderLogo = document.createElement("img");
        imgHeaderLogo.classList.add("header__logo");
        imgHeaderLogo.setAttribute("src", "./../assets/img/png/logo.png");
        imgHeaderLogo.setAttribute("alt", "KardiAeva");
        divHeaderLogo.appendChild(imgHeaderLogo);

        const h1HeaderTitulo = document.createElement("h1");
        const textH1HeaderTitulo = document.createTextNode("KardiAeva");
        h1HeaderTitulo.classList.add("header__title");
        h1HeaderTitulo.appendChild(textH1HeaderTitulo);
        divHeaderLogo.appendChild(h1HeaderTitulo);

        const navHeader = document.createElement("nav");
        navHeader.classList.add("header__nav");
        headerEncabezado.appendChild(navHeader);

        const aHeaderNavLink1 = document.createElement("a");
        const textAHeaderNavLink1 = document.createTextNode("Inicio");
        aHeaderNavLink1.setAttribute("href", "#");
        aHeaderNavLink1.classList.add("header__nav-link", "header__nav-link--active");
        aHeaderNavLink1.id = "inicio";
        navHeader.appendChild(aHeaderNavLink1);
        const iHeaderNavIcon1 = document.createElement("i");
        iHeaderNavIcon1.classList.add("header__nav-icon", "header__nav-icon--home");
        aHeaderNavLink1.appendChild(iHeaderNavIcon1);
        aHeaderNavLink1.appendChild(textAHeaderNavLink1);

        const aHeaderNavLink2 = document.createElement("a");
        const textAHeaderNavLink2 = document.createTextNode("Subir Archivos");
        aHeaderNavLink2.setAttribute("href", "#");
        aHeaderNavLink2.classList.add("header__nav-link");
        aHeaderNavLink2.id = "subirArchivos";
        navHeader.appendChild(aHeaderNavLink2);
        const iHeaderNavIcon2 = document.createElement("i");
        iHeaderNavIcon2.classList.add("header__nav-icon", "header__nav-icon--upload");
        aHeaderNavLink2.appendChild(iHeaderNavIcon2);
        aHeaderNavLink2.appendChild(textAHeaderNavLink2);

        const aHeaderNavLink3 = document.createElement("a");
        const textAHeaderNavLink3 = document.createTextNode("Explorar Archivos");
        aHeaderNavLink3.setAttribute("href", "#");
        aHeaderNavLink3.classList.add("header__nav-link");
        aHeaderNavLink3.id = "verArchivos";
        navHeader.appendChild(aHeaderNavLink3);
        const iHeaderNavIcon3 = document.createElement("i");
        iHeaderNavIcon3.classList.add("header__nav-icon", "header__nav-icon--upload");
        aHeaderNavLink3.appendChild(iHeaderNavIcon3);
        aHeaderNavLink3.appendChild(textAHeaderNavLink3);

        const divHeaderPerfil = document.createElement("div");
        divHeaderPerfil.classList.add("header__profile");
        headerEncabezado.appendChild(divHeaderPerfil);

        const imgHeaderPerfil = document.createElement("img");
        imgHeaderPerfil.classList.add("header__profile-image");
        imgHeaderPerfil.setAttribute("src", "./../assets/img/png/Sunset-Forrest.png");
        imgHeaderPerfil.setAttribute("alt", "Perfil");
        divHeaderPerfil.appendChild(imgHeaderPerfil);

        return headerEncabezado;
    }

    eventosJs() {
        const mobileNavLinks = document.querySelectorAll('.nav-mobile__link');

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                mobileNavLinks.forEach(l => l.classList.remove('nav-mobile__link--active'));
                link.classList.add('nav-mobile__link--active');
            });
        });


        const fabButton = document.querySelector('.nav-mobile__fab');
        if (fabButton) {
            fabButton.addEventListener('click', () => {
                console.log('FAB button clicked');
            });
        }


        const desktopNavLinks = document.querySelectorAll('.header__nav-link');
        desktopNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                desktopNavLinks.forEach(l => l.classList.remove('header__nav-link--active'));
                link.classList.add('header__nav-link--active');
            });
        });

        const linkBaseRedir = "/static/templates/kardiAeva";
        const btnInicio = document.getElementById("inicio");
        const btnSubirArchivos = document.getElementById("subirArchivos");
        const btnVerArchivos = document.getElementById("verArchivos");

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

customElements.define("header-componente", HeaderComponente);