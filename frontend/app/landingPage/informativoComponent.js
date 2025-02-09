export class InformativoComponent extends HTMLElement {
    constructor() {
        super();
        const contenido = this.mainContent();
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

    mainContent() {
        /* PRINCIPAL */
        const mainPrincipal = document.createElement("main");
        mainPrincipal.classList.add("principal");
        mainPrincipal.id = "principal";

        /* PRINCIPAL -> INFOINICIAL */
        const divInfoinicial = document.createElement("div");
        divInfoinicial.classList.add("infoinicial");
        mainPrincipal.appendChild(divInfoinicial);

        /* PRINCIPAL -> INFOINICIAL -> INFOINICIAL__TITULO */
        const h2InfoinicialTitulo = document.createElement("h2");
        const textInfoinicialTitulo = document.createTextNode("Características Principales");
        h2InfoinicialTitulo.classList.add("infoinicial__titulo");
        h2InfoinicialTitulo.appendChild(textInfoinicialTitulo);
        divInfoinicial.appendChild(h2InfoinicialTitulo);

        /* PRINCIPAL -> INFOINICIAL -> INFOINICIAL__DESCRIPCION */
        const pInfoinicialDescr = document.createElement("p");
        const textInfoinicialDescr = document.createTextNode("Diseñado para pacientes y doctores que buscan llevar una mejor administración de sus controles médicos.");
        pInfoinicialDescr.classList.add("infoinicial__descripcion");
        pInfoinicialDescr.appendChild(textInfoinicialDescr);
        divInfoinicial.appendChild(pInfoinicialDescr);

        mainPrincipal.appendChild(this.tarjetasDescriptivas());
        mainPrincipal.appendChild(this.tarjetasCaracteristicas());


        return mainPrincipal;
    }

    tarjetasDescriptivas() {
        /* PRINCIPAL -> CONTAINERTARJETAS */
        const divContainerTarjetas = document.createElement("div");
        divContainerTarjetas.classList.add("containerTarjetas");

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD */
        const divContTarjSeguridad = document.createElement("div");
        divContTarjSeguridad.classList.add("containerTarjetas__seguridad");
        divContainerTarjetas.appendChild(divContTarjSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD -> ICONO */
        const divIconoSeguridad = document.createElement("div");
        divIconoSeguridad.classList.add("icono");
        divContTarjSeguridad.appendChild(divIconoSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD -> ICONO -> SVG */
        const svgIconoSeguridad = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIconoSeguridad.setAttribute("width", "24");
        svgIconoSeguridad.setAttribute("height", "24");
        svgIconoSeguridad.setAttribute("viewBox", "0 0 24 24");
        svgIconoSeguridad.setAttribute("fill", "none");
        divIconoSeguridad.appendChild(svgIconoSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD -> ICONO -> SVG -> PATH */
        const pathIconoSeguridad = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconoSeguridad.setAttribute("d", "M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10536 4.73478 5.00001 5 5.00001C7 5.00001 9.5 3.80001 11.24 2.28001C11.4519 2.09901 11.7214 1.99956 12 1.99956C12.2786 1.99956 12.5481 2.09901 12.76 2.28001C14.51 3.81001 17 5.00001 19 5.00001C19.2652 5.00001 19.5196 5.10536 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001V13Z");
        pathIconoSeguridad.setAttribute("stroke", "#2563EB");
        pathIconoSeguridad.setAttribute("stroke-width", "2");
        pathIconoSeguridad.setAttribute("stroke-linecap", "round");
        pathIconoSeguridad.setAttribute("stroke-linejoin", "round");
        svgIconoSeguridad.appendChild(pathIconoSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD -> CONTENIDO */
        const divContenidoSeguridad = document.createElement("div");
        divContenidoSeguridad.classList.add("contenido");
        divContTarjSeguridad.appendChild(divContenidoSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD -> CONTENIDO -> CONTENIDO__TITULO */
        const h3ContTituloSeguridad = document.createElement("h3");
        const textContTituloSeguridad = document.createTextNode("Seguridad");
        h3ContTituloSeguridad.classList.add("contenido__titulo");
        h3ContTituloSeguridad.appendChild(textContTituloSeguridad);
        divContenidoSeguridad.appendChild(h3ContTituloSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__SEGURIDAD -> CONTENIDO -> CONTENIDO__DESCRIPCION */
        const pContDescrSeguridad = document.createElement("p");
        const textContDescrSeguridad = document.createTextNode("Protección de tus archivos e información médica con un verdadero cifrado de extremo a extremo.");
        pContDescrSeguridad.classList.add("contenido__descripcion");
        pContDescrSeguridad.appendChild(textContDescrSeguridad);
        divContenidoSeguridad.appendChild(pContDescrSeguridad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD */
        const divContainerTarjetasProductividad = document.createElement("div");
        divContainerTarjetasProductividad.classList.add("containerTarjetas__productividad");
        divContainerTarjetas.appendChild(divContainerTarjetasProductividad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD -> ICONO */
        const divIconoProductividad = document.createElement("div");
        divIconoProductividad.classList.add("icono");
        divContainerTarjetasProductividad.appendChild(divIconoProductividad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD -> ICONO -> SVG */
        const svgIconoProductividad = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIconoProductividad.setAttribute("width", "24");
        svgIconoProductividad.setAttribute("height", "24");
        svgIconoProductividad.setAttribute("viewBox", "0 0 24 24");
        svgIconoProductividad.setAttribute("fill", "none");
        divIconoProductividad.appendChild(svgIconoProductividad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD -> ICONO -> SVG -> PATH */
        const pathIconoProductividad = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconoProductividad.setAttribute("d", "M13 2L3 14H12L11 22L21 10H12L13 2Z");
        pathIconoProductividad.setAttribute("stroke", "#2563EB");
        pathIconoProductividad.setAttribute("stroke-width", "2");
        pathIconoProductividad.setAttribute("stroke-linecap", "round");
        pathIconoProductividad.setAttribute("stroke-linejoin", "round");
        svgIconoProductividad.appendChild(pathIconoProductividad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD -> CONTENIDO */
        const divContenidoProductividad = document.createElement("div");
        divContenidoProductividad.classList.add("contenido");
        divContainerTarjetasProductividad.appendChild(divContenidoProductividad);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD -> CONTENIDO -> CONTENIDO__TITULO */
        const h3ContProdTitulo = document.createElement("h3");
        const textContProdTitulo = document.createTextNode("Productividad");
        h3ContProdTitulo.classList.add("contenido__titulo");
        h3ContProdTitulo.appendChild(textContProdTitulo);
        divContenidoProductividad.appendChild(h3ContProdTitulo);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PRODUCTIVIDAD -> CONTENIDO -> CONTENIDO__DESCRIPCION */
        const pContProdDescr = document.createElement("p");
        const textContProdDescr = document.createTextNode("Escanea tus archivos y accede a ellos desde un mismo lugar");
        pContProdDescr.classList.add("contenido__descripcion");
        pContProdDescr.appendChild(textContProdDescr);
        divContenidoProductividad.appendChild(pContProdDescr);

        /* PRINCIPAL -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION */
        const divContainerTarjetasPersonalizacion = document.createElement("div");
        divContainerTarjetasPersonalizacion.classList.add("containerTarjetas__personalizacion");
        divContainerTarjetas.appendChild(divContainerTarjetasPersonalizacion);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> ICONO */
        const divIconoPersonalizacion = document.createElement("div");
        divIconoPersonalizacion.classList.add("icono");
        divContainerTarjetasPersonalizacion.appendChild(divIconoPersonalizacion);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> ICONO -> SVG */
        const svgIconoPersonalizacion = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIconoPersonalizacion.setAttribute("width", "24");
        svgIconoPersonalizacion.setAttribute("height", "24");
        svgIconoPersonalizacion.setAttribute("viewBox", "0 0 24 24");
        svgIconoPersonalizacion.setAttribute("fill", "none");
        divIconoPersonalizacion.appendChild(svgIconoPersonalizacion);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> ICONO -> SVG */
        const pathIconoPersonalizacion1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconoPersonalizacion1.setAttribute("d", "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21");
        pathIconoPersonalizacion1.setAttribute("stroke", "#2563EB");
        pathIconoPersonalizacion1.setAttribute("stroke-width", "2");
        pathIconoPersonalizacion1.setAttribute("stroke-linecap", "round");
        pathIconoPersonalizacion1.setAttribute("stroke-linejoin", "round");
        svgIconoPersonalizacion.appendChild(pathIconoPersonalizacion1);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> ICONO -> SVG */
        const pathIconoPersonalizacion2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconoPersonalizacion2.setAttribute("d", "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z");
        pathIconoPersonalizacion2.setAttribute("stroke", "#2563EB");
        pathIconoPersonalizacion2.setAttribute("stroke-width", "2");
        pathIconoPersonalizacion2.setAttribute("stroke-linecap", "round");
        pathIconoPersonalizacion2.setAttribute("stroke-linejoin", "round");
        svgIconoPersonalizacion.appendChild(pathIconoPersonalizacion2);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> ICONO -> SVG */
        const pathIconoPersonalizacion3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconoPersonalizacion3.setAttribute("d", "M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13");
        pathIconoPersonalizacion3.setAttribute("stroke", "#2563EB");
        pathIconoPersonalizacion3.setAttribute("stroke-width", "2");
        pathIconoPersonalizacion3.setAttribute("stroke-linecap", "round");
        pathIconoPersonalizacion3.setAttribute("stroke-linejoin", "round");
        svgIconoPersonalizacion.appendChild(pathIconoPersonalizacion3);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> ICONO -> SVG */
        const pathIconoPersonalizacion4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathIconoPersonalizacion4.setAttribute("d", "M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88");
        pathIconoPersonalizacion4.setAttribute("stroke", "#2563EB");
        pathIconoPersonalizacion4.setAttribute("stroke-width", "2");
        pathIconoPersonalizacion4.setAttribute("stroke-linecap", "round");
        pathIconoPersonalizacion4.setAttribute("stroke-linejoin", "round");
        svgIconoPersonalizacion.appendChild(pathIconoPersonalizacion4);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> CONTENIDO */
        const divContenidoPersonalizacion = document.createElement("div");
        divContenidoPersonalizacion.classList.add("contenido");
        divContainerTarjetasPersonalizacion.appendChild(divContenidoPersonalizacion);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> CONTENIDO -> CONTENIDO__TITULO */
        const h3ContTituloPers = document.createElement("h3");
        const textContTituloPers = document.createTextNode("Personalizada");
        h3ContTituloPers.classList.add("contenido__titulo");
        h3ContTituloPers.appendChild(textContTituloPers);
        divContenidoPersonalizacion.appendChild(h3ContTituloPers);

        /* PRINCIPAL  -> CONTAINERTARJETAS -> CONTAINERTARJETAS__PERSONALIZACION -> CONTENIDO -> CONTENIDO__DESCRIPCION */
        const pContDescrPers = document.createElement("p");
        const textContDescrPers = document.createTextNode("¡La IA integrada aprende de ti! Estará siempre lista para gestionar tus dudas");
        pContDescrPers.classList.add("contenido__descripcion");
        pContDescrPers.appendChild(textContDescrPers);
        divContenidoPersonalizacion.appendChild(pContDescrPers);

        return divContainerTarjetas;
    }

    tarjetasCaracteristicas() {
        /* PRINCIPAL -> CARACTERISTICAS */
        const divCaracteristicas = document.createElement("div");
        divCaracteristicas.classList.add("caracteristicas");
        divCaracteristicas.setAttribute("title", "Integración con IA");

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__IA */
        const divCaracteristicasIA = document.createElement("div");
        divCaracteristicasIA.classList.add("caracteristicas__ia");
        divCaracteristicas.appendChild(divCaracteristicasIA);

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__IA -> SVG */
        const svgCaracteristicasIA = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgCaracteristicasIA.setAttribute("width", "65");
        svgCaracteristicasIA.setAttribute("height", "65");
        svgCaracteristicasIA.setAttribute("viewBox", "0 0 65 65");
        svgCaracteristicasIA.setAttribute("fill", "none");
        svgCaracteristicasIA.classList.add("svg__icon");
        divCaracteristicasIA.appendChild(svgCaracteristicasIA);

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__IA -> SVG -> PATH */
        const pathCaractIA1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathCaractIA1.setAttribute("d", "M50.3376 40.1313C50.9324 38.6229 53.0676 38.6229 53.6624 40.1313L56.2644 46.7288C56.446 47.1893 56.8107 47.554 57.2712 47.7356L63.8687 50.3376C65.3771 50.9324 65.3771 53.0676 63.8687 53.6624L57.2712 56.2644C56.8107 56.446 56.446 56.8107 56.2644 57.2712L53.6624 63.8687C53.0676 65.3771 50.9324 65.3771 50.3376 63.8687L47.7356 57.2712C47.554 56.8107 47.1893 56.446 46.7288 56.2644L40.1313 53.6624C38.6229 53.0676 38.6229 50.9324 40.1313 50.3376L46.7288 47.7356C47.1893 47.554 47.554 47.1893 47.7356 46.7288L50.3376 40.1313Z");
        pathCaractIA1.setAttribute("fill", "#2563EB");
        pathCaractIA1.setAttribute("fill-opacity", "0.85");
        svgCaracteristicasIA.appendChild(pathCaractIA1);

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__IA -> SVG -> PATH */
        const pathCaractIA2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathCaractIA2.setAttribute("d", "M23.4891 3.06991C25.1034 -1.02331 30.8964 -1.02331 32.5108 3.06995L37.5134 15.7546C38.0062 17.0043 38.9955 17.9935 40.2452 18.4864L52.9302 23.4891C57.0233 25.1034 57.0233 30.8964 52.9302 32.5108L40.2452 37.5134C38.9955 38.0062 38.0062 38.9955 37.5134 40.2452L32.5108 52.9302C30.8964 57.0233 25.1034 57.0233 23.4891 52.9302L18.4864 40.2452C17.9935 38.9955 17.0043 38.0062 15.7546 37.5134L3.06991 32.5108C-1.02331 30.8964 -1.02331 25.1034 3.06995 23.4891L15.7546 18.4864C17.0043 17.9935 17.9935 17.0043 18.4864 15.7546L23.4891 3.06991Z");
        pathCaractIA2.setAttribute("fill", "#2563EB");
        svgCaracteristicasIA.appendChild(pathCaractIA2);

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__EJECUCIONLOCAL */
        const divCaracteristicasEjecLocal = document.createElement("div");
        divCaracteristicasEjecLocal.classList.add("caracteristicas__ejecucionLocal");
        divCaracteristicasEjecLocal.setAttribute("title", "Ejecución 100% en tu computadora");
        divCaracteristicas.appendChild(divCaracteristicasEjecLocal);

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__EJECUCIONLOCAL -> SVG */
        const svgCaracteristicasEjecLocal = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgCaracteristicasEjecLocal.setAttribute("width", "58");
        svgCaracteristicasEjecLocal.setAttribute("height", "64");
        svgCaracteristicasEjecLocal.setAttribute("viewBox", "0 0 58 64");
        svgCaracteristicasEjecLocal.setAttribute("fill", "none");
        divCaracteristicasEjecLocal.appendChild(svgCaracteristicasEjecLocal);

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__EJECUCIONLOCAL -> SVG -> PATH */
        const pathsData = [
            {
                d: "M57.6659 9.61999C56.7869 4.25444 44.2291 0 28.86 0C13.4908 0 0.93314 4.25444 0.0541125 9.61999H0V10.2212V24.05V24.6512V25.2525V38.48V39.0812V39.6825V54.1124H0.0541125C0.93314 59.4768 13.492 63.7324 28.86 63.7324C44.2279 63.7324 56.7869 59.4768 57.6659 54.1124H57.72V39.6825V39.0812V38.48V25.2525V24.6512V24.05V10.2212V9.61999H57.6659Z",
                fill: "#424A60",
            },
            {
                d: "M28.86 49.302C12.9209 49.302 0 44.7253 0 39.0808V54.112H0.0541125C0.93314 59.4764 13.492 63.732 28.86 63.732C44.2279 63.732 56.7869 59.4764 57.6659 54.112H57.72V39.0808C57.72 44.7253 44.7991 49.302 28.86 49.302Z",
                fill: "#2563EB",
                "fill-opacity": "0.6",
            },
            {
                d: "M0 38.4805V39.0817C0 38.8797 0.021645 38.6801 0.0541125 38.4805H0Z",
                fill: "#424A60",
            },
            {
                d: "M57.6657 38.4805C57.6982 38.6801 57.7198 38.8797 57.7198 39.0817V38.4805H57.6657Z",
                fill: "#424A60",
            },
            {
                d: "M28.86 34.8721C12.9209 34.8721 0 30.2953 0 24.6508V39.682H0.0541125C0.93314 45.0464 13.492 49.302 28.86 49.302C44.2279 49.302 56.7869 45.0464 57.6659 39.682H57.72V24.6508C57.72 30.2953 44.7991 34.8721 28.86 34.8721Z",
                fill: "#2563EB",
            },
            {
                d: "M0 24.0505V24.6517C0 24.4497 0.021645 24.2501 0.0541125 24.0505H0Z",
                fill: "#7FABDA",
            },
            {
                d: "M57.6657 24.0505C57.6982 24.2501 57.7198 24.4497 57.7198 24.6517V24.0505H57.6657Z",
                fill: "#7FABDA",
            },
            {
                d: "M28.86 20.4425C44.7989 20.4425 57.72 15.8663 57.72 10.2212C57.72 4.57621 44.7989 0 28.86 0C12.9211 0 0 4.57621 0 10.2212C0 15.8663 12.9211 20.4425 28.86 20.4425Z",
                fill: "#DBEAFE",
                filter: "url(#filter0_i_14_113)",
            },
            {
                d: "M28.86 20.4421C12.9209 20.4421 0 15.8654 0 10.2208V25.2521H0.0541125C0.93314 30.6164 13.492 34.872 28.86 34.872C44.2279 34.872 56.7869 30.6164 57.6659 25.2521H57.72V10.2208C57.72 15.8654 44.7991 20.4421 28.86 20.4421Z",
                fill: "#93C5FD",
            },
        ];

        pathsData.forEach((data) => {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            Object.entries(data).forEach(([key, value]) => path.setAttribute(key, value));
            svgCaracteristicasEjecLocal.appendChild(path);
        });

        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", "filter0_i_14_113");
        filter.setAttribute("x", "0");
        filter.setAttribute("y", "0");
        filter.setAttribute("width", "57.72");
        filter.setAttribute("height", "24.4425");
        filter.setAttribute("filterUnits", "userSpaceOnUse");
        filter.setAttribute("color-interpolation-filters", "sRGB");

        const feFlood = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        feFlood.setAttribute("flood-opacity", "0");
        feFlood.setAttribute("result", "BackgroundImageFix");
        filter.appendChild(feFlood);

        const feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        feBlend.setAttribute("mode", "normal");
        feBlend.setAttribute("in", "SourceGraphic");
        feBlend.setAttribute("in2", "BackgroundImageFix");
        feBlend.setAttribute("result", "shape");
        filter.appendChild(feBlend);

        defs.appendChild(filter);
        svgCaracteristicasEjecLocal.appendChild(defs);


        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__ARCHIVOSCENTRALIZADOS */
        const divArchivosCentralizados = document.createElement("div");
        divArchivosCentralizados.classList.add("caracteristicas__archivosCentralizados");
        divArchivosCentralizados.setAttribute("title", "Guarda tus archivos en un mismo lugar");

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__ARCHIVOSCENTRALIZADOS -> SVG */
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "57");
        svg.setAttribute("height", "65");
        svg.setAttribute("viewBox", "0 0 57 65");
        svg.setAttribute("fill", "none");

        /* PRINCIPAL -> CARACTERISTICAS -> CATACTERISTICAS__ARCHIVOSCENTRALIZADOS -> SVG -> PATH */
        const pathsDataSVG = [
            {
                d: "M6.47144 17.2753C6.66956 17.3844 6.84411 17.5332 6.98468 17.7127C7.12525 17.8922 7.22895 18.0988 7.2896 18.3201C7.35025 18.5415 7.3666 18.773 7.33767 19.0009C7.30874 19.2289 7.23513 19.4485 7.12123 19.6468C6.89059 20.0525 6.51199 20.3485 6.0682 20.4701C5.62441 20.5917 5.15151 20.529 4.75289 20.2956C4.55419 20.1871 4.37905 20.0387 4.23803 19.8592C4.097 19.6798 3.993 19.4731 3.93229 19.2515C3.87158 19.0299 3.85542 18.7981 3.88477 18.57C3.91412 18.3419 3.98839 18.1222 4.10309 17.9242C4.33373 17.5184 4.71233 17.2224 5.15613 17.1008C5.59992 16.9792 6.07281 17.042 6.47144 17.2753Z",
                fill: "#2563EB",
                "fill-opacity": "0.8",
            },
            {
                d: "M30.3515 5.45C30.344 5.91797 30.1561 6.36405 29.8285 6.69144C29.5009 7.01884 29.0601 7.20113 28.6016 7.19877C28.143 7.20265 27.7016 7.02076 27.3742 6.69297C27.0467 6.36517 26.8599 5.9182 26.8546 5.45C26.8546 4.48105 27.6383 3.69832 28.6016 3.69832C29.5706 3.69832 30.3515 4.48396 30.3515 5.45Z",
                fill: "#2563EB",
                "fill-opacity": "0.8",
            },
            {
                d: "M5.65634 43.5331C6.28334 43.536 6.85903 43.8677 7.17823 44.406C7.32208 44.6759 7.39936 44.9775 7.40338 45.2847C7.39812 45.7529 7.21128 46.1999 6.8838 46.5277C6.55633 46.8555 6.11493 47.0374 5.65634 47.0335C5.19725 47.0382 4.75512 46.8566 4.42703 46.5287C4.09894 46.2009 3.9117 45.7534 3.90644 45.2847C3.90644 44.3158 4.69019 43.5331 5.65634 43.5331Z",
                fill: "#2563EB",
                "fill-opacity": "0.8",
            },
            {
                d: "M26.8546 58.4631C26.8574 58.441 26.8674 58.4205 26.8831 58.4049C26.96 57.9475 27.2098 57.5393 27.5787 57.2683C27.9476 56.9972 28.4061 56.885 28.8553 56.9558C29.3046 57.0173 29.7116 57.2585 29.9868 57.6262C30.262 57.994 30.383 58.4582 30.323 58.917C30.2385 59.341 30.0125 59.722 29.6834 59.9948C29.3544 60.2676 28.9428 60.4153 28.519 60.4126C28.2823 60.4023 28.0501 60.3428 27.8365 60.238C27.623 60.1331 27.4326 59.985 27.2769 59.8026C27.1213 59.6202 27.0035 59.4074 26.9309 59.1772C26.8583 58.9469 26.8323 58.7039 26.8546 58.4631Z",
                fill: "#2563EB",
                "fill-opacity": "0.8",
            },
            {
                d: "M52.3677 43.8706C52.5655 43.9797 52.7397 44.1284 52.88 44.3077C53.0203 44.4869 53.1238 44.6932 53.1845 44.9142C53.2451 45.1352 53.2616 45.3664 53.2329 45.594C53.2042 45.8216 53.131 46.041 53.0175 46.2391C52.8558 46.5041 52.6314 46.7232 52.3649 46.8762C52.0984 47.0293 51.7985 47.1114 51.4928 47.115C51.1852 47.1203 50.8817 47.043 50.6126 46.8908C50.3435 46.7386 50.1182 46.5169 49.9595 46.2479C49.8033 45.9809 49.7209 45.6757 49.7209 45.3648C49.7209 45.0538 49.8033 44.7486 49.9595 44.4816C50.1182 44.2126 50.3435 43.9909 50.6126 43.8387C50.8817 43.6866 51.1852 43.6092 51.4928 43.6145C51.8003 43.6246 52.1007 43.7144 52.3677 43.8706Z",
                fill: "#2563EB",
                "fill-opacity":"0.8"
            },
            {
                d: "M51.6638 20.639C51.206 20.6383 50.7668 20.4546 50.4402 20.1271C50.1136 19.7996 49.9257 19.3546 49.9167 18.8873C49.9167 17.9213 50.7005 17.1356 51.6638 17.1356C52.6328 17.1356 53.4137 17.9213 53.4137 18.8873C53.4084 19.356 53.2212 19.8034 52.8931 20.1313C52.565 20.4592 52.1229 20.6407 51.6638 20.6361V20.639Z",
                fill: "#2563EB",
                "fill-opacity": "0.8"
            },
            {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M54.0863 40.6524C55.2822 41.3849 56.1514 42.5643 56.5095 43.9404C56.8676 45.3165 56.6864 46.7809 56.0043 48.0228C54.5394 50.6474 51.2106 51.5786 48.5915 50.112C48.3544 49.9803 48.1466 49.8261 47.9365 49.6703L47.8847 49.6319L33.8456 57.7327C33.8798 57.9946 33.8998 58.2594 33.9026 58.5242C33.9026 58.8355 33.9026 59.1178 33.8456 59.4262C33.3668 62.3942 30.5767 64.4252 27.6155 63.9451C24.6572 63.465 22.628 60.6687 23.1068 57.7066L8.97943 49.5476C8.76068 49.7077 8.53533 49.8581 8.30398 49.9986C8.23963 50.0306 8.17551 50.0647 8.11092 50.0991C7.94663 50.1865 7.77925 50.2755 7.59718 50.3361C6.26537 50.881 4.77717 50.8697 3.45342 50.3047C2.12967 49.7397 1.07639 48.6663 0.52065 47.3158C-0.605097 44.5224 0.74865 41.3595 3.53879 40.2305V23.9125C3.28261 23.8282 3.03682 23.714 2.80634 23.572C2.59496 23.4381 2.38776 23.2974 2.18505 23.1501C1.41698 22.5804 0.812889 21.8105 0.435882 20.9209C0.0588748 20.0313 -0.0772087 19.0546 0.0418505 18.0929C0.168002 17.129 0.543428 16.2168 1.1295 15.4502C1.71557 14.6836 2.49112 14.0902 3.37634 13.7312C4.26774 13.3643 5.23732 13.2406 6.18975 13.3722C7.14218 13.5038 8.04466 13.8863 8.80843 14.4819L23.0755 6.20945L23.0675 6.13926C23.0419 5.91418 23.0185 5.70834 23.0185 5.47619C23.0185 2.48494 25.5265 0 28.5161 0C31.5029 0 33.9539 2.42675 33.9568 5.44709C33.9568 5.67728 33.9337 5.88161 33.9084 6.10657L33.8998 6.18326L48.278 14.511C48.9028 14.0435 49.6171 13.7156 50.3743 13.5486C51.1315 13.3817 51.9147 13.3793 52.6729 13.5418C53.431 13.7043 54.1471 14.028 54.7746 14.4918C55.4022 14.9555 55.927 15.549 56.315 16.2336C57.777 18.8582 56.8194 22.1899 54.1974 23.6593C54.1074 23.6986 54.0174 23.7418 53.9274 23.7851C53.7638 23.8638 53.6001 23.9424 53.4365 23.9969V40.344C53.6616 40.4312 53.8811 40.5331 54.0863 40.6524ZM55.6158 45.9511C55.5375 46.4939 55.3537 47.0153 55.0752 47.4845C54.5029 48.4408 53.5884 49.1349 52.5255 49.4146C51.4625 49.6943 50.3347 49.5406 49.3809 48.986C48.6173 48.5467 48.0145 47.8657 47.6633 47.0457C47.3122 46.2258 47.2318 45.3115 47.4344 44.4409L40.8395 40.5709C38.7562 42.6863 35.6098 43.341 32.8595 42.2353C31.8734 42.5466 29.7587 42.7445 29.7587 42.7445V54.372C30.3028 54.5343 30.8098 54.8057 31.2501 55.1703C31.6904 55.5349 32.0551 55.9853 32.3231 56.4954C32.591 57.0054 32.7568 57.5648 32.8107 58.1409C32.8647 58.7171 32.8057 59.2984 32.6372 59.851C31.9333 62.1643 29.4766 63.4359 27.1681 62.7317C27.1538 62.7317 27.1396 62.7244 27.1253 62.7172C27.1111 62.7099 27.0968 62.7026 27.0826 62.7026C26.8859 62.6444 26.7178 62.563 26.5468 62.4757C26.037 62.2256 25.5813 61.874 25.2064 61.4416C24.8315 61.0092 24.545 60.5048 24.3636 59.9578C24.1823 59.4108 24.1098 58.8323 24.1505 58.2564C24.1911 57.6804 24.344 57.1185 24.6002 56.6037C24.8713 56.0743 25.2423 55.6047 25.6918 55.2222C26.1413 54.8397 26.6604 54.5517 27.2194 54.3749V42.5146C26.3929 42.2615 25.5835 41.9501 24.7969 41.5835C22.2461 42.0956 19.6042 41.4438 17.5807 39.8056L9.71473 44.3507C9.8394 44.8904 9.85791 45.45 9.76917 45.9971C9.68044 46.5442 9.48623 47.0678 9.1978 47.5377C8.90937 48.0075 8.53246 48.4143 8.08892 48.7343C7.64538 49.0544 7.14403 49.2813 6.61393 49.4021C4.36529 49.9404 2.1081 48.5524 1.56945 46.3003C1.44435 45.7603 1.42552 45.2004 1.51405 44.653C1.60258 44.1056 1.79671 43.5816 2.08517 43.1114C2.37364 42.6412 2.75069 42.2342 3.19445 41.914C3.63821 41.5938 4.13984 41.3667 4.67024 41.246C5.34191 41.0845 6.04199 41.0926 6.70991 41.2696C7.37782 41.4465 7.99344 41.787 8.50348 42.2615L15.8622 37.9987C14.6595 36.3054 14.0943 34.2264 14.2702 32.1425C14.446 30.0585 15.3511 28.1089 16.8198 26.6506L8.44648 21.8524C7.63958 22.6131 6.57176 23.0188 5.47408 22.9818C4.37641 22.9447 3.33715 22.4679 2.5812 21.6545C2.20778 21.2574 1.91614 20.7879 1.72355 20.2737C1.53095 19.7595 1.4413 19.2111 1.4599 18.661C1.4785 18.1108 1.60497 17.57 1.83184 17.0706C2.0587 16.5712 2.38135 16.1234 2.78069 15.7535C3.58711 14.993 4.65447 14.5873 5.75168 14.6243C6.84889 14.6614 7.88767 15.1381 8.64313 15.9514C9.11035 16.4438 9.44829 17.0486 9.62565 17.7098C9.80301 18.3711 9.81404 19.0673 9.65773 19.7341L18.9345 25.0706C20.153 24.414 21.5042 24.0554 22.8817 24.0231C24.1784 22.9523 27.5015 21.8524 27.5015 21.8524V9.14831C27.0166 9.00712 26.564 8.76877 26.1702 8.44715C25.7764 8.12553 25.4493 7.72709 25.2079 7.27505C24.9665 6.82302 24.8157 6.32644 24.7642 5.81426C24.7127 5.30209 24.7616 4.78458 24.908 4.29191C25.5293 2.22888 27.701 1.09989 29.7587 1.71967C30.244 1.86084 30.6969 2.0993 31.0909 2.42111C31.4849 2.74293 31.8122 3.14166 32.0536 3.59402C32.2951 4.04639 32.4458 4.54333 32.4971 5.05583C32.5484 5.56834 32.4991 6.08613 32.3522 6.57899C32.1649 7.19742 31.8298 7.75851 31.377 8.21163C30.9242 8.66476 30.3681 8.99567 29.7587 9.1745V21.6254C29.7587 21.6254 35.8492 23.1501 37.7644 25.4372L47.631 19.8184C47.5098 19.2783 47.4949 18.719 47.5871 18.1729C47.6793 17.6268 47.8768 17.1049 48.1682 16.6374C48.4596 16.1699 48.839 15.7661 49.2845 15.4495C49.73 15.133 50.2326 14.9099 50.7632 14.7933C53.0147 14.287 55.2719 15.6691 55.7792 17.9271C55.9009 18.4672 55.9162 19.0267 55.8244 19.5729C55.7326 20.1192 55.5354 20.6414 55.2442 21.1092C54.9531 21.5769 54.5738 21.981 54.1285 22.2979C53.6831 22.6148 53.1805 22.8382 52.6499 22.9552C51.2876 23.2607 49.8597 22.8679 48.8451 21.9077L39.0896 27.442C39.3784 28.0212 39.615 28.626 39.7964 29.249C41.2532 30.2246 42.3097 31.711 42.7665 33.4275C43.2233 35.1441 43.0488 36.9719 42.2759 38.5661L48.734 42.3197C49.39 41.7116 50.2181 41.3318 51.0991 41.235C51.98 41.1383 52.8683 41.3296 53.636 41.7814C54.1019 42.0548 54.5096 42.4206 54.8351 42.8572C55.1605 43.2937 55.3973 43.7923 55.5314 44.3237C55.6655 44.855 55.6942 45.4083 55.6158 45.9511Z",
                fill: "#93C5FD"
            },
            {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M25.6504 39.6604H30.9588C31.2334 39.6604 31.4564 39.4327 31.4564 39.1523C31.4564 38.8718 31.2334 38.6442 30.9588 38.6442H25.6504C25.3757 38.6442 25.1527 38.8718 25.1527 39.1523C25.1527 39.4327 25.3757 39.6604 25.6504 39.6604ZM21.6691 34.2406H33.6129C33.8876 34.2406 34.1106 34.013 34.1106 33.7325C34.1106 33.4521 33.8876 33.2244 33.6129 33.2244H21.6691C21.3944 33.2244 21.1714 33.4521 21.1714 33.7325C21.1714 34.013 21.3944 34.2406 21.6691 34.2406Z",
                fill: "#2563EB",
                "fill-opacity": "0.8"
            },
            {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M35.4377 28.9902C35.4377 27.213 34.0266 25.7723 32.2858 25.7723C29.973 25.7723 26.6362 25.7723 24.3233 25.7723C22.5826 25.7723 21.1714 27.213 21.1714 28.9902C21.1714 30.6455 21.1714 32.7547 21.1714 34.41C21.1714 36.1872 22.5826 37.6279 24.3233 37.6279C26.6362 37.6279 29.973 37.6279 32.2858 37.6279C34.0266 37.6279 35.4377 36.1872 35.4377 34.41V28.9902ZM34.4424 28.9902V34.41C34.4424 35.626 33.4769 36.6117 32.2858 36.6117C29.973 36.6117 26.6362 36.6117 24.3233 36.6117C23.1323 36.6117 22.1668 35.626 22.1667 34.41V28.9902C22.1668 27.7742 23.1323 26.7885 24.3233 26.7885C26.6362 26.7885 29.973 26.7885 32.2858 26.7885C33.4769 26.7885 34.4424 27.7742 34.4424 28.9902ZM28.3046 34.8588C28.5953 34.8588 28.8313 35.0997 28.8313 35.3965C28.8313 35.6933 28.5953 35.9343 28.3046 35.9343C28.0139 35.9343 27.7779 35.6933 27.7779 35.3965C27.7779 35.0997 28.0139 34.8588 28.3046 34.8588Z",
                fill: "#2563EB"
            }
        ];

        pathsDataSVG.forEach((pathData) => {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            Object.entries(pathData).forEach(([key, value]) => path.setAttribute(key, value));
            svg.appendChild(path);
        });
        divArchivosCentralizados.appendChild(svg);
        divCaracteristicas.appendChild(divArchivosCentralizados);


        return divCaracteristicas;
    }
}

customElements.define('informativo-component', InformativoComponent);