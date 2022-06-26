const submit = document.querySelector('.submit');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const warning = document.querySelector('.warning')

submit.addEventListener('click', e => {
    if(usernameInput.value == "user" && passwordInput.value == "user"){
        location.href = "main.html"
    }else{
        warning.style.display = "inline-block";
    }
})