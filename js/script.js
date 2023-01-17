let navBtn = document.getElementById('nav-toggle');
let navbar = document.getElementById('navbar-nav');
let closeBtn = document.getElementById('closeBtn');
let bg = document.getElementById('background');

navBtn.onclick = function(){
    navbar.classList.add('active');
    bg.classList.add('active');
}
closeBtn.onclick = function(){
    navbar.classList.remove('active');
    bg.classList.remove('active');
}


let fBtn = document.getElementById('fDropdownBtn');
let cBtn = document.getElementById('cDropdownBtn');
let fDMenu = document.getElementById('fDMenu');
let cDMenu = document.getElementById('cDMenu');

fBtn.onclick = function(){
    fDMenu.classList.toggle('active');
    fBtn.classList.toggle('active');
}

cBtn.onclick = function(){
    cDMenu.classList.toggle('active')
    cBtn.classList.toggle('active');
}


if(window.innerWidth > "992px"){
    navbar.classList.remove('active');
    bg.classList.remove('active');
    document.querySelector('body').style.backgroundColor = "red";
}

