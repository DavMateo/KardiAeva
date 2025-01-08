export class FooterComponente extends HTMLElement {
    constructor() {
        super();
        const contenido = this.pieDePagina();
        this.append(contenido);
    }

    /**
     * La asignación de nombres a las constantes se realiza mediante
     * la convención camelCase donde se mezclan dos nombres, el primero
     * se refiere al nombre de la etiqueta y el segundo al nombre de clase
     * asignado o un identificador directo al contenido del elemento. Si el
     * nombre se repite, se identificará con números incrementales partiendo
     * desde el número 1.
     * 
     * La separación se asigna según el contenido de cada conjunto de etiquetas
     * creadas, definiendo una ruta similar a un explorador de archivos usando las
     * clases de las mismas, indicando así la jerarquía de la etiqueta en cuestión 
     * de manera simplificada.
     */

    pieDePagina() {
        /* Footer */
        const footer = document.createElement("footer");
        footer.classList.add("pieDePagina");
        footer.setAttribute("id", "pieDePagina");

        footer.appendChild(this.createInfoPagina());
        footer.appendChild(this.createSloganWeb());
        footer.appendChild(this.createHorizontalRule());
        footer.appendChild(this.createContactForm());
        footer.appendChild(this.createHorizontalRule());
        footer.appendChild(this.createLinksSection());
        footer.appendChild(this.createCopyrightSection());
        footer.appendChild(this.createSocialMediaSection());

        return footer;
    }

    createInfoPagina() {
        const divInfoPagina = document.createElement("div");
        divInfoPagina.classList.add("infoPagina");

        const divInfoAnyo = document.createElement("div");
        divInfoAnyo.classList.add("infoPagina__anyo");
        divInfoPagina.appendChild(divInfoAnyo);

        const divAnyoFigura = document.createElement("div");
        divAnyoFigura.classList.add("anyo__figura");
        divAnyoFigura.textContent = "Año creación";
        divInfoAnyo.appendChild(divAnyoFigura);

        const divInfoLugar = document.createElement("div");
        divInfoLugar.classList.add("infoPagina__lugar");
        divInfoPagina.appendChild(divInfoLugar);

        const divLugarFigura = document.createElement("div");
        divLugarFigura.classList.add("lugar__figura");
        divLugarFigura.textContent = "Localización";
        divInfoLugar.appendChild(divLugarFigura);

        return divInfoPagina;
    }

    createSloganWeb() {
        const divSloganWeb = document.createElement("div");
        divSloganWeb.classList.add("sloganWeb");

        const divLogo = document.createElement("div");
        divLogo.classList.add("sloganWeb__logo");
        divSloganWeb.appendChild(divLogo);

        const imgLogo = document.createElement("img");
        imgLogo.setAttribute("src", "/static/assets/img/png/logo.png");
        imgLogo.setAttribute("alt", "Logo KardiAeva");
        imgLogo.classList.add("logo__img");
        divLogo.appendChild(imgLogo);

        const divTexto = document.createElement("div");
        divTexto.classList.add("sloganWeb__texto");
        divSloganWeb.appendChild(divTexto);

        const divFrase = document.createElement("div");
        divFrase.classList.add("texto__frase");
        divTexto.appendChild(divFrase);

        const pParte1 = document.createElement("p");
        const textParte1_1 = document.createTextNode("Tu ");
        pParte1.classList.add("frase__parte1");
        pParte1.appendChild(textParte1_1);
        const spanReferenciaPt1 = document.createElement("span");
        const textReferenciaPt1 = document.createTextNode("HISTORIA");
        spanReferenciaPt1.classList.add("referencia");
        spanReferenciaPt1.appendChild(textReferenciaPt1);
        pParte1.appendChild(spanReferenciaPt1);
        const textParte1_2 = document.createTextNode(" merece");
        pParte1.appendChild(textParte1_2);
        divFrase.appendChild(pParte1);

        const pParte2 = document.createElement("p");
        const textParte2_1 = document.createTextNode("ser ");
        pParte2.classList.add("frase__parte2");
        pParte2.appendChild(textParte2_1);
        const spanReferenciaPt2 = document.createElement("span");
        const textReferenciaPt2 = document.createTextNode("CUIDADA");
        spanReferenciaPt2.classList.add("referencia");
        spanReferenciaPt2.appendChild(textReferenciaPt2);
        pParte2.appendChild(spanReferenciaPt2);
        const textParte2_2 = document.createTextNode(".");
        pParte2.appendChild(textParte2_2);
        divFrase.appendChild(pParte2);

        const spanMarcaLogo = document.createElement("span");
        const textMarcaLogo = document.createTextNode("KardiAeva, 2024.");
        spanMarcaLogo.classList.add("texto__marcaLogo");
        spanMarcaLogo.appendChild(textMarcaLogo);
        divTexto.appendChild(spanMarcaLogo);
        

        return divSloganWeb;
    }

    createHorizontalRule() {
        return document.createElement("hr");
    }

    createContactForm() {
        const divContactame = document.createElement("div");
        divContactame.classList.add("contactame");

        const form = document.createElement("form");
        form.classList.add("form", "contactame__form");
        divContactame.appendChild(form);

        const legend = document.createElement("legend");
        const textLegend = document.createTextNode("¡Contáctame!");
        legend.classList.add("heading", "form__titulo");
        legend.appendChild(textLegend);
        form.appendChild(legend);

        const inputNombre = document.createElement("input");
        inputNombre.setAttribute("placeholder", "Nombre");
        inputNombre.setAttribute("type", "text");
        inputNombre.classList.add("input", "form__nombreInput");
        inputNombre.required = true;
        form.appendChild(inputNombre);

        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("placeholder", "Correo Electrónico");
        inputEmail.setAttribute("id", "email");
        inputEmail.setAttribute("type", "email");
        inputEmail.classList.add("input", "form__emailInput");
        inputEmail.required = true;
        form.appendChild(inputEmail);

        const textareaMensaje = document.createElement("textarea");
        textareaMensaje.setAttribute("placeholder", "Escríbenos aquí...");
        textareaMensaje.setAttribute("rows", "10");
        textareaMensaje.setAttribute("cols", "25");
        textareaMensaje.setAttribute("id", "mensaje");
        textareaMensaje.setAttribute("name", "message");
        textareaMensaje.classList.add("form__textarea");
        textareaMensaje.required = true;
        form.appendChild(textareaMensaje);

        const divBtns = document.createElement("div");
        divBtns.classList.add("form__btns");
        form.appendChild(divBtns);

        const btnEnviar = document.createElement("button");
        btnEnviar.classList.add("btns__enviar");
        btnEnviar.id = "btnEnviar";
        btnEnviar.setAttribute("type", "submit");
        const spanBtnEnviar = document.createElement("span");
        const textBtnEnviar = document.createTextNode("Enviar");
        spanBtnEnviar.appendChild(textBtnEnviar);
        btnEnviar.appendChild(spanBtnEnviar);
        divBtns.appendChild(btnEnviar);

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btns__eliminar");
        btnEliminar.setAttribute("type", "reset");
        const spanBtnRehacer = document.createElement("span");
        const textBtnRehacer = document.createTextNode("Rehacer");
        spanBtnRehacer.appendChild(textBtnRehacer);
        btnEliminar.appendChild(spanBtnRehacer);
        divBtns.appendChild(btnEliminar);
        

        return divContactame;
    }

    createLinksSection() {
        const divLinks = document.createElement("div");
        divLinks.classList.add("links");

        const linkSections = [
            {
                title: "mapa Sitio",
                items: ["Presentación", "Características", "Destacado", "Pie de página", "Mapa de la App completo"]
            },
            {
                title: "recursos",
                items: ["Documentación", "Preguntas frecuentes", "Blog"]
            },
            {
                title: "legal",
                items: ["Terminos y condiciones", "Política de Privacidad", "Cookies"]
            },
        ];

        linkSections.forEach((section) => {
            const divSection = document.createElement("div");
            divSection.classList.add(`links__${section.title.replace(/\s/g, "")}`);

            const h3 = document.createElement("h3");
            const textH3 = document.createTextNode(`
                ${section.title.replace(/\b\w/g, l => l.toUpperCase())}
            `);
            h3.classList.add("titulo");
            h3.appendChild(textH3);

            const ul = document.createElement("ul");
            ul.classList.add("enlaces");

            section.items.forEach((item) => {
                const li = document.createElement("li");
                li.classList.add("item");

                const a = document.createElement("a");
                a.setAttribute("href", "#");
                a.textContent = item;

                li.appendChild(a);
                ul.appendChild(li);
            });

            divSection.appendChild(h3);
            divSection.appendChild(ul);
            divLinks.appendChild(divSection);
        });

        return divLinks;
    }

    createCopyrightSection() {
        const divCopyright = document.createElement("div");
        divCopyright.classList.add("copyright");

        const span = document.createElement("span");
        const textSpan = document.createTextNode("© KardiAeva. Todos los derechos reservados.");
        span.classList.add("copyright__texto");
        span.appendChild(textSpan);
        divCopyright.appendChild(span);

        return divCopyright;
    }

    createSocialMediaSection() {
        const divSocial = document.createElement("div");
        divSocial.classList.add("redeSociales");

        const socialMedia = [
            {
                class: "instagram", 
                title: "Sígueme en instagram", 
                src: "/static/assets/img/png/icono_instagram.png", 
                alt: "Instagram"
            },
            {
                class: "cafe", 
                title: "¿Un café? Nah mejor un té :)", 
                src: "/static/assets/img/png/icono_comprame_un_tea.png", 
                alt: "¡Cómprame un Té!"
            },
            {
                class: "github", 
                title: "Mira mis otros proyectos", 
                src: "/static/assets/img/png/github_icono.png", 
                alt: "Github"
            },
            {
                class: "youtube", 
                title: "Visita mi canal de YouTube", 
                src: "/static/assets/img/png/youtube_icono.png", 
                alt: "YouTube"
            }
        ];

        socialMedia.forEach((media) => {
            const div = document.createElement("div");
            div.classList.add(`redeSociales__${media.class}`);
            div.setAttribute("title", media.title);

            const a = document.createElement("a");
            a.setAttribute("href", "#");

            const img = document.createElement("img");
            img.setAttribute("src", media.src);
            img.setAttribute("alt", media.alt);

            a.appendChild(img);
            div.appendChild(a);
            divSocial.appendChild(div);
        });

        return divSocial;
    }

    connectedCallback() {
        // Declarando las variables necesarias
        const btnEnviar = document.getElementById("btnEnviar");

        btnEnviar.addEventListener("submit", (e) => {
            e.preventDefault();
        })
    }
}

customElements.define('footer-componente', FooterComponente);