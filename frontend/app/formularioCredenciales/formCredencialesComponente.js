export class FormCredencialesComponente extends HTMLElement {
    constructor() {
        super();
        const container = this.createContainer();
        this.appendChild(container);
    }


    createContainer() {
        
    }
}

customElements.define("formCredenciales-componente", FormCredencialesComponente);