//import '/static/app/user/login/iniciosesionComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    // Definiendo las variables / constantes necesarias
    const loginAcessRegister = document.getElementById('loginAccessRegister');
    const buttonRegister = document.getElementById('loginButtonRegister');
    const buttonAccess = document.getElementById('loginButtonAccess');
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const inputNames = document.getElementById("names");
    const inputSurnames = document.getElementById("surnames");
    const inputEmailCreate = document.getElementById("emailCreate");
    const inputPasswordCreate = document.getElementById("passwordCreate");


    // Definiendo los eventos pertinentes
    buttonRegister.addEventListener('click', () => {
        loginAcessRegister.classList.add('active');
    });
    
    buttonAccess.addEventListener('click', () => {
        loginAcessRegister.classList.remove('active');
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const infoLogin = {
            valor1: inputEmail.value,
            valor2: inputPassword.value
        }
    
        console.log(infoLogin);
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const infoSign = {
            valor1: inputNames.value,
            valor2: inputSurnames.value,
            valor3: inputEmailCreate.value,
            valor4: inputPasswordCreate.value
        }

        console.log(infoSign);
    });


    // Definiendo las funciones pertinentes
    const passwordAccess = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
            iconEye = document.getElementById(loginEye);
    
        iconEye.addEventListener('click', () =>{
            input.type === 'password' 
                ? input.type = 'text'
                : input.type = 'password';
            iconEye.classList.toggle('ri-eye-fill');
            iconEye.classList.toggle('ri-eye-off-fill');
        });
    }
    
    const passwordRegister = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
            iconEye = document.getElementById(loginEye);
    
        iconEye.addEventListener('click', () =>{
            input.type === 'password' 
                ? input.type = 'text'
                : input.type = 'password';
            iconEye.classList.toggle('ri-eye-fill');
            iconEye.classList.toggle('ri-eye-off-fill');
        });
    }

    // Llamando a las funciones
    passwordAccess('password','loginPassword');
    passwordRegister('passwordCreate','loginPasswordCreate');
});