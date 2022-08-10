import '../scss/main.scss';
import '../css/input.css';

const btn =document.getElementById('menu-btn');
const menu =document.getElementById('menu');

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

