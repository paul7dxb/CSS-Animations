var transitionFade
var transitionLtoR
var transitionttoB
var sectionOne
var sectionTwo


window.onload = () => {
    transitionFade = document.querySelector('#fadeTransition');
    transitionLtoR = document.querySelector('#ltoRTransition');
    transitionttoB = document.querySelector('#ttoBTransition');
    sectionOne = document.querySelector('#sectionOne');
    sectionTwo = document.querySelector('#sectionTwo');


    setTimeout(()=>{
        transitionFade.classList.remove('is-active');
    }, 500);
}

//Fade Transition
function fadeTransitionIn(){
    transitionFade.classList.add('is-active');
    setTimeout(() => {
        fadeChangeDisplay();
    }, 500);
}

function fadeChangeDisplay(){
    sectionOne.classList.toggle('hiddenPage')
    sectionTwo.classList.toggle('hiddenPage')
    setTimeout(() => {
        fadeTransitionOut();
    }, 500);
}


function fadeTransitionOut(){
    transitionFade.classList.remove('is-active');
}

//Left to Right Transition
transitionSideTime = 300

function ltoRTransitionIn(){
    transitionLtoR.classList.add('is-active');
    setTimeout(() => {
        ltoRChangeDisplay();
    }, transitionSideTime);
}

function ltoRChangeDisplay(){
    sectionOne.classList.toggle('hiddenPage')
    sectionTwo.classList.toggle('hiddenPage')
    setTimeout(() => {
        ltoRTransitionOut();
    }, transitionSideTime);
}


function ltoRTransitionOut(){
    transitionLtoR.classList.remove('is-active');
}

//Top to Bottom Transition
transitionSideTime = 300

function ttoBTransitionIn(){
    transitionttoB.classList.add('is-active');
    setTimeout(() => {
        ttoBChangeDisplay();
    }, transitionSideTime);
}

function ttoBChangeDisplay(){
    sectionOne.classList.toggle('hiddenPage')
    sectionTwo.classList.toggle('hiddenPage')
    setTimeout(() => {
        ttoBTransitionOut();
    }, transitionSideTime);
}


function ttoBTransitionOut(){
    transitionttoB.classList.remove('is-active');
}