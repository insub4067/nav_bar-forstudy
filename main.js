const btn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navbar_menu');
const socials = document.querySelector('.navbar_socials');



btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    socials.classList.toggle('active');
});  

 


