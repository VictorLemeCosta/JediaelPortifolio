'use strict'

let open = false
var seconds = 1;
const menuSize = '100%';

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

document.querySelector('#botao1').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

document.querySelector('#botao2').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

document.querySelector('#botao3').addEventListener('click', e => {
    open = false;
    toggleMenu();
})

function toggleMenu() {
    if (open) {
        /*Abre o menu vertical*/
        document.querySelector('#menu').style.display = `flex`;
        document.querySelector('#menu').style.transition = "opacity .7s ease-in-out";
        document.querySelector('#btnMenu').style.display = 'none'
        return;
    }
    /*Fecha o menu vertical*/
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#menu').style.transition = "opacity .7s ease-in-out";
    document.querySelector('#btnMenu').style.display = 'flex'
}



window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40)
    {
        document.getElementById("topo").style.height = "40px";
              
        document.getElementById("logo").style.height = "30px";

        document.getElementById("topo").style.transition = ".5s";

        document.getElementById("logo").style.transition = ".5s";

        document.getElementById("navigation").style.top = "40px";

        document.getElementById("navigation").style.transition = ".5s";

        document.getElementById("btnMenuHeight").style.height = "25px";

        document.getElementById("btnMenuHeight").style.transition = ".5s";

        document.getElementById("btnCloseHeight").style.height = "25px";

        document.getElementById("btnCloseHeight").style.transition = ".5s";
    } 
    else {
        document.getElementById("topo").style.height = "80px";
                      
        document.getElementById("logo").style.height = "70px";

        document.getElementById("navigation").style.top = "80px";

        document.getElementById("navigation").style.transition = ".5s"

        document.getElementById("btnMenuHeight").style.height = "50px";

        document.getElementById("btnCloseHeight").style.height = "50px";
    }
}