const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

loginLink.addEventListener('click', ()=>{
    // alert("page-change")
    document.getElementById("login").style.display="flex";
    document.getElementById("register").style.display="none";
})

registerLink.addEventListener('click', ()=>{
    document.getElementById("register").style.display="flex";
    document.getElementById("login").style.display="none";
})