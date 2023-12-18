const nav = document.querySelector('nav')
window.onscroll = () => {
    if (window.scrollY > 100) {
        nav.classList.add('active-nav');
    } else {
        nav.classList.remove('active-nav');
    }
};
let nav_ul = document.getElementById('nav')
let menu_img = document.getElementById('menu-img')
var menu = document.getElementById('menu')
menu.addEventListener('click', function(){
    nav_ul.classList.toggle('active_nav');
})
var menu_li = document.querySelectorAll('nav ul a').forEach(e=>{
    e.addEventListener('click', function(){
        nav_ul.classList.remove('active_nav');
    })
})




