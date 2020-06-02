// Your code goes here
//create 10 [unique event listeners]

const body = document.querySelector('body');
const nav = document.querySelector('.main-navigation');
const header = document.querySelector('.intro');
const logo = document.querySelector('.logo-heading');
const busImg = document.querySelector('.intro img');
const content = document.querySelector('.content-section');
const mainImgOne = document.querySelector('.img-content img');
const mainImgTwo = document.querySelector('.img-fluid');
const mainTitles = document.querySelectorAll('.text-content h2');
const destination = document.querySelector('.content-destination');
const signUpBtns = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');

function end(event){
    if(event.key === 'Escape') {
        body.style.backgroundColor = 'black';
        nav.style.backgroundColor = 'black';
    }
}
document.addEventListener('keydown', end);
function nvm(event) {
    body.style.backgroundColor = 'white';
    nav.style.backgroundColor = 'white';
}
document.addEventListener('keyup', nvm);

logo.addEventListener('click', scoooo);

function scoooo() {
    window.scrollTo({
        top: 3000,
        behavior: 'smooth'
    });
}

nav.style.zIndex= '3';

busImg.style.transitionDuration = '1s'
busImg.addEventListener('mouseover', imgOver);
busImg.addEventListener('mouseout', imgNo);

function imgOver() {
    busImg.style.transform = 'rotateY(180deg)';
}
function imgNo() {
    busImg.style.transform = 'rotateY(0deg)';
}

header.style.transitionDuration = '1s';
header.addEventListener('mouseover', whooptie);
header.addEventListener('mouseout', whoo);

function whooptie() {
    header.style.transform = 'rotateZ(360deg)'
}
function whoo() {
    header.style.transform = 'rotateZ(0deg)';
}


content.addEventListener('mouseover', aHH);
content.addEventListener('mouseout', unAhhed);
function aHH() {
    content.style.flexDirection = 'row-reverse';
}
function unAhhed() {
    content.style.flexDirection = 'row';
}

mainImgOne.style.width = '20%';
mainImgOne.style.transitionDuration = '2s';
mainImgOne.addEventListener('load', grow);

function grow() {
    mainImgOne.style.width = '100%';
}
mainImgTwo.style.width = '20%';
mainImgTwo.style.transitionDuration = '2s';
mainImgTwo.addEventListener('load', growTwo);

function growTwo() {
    mainImgTwo.style.width = '100%';
}

mainTitles[0].style.transitionDuration = '.5s';
mainTitles[0].addEventListener('mouseover', redboi);
mainTitles[0].addEventListener('mouseout', nomorered);

function redboi() {
    mainTitles[0].style.color = 'red';
}
function nomorered() {
    mainTitles[0].style.color = 'black';
}
mainTitles[1].style.transitionDuration = '.5s';
mainTitles[1].addEventListener('mouseover', redboitw);
mainTitles[1].addEventListener('mouseout', nomoreredtw);

function redboitw() {
    mainTitles[1].style.color = 'red';
}
function nomoreredtw() {
    mainTitles[1].style.color = 'black';
}

destination.addEventListener('mouseover', flop);
destination.addEventListener('mouseout', unflop);
destination.style.transitionDuration = '1s';
function flop() {
    destination.style.transform = 'rotateZ(360deg)';
    destination.style.opacity = '0';
}
function unflop() {
    destination.style.transform = 'rotateZ(0deg)';
    destination.style.opacity = '100%';
}

let clicks = true;

signUpBtns[0].addEventListener('click', clonk);
signUpBtns[0].style.transitionDuration = '1s';

function clonk() {
    if(clicks === true) {
        signUpBtns[0].style.width = '50%';
        clicks = false;
    }
    else {
        signUpBtns[0].style.width = '200px';
        clicks = true;
    }
}

signUpBtns[1].addEventListener('click', slonk);
signUpBtns[1].style.transitionDuration = '.5s';

function slonk() {
    if(clicks === true) {
        signUpBtns[1].style.backgroundColor = 'yellow';
        signUpBtns[1].style.color = 'black';
        clicks = false;
    }
    else {
        signUpBtns[1].style.backgroundColor = '#17A2B8';
        signUpBtns[1].style.color = 'white';
        clicks = true;
    }
}

signUpBtns[2].addEventListener('click', nahG);
signUpBtns[2].addEventListener('mouseout', sorry);

function nahG() {
    signUpBtns[2].innerHTML = 'HA SIKE OUTTA HERE';
}
function sorry() {
    signUpBtns[2].innerHTML = 'Sign Me Up!';
}


footer.addEventListener('click', scadoo);

function scadoo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}