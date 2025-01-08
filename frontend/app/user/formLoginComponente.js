class LoginRegisterComponent extends HTMLElement {
    constructor() {
        super();
        const container = this.createContainer();
        this.appendChild(container);
        this.initializeEvents(container);
    }

    
    createContainer() {
        const container = document.createElement("div");
        
        const svgBlob = this.createSvgBlob();
        container.appendChild(svgBlob);

        const loginAccessRegister = this.createLoginAccessRegister();
        container.appendChild(loginAccessRegister);

        return container;
    }

    createSvgBlob() {
        // Crear el SVG del Blob
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add("login__blob");
        svg.setAttribute("viewBox", "0 0 566 840");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
        mask.setAttribute("id", "mask0");
        mask.setAttribute("mask-type", "alpha");

        const maskPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        maskPath.setAttribute(
            "d",
            "M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
        );
        mask.appendChild(maskPath);
        svg.appendChild(mask);

        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("mask", "url(#mask0)");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
            "d",
            "M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
        );
        g.appendChild(path);

        const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
        image.classList.add("login__img");
        image.setAttribute("href", "/static/assets/img/jpg/fondo_login.jpg");
        g.appendChild(image);

        svg.appendChild(g);

        return svg;
    }

    createLoginAccessRegister() {
        const container = document.createElement("div");
        container.classList.add("login", "container", "grid");
        container.setAttribute("id", "loginAccessRegister");

        // Crear acceso a Login
        const loginAccess = this.createLoginAccess();
        container.appendChild(loginAccess);

        // Crear sección de Registro
        const loginRegister = this.createLoginRegister();
        container.appendChild(loginRegister);

        return container;
    }

    createLoginAccess() {
        const loginAccess = document.createElement("div");
        loginAccess.classList.add("login__access");

        const title = document.createElement("h1");
        title.classList.add("login__title");
        title.appendChild(document.createTextNode("Inicia sesión en tu cuenta."));
        loginAccess.appendChild(title);

        const loginArea = document.createElement("div");
        loginArea.classList.add("login__area");

        // Formulario de Login
        const form = document.createElement("form");
        form.classList.add("login__form");
        form.setAttribute("id", "loginForm");

        const content = document.createElement("div");
        content.classList.add("login__content", "grid");

        // Crear campos de email y contraseña
        const emailBox = this.createInputBox(
            "email",
            "Correo Electrónico",
            "email",
            "ri-mail-fill"
        );
        const passwordBox = this.createInputBox(
            "password",
            "Contraseña",
            "password",
            "ri-eye-off-fill",
            "loginPassword"
        );

        content.appendChild(emailBox);
        content.appendChild(passwordBox);

        form.appendChild(content);

        // Agregar enlace de "¿Olvidaste tu contraseña?"
        const forgotPassword = document.createElement("a");
        forgotPassword.classList.add("login__forgot");
        forgotPassword.setAttribute("href", "#");
        forgotPassword.appendChild(document.createTextNode("¿Olvidaste tu contraseña?"));
        form.appendChild(forgotPassword);

        // Botón de Iniciar Sesión
        const submitButton = document.createElement("button");
        submitButton.classList.add("login__button");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("id", "btnLoginSubmit");
        submitButton.appendChild(document.createTextNode("Iniciar Sesión"));
        form.appendChild(submitButton);

        loginArea.appendChild(form);

        // Agregar botones sociales
        const loginSocial = this.createSocialLinks();
        loginArea.appendChild(loginSocial);

        // Enlace para cambiar a registro
        const switchToRegister = document.createElement("p");
        switchToRegister.classList.add("login__switch");
        const switchText = document.createTextNode("¿No tienes cuenta? ");
        const switchButton = document.createElement("button");
        switchButton.setAttribute("id", "loginButtonRegister");
        switchButton.appendChild(document.createTextNode("Crea una cuenta"));
        switchToRegister.appendChild(switchText);
        switchToRegister.appendChild(switchButton);

        loginArea.appendChild(switchToRegister);

        loginAccess.appendChild(loginArea);

        return loginAccess;
    }

    createLoginRegister() {
        const register = document.createElement("div");
        register.classList.add("login__register");

        const title = document.createElement("h1");
        title.classList.add("login__title");
        title.appendChild(document.createTextNode("Crear nueva cuenta"));
        register.appendChild(title);

        const area = document.createElement("div");
        area.classList.add("login__area");

        const form = document.createElement("form");
        form.classList.add("login__form");
        form.setAttribute("id", "signupForm");

        const content = document.createElement("div");
        content.classList.add("login__content", "grid");

        // Grupo de nombres y apellidos
        const group = document.createElement("div");
        group.classList.add("login__group", "grid");
        const namesBox = this.createInputBox(
            "names",
            "Nombres",
            "text",
            "ri-id-card-fill"
        );
        const surnamesBox = this.createInputBox(
            "surnames",
            "Apellidos",
            "text",
            "ri-id-card-fill"
        );
        group.appendChild(namesBox);
        group.appendChild(surnamesBox);
        content.appendChild(group);

        // Email y contraseña
        const emailBox = this.createInputBox(
            "emailCreate",
            "Correo Electrónico",
            "email",
            "ri-mail-fill"
        );
        const passwordBox = this.createInputBox(
            "passwordCreate",
            "Contraseña",
            "password",
            "ri-eye-off-fill",
            "loginPasswordCreate"
        );
        content.appendChild(emailBox);
        content.appendChild(passwordBox);

        form.appendChild(content);

        // Botón de registro
        const submitButton = document.createElement("button");
        submitButton.classList.add("login__button");
        submitButton.setAttribute("type", "submit");
        submitButton.setAttribute("id", "btnSignSubmit");
        submitButton.appendChild(document.createTextNode("Crear nueva cuenta"));
        form.appendChild(submitButton);

        area.appendChild(form);

        // Enlace para cambiar a login
        const switchToLogin = document.createElement("p");
        switchToLogin.classList.add("login__switch");
        const switchText = document.createTextNode("¿Ya tienes una cuenta? ");
        const switchButton = document.createElement("button");
        switchButton.setAttribute("id", "loginButtonAccess");
        switchButton.appendChild(document.createTextNode("Inicia sesión"));
        switchToLogin.appendChild(switchText);
        switchToLogin.appendChild(switchButton);

        area.appendChild(switchToLogin);

        register.appendChild(area);

        return register;
    }

    createInputBox(id, label, type, iconClass, iconId = null) {
        const box = document.createElement("div");
        box.classList.add("login__box");

        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("id", id);
        input.setAttribute("required", "");
        input.setAttribute("placeholder", " ");
        input.classList.add("login__input");

        const inputLabel = document.createElement("label");
        inputLabel.setAttribute("for", id);
        inputLabel.classList.add("login__label");
        inputLabel.appendChild(document.createTextNode(label));

        const icon = document.createElement("i");
        icon.classList.add(iconClass, "login__icon");
        if (iconId) icon.setAttribute("id", iconId);

        box.appendChild(input);
        box.appendChild(inputLabel);
        box.appendChild(icon);

        return box;
    }

    createSocialLinks() {
        const social = document.createElement("div");
        social.classList.add("login__social");

        const title = document.createElement("p");
        title.classList.add("login__social-title");
        title.appendChild(document.createTextNode("O inicia con"));
        social.appendChild(title);

        const links = document.createElement("div");
        links.classList.add("login__social-links");

        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.classList.add("login__social-link");

        const img = document.createElement("img");
        img.setAttribute("src", "/static/assets/img/svg/icono_google.svg");
        img.setAttribute("alt", "image");
        img.classList.add("login__social-img");

        link.appendChild(img);
        links.appendChild(link);

        social.appendChild(links);

        return social;
    }

    initializeEvents(container) {
        // Eventos del componente
        const loginAccessRegister = container.querySelector("#loginAccessRegister");
        const buttonRegister = container.querySelector("#loginButtonRegister");
        const buttonAccess = container.querySelector("#loginButtonAccess");
        const loginForm = container.querySelector("#loginForm");
        const signupForm = container.querySelector("#signupForm");
        const inputEmail = container.querySelector("#email");
        const inputPassword = container.querySelector("#password");
        const inputNames = container.querySelector("#names");
        const inputSurnames = container.querySelector("#surnames");
        const inputEmailCreate = container.querySelector("#emailCreate");
        const inputPasswordCreate = container.querySelector("#passwordCreate");

        // Click en "Crea una cuenta"
        buttonRegister.addEventListener("click", () => {
            loginAccessRegister.classList.add("active");
        });

        // Click en "Inicia sesión"
        buttonAccess.addEventListener("click", () => {
            loginAccessRegister.classList.remove("active");
        });

        // Evento submit del login
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const infoLogin = {
                valor1: inputEmail.value,
                valor2: inputPassword.value,
            };

            console.log(infoLogin);
        });

        // Evento submit del registro
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const infoSign = {
                valor1: inputNames.value,
                valor2: inputSurnames.value,
                valor3: inputEmailCreate.value,
                valor4: inputPasswordCreate.value,
            };

            console.log(infoSign);
        });

        // Función para alternar visibilidad de contraseña (Login)
        this.togglePassword("password", "loginPassword");

        // Función para alternar visibilidad de contraseña (Registro)
        this.togglePassword("passwordCreate", "loginPasswordCreate");
    }

    togglePassword(inputId, iconId) {
        const input = document.getElementById("loginPass");
        const iconEye = document.getElementById("loginEye");

        iconEye.addEventListener("click", () => {
            input.type = input.type === "password" ? "text" : "password";
            iconEye.classList.toggle("ri-eye-fill");
            iconEye.classList.toggle("ri-eye-off-fill");
        });
    }
}

// Registrar el componente
customElements.define("login-register", LoginRegisterComponent);