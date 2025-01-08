export class seccionHeroComponent extends HTMLElement {
    constructor() {
        super();
        const contenido = this.encabezado();
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

    encabezado() {
        // Definiendo las variables necesarias
        const imgPath = "/static/assets/img";


        /* ENCABEZADO */
        const headerEncabezado = document.createElement("header");
        headerEncabezado.classList.add("encabezado");
        headerEncabezado.id = "encabezado";

        /* ENCABEZADO -> HERO */
        const divHero = document.createElement("div");
        divHero.classList.add("hero");
        headerEncabezado.appendChild(divHero);

        /* ENCABEZADO -> HERO -> HERO__TEXTOS */
        const divHeroTextos = document.createElement("div");
        divHeroTextos.classList.add("hero__textos");
        divHero.appendChild(divHeroTextos);

        /* ENCABEZADO -> HERO -> HERO_TEXTOS -> TEXTOS__TITULO */
        const divTextosTitulo = document.createElement("div");
        divTextosTitulo.classList.add("textos__titulo");
        divHeroTextos.appendChild(divTextosTitulo);

        /* ENCABEZADO -> HERO -> HERO__TEXTOS -> TEXTOS__TITULO -> TITULO__TEXTO */
        const h1TituloTexto = document.createElement("h1");
        const textTituloTexto = document.createTextNode("Gestión Médica del");
        h1TituloTexto.classList.add("titulo__texto");
        h1TituloTexto.appendChild(textTituloTexto);
        divTextosTitulo.appendChild(h1TituloTexto);

        /* ENCABEZADO -> HERO -> HERO__TEXTOS -> TEXTOS__TITULO -> TITULO__TEXTO--RESALTADO */
        const h1TituloTextoResaltado = document.createElement("h1");
        const textTituloTextoResaltado = document.createTextNode("Futuro");
        h1TituloTextoResaltado.classList.add("titulo__texto--resaltado");
        h1TituloTextoResaltado.appendChild(textTituloTextoResaltado);
        divTextosTitulo.appendChild(h1TituloTextoResaltado);

        /* ENCABEZADO -> HERO -> HERO__TEXTOS -> TEXTOS__DESCRIPCION */
        const spanTextosDescr = document.createElement("span");
        const textTextosDescr = document.createTextNode("¿Tienes demasiados archivos médicos? Nuestra plataforma segura e intuitiva ¡es tu solución!");
        spanTextosDescr.classList.add("textos__descripcion");
        spanTextosDescr.appendChild(textTextosDescr);
        divHeroTextos.appendChild(spanTextosDescr);

        /* ENCABEZADO -> HERO -> HERO__BTNS */
        const divHeroBtns = document.createElement("div");
        divHeroBtns.classList.add("hero__btns");
        divHero.appendChild(divHeroBtns);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR */
        const buttonComenzar = document.createElement("button");
        buttonComenzar.classList.add("btns__comenzar");
        buttonComenzar.id = "btn_comenzar";
        divHeroBtns.appendChild(buttonComenzar);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> ARR2 */
        const svgIconArr2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIconArr2.setAttribute("viewBox", "0 0 24 24");
        svgIconArr2.classList.add("arr-2");
        buttonComenzar.appendChild(svgIconArr2);

        /* ENCABEZADO  -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> ARR2 -> PATH */
        const pathIconArr2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconArr2.setAttribute("d", "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z");
        svgIconArr2.appendChild(pathIconArr2);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> BTNCOMENZAR__TEXT */
        const spanComenzarTexto = document.createElement("span");
        const textComenzarTexto = document.createTextNode("Comenzar");
        spanComenzarTexto.classList.add("btnComenzar__text");
        spanComenzarTexto.appendChild(textComenzarTexto);
        buttonComenzar.appendChild(spanComenzarTexto);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> BTNCOMENZAR__CIRCLE */
        const spanComenzarCircle = document.createElement("span");
        spanComenzarCircle.classList.add("btnComenzar__circle");
        buttonComenzar.appendChild(spanComenzarCircle);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> ARR-1 */
        const svgIconArr1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIconArr1.setAttribute("viewBox", "0 0 24 24");
        svgIconArr1.classList.add("arr-1");
        buttonComenzar.appendChild(svgIconArr1);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> ARR-1 -> PATH */
        const pathIconArr1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconArr1.setAttribute("d", "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z");
        svgIconArr1.appendChild(pathIconArr1);

        /* ENCABEZADO -> HERO -> HERO__BTNS -> BTNS__COMENZAR -> BTNS__SABERMAS */
        const btnSaberMas = document.createElement("button");
        const textSaberMas = document.createTextNode("Saber más");
        btnSaberMas.classList.add("btns__sabermas");
        btnSaberMas.id = "btn_sabermas";
        btnSaberMas.appendChild(textSaberMas);
        divHeroBtns.appendChild(btnSaberMas);

        /* ENCABEZADO -> ENCABEZADO__IMG */
        const imgEncabezado = document.createElement("img");
        imgEncabezado.setAttribute("src", `${imgPath}/png/imagen_hero.png`);
        imgEncabezado.classList.add("encabezado__img");
        headerEncabezado.appendChild(imgEncabezado);


        return headerEncabezado;
    }

    connectedCallback() {
        // Definiendo las variables necesarias
        const htmlPath = "/static/templates";
        const btnComenzar = document.getElementById("btn_comenzar");
        const btnSabermas = document.getElementById("btn_sabermas");

        btnComenzar.addEventListener("click", () => {
            location.href = `${htmlPath}/login.html`;
        });

        btnSabermas.addEventListener("click", () => {
            location.href = `#principal`;
        })
    }

    disconnectedCallback() {
        
    }
}

customElements.define('seccionhero-component', seccionHeroComponent);