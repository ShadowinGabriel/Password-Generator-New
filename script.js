let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#<>()?[]=+-_{}$%&*^/!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass);
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

password.onclick = function() {
    navigator.clipboard.writeText(novaSenha).then(function() {
        alert('Senha copiada com sucesso!☑');
    }).catch(function(err) {
        console.error('Erro ao copiar a senha:', err);
    });
};
