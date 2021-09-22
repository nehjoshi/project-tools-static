const sub = document.querySelector(".sub-heading");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".button");
const homeSection = document.querySelector('.inner1');
const contSection = document.querySelector('.inner2');
const buttonHome = document.getElementById('home_button');
const buttonCont = document.getElementById('cont_button');
const tl = gsap.timeline();
const toggler = true;

buttonHome.style.backgroundColor = '#fff';
buttonHome.style.color = 'black';

const toggleSection = (section) => {
    if (section === 'home') {
        homeSection.style.display = 'flex';
        contSection.style.display='none';
        buttonHome.style.backgroundColor = '#fff';
        buttonHome.style.color = 'black';
        buttonCont.style.backgroundColor = 'transparent';
        buttonCont.style.color = '#fff';
    }
    else {
        homeSection.style.display = 'none';
        contSection.style.display = 'flex'
        buttonHome.style.backgroundColor = 'transparent';
        buttonHome.style.color = '#fff';
        buttonCont.style.backgroundColor = '#fff';
        buttonCont.style.color = 'black';
    }
}

tl.to(sub, {
    y: -20,
    opacity: 1,
    duration: 0.3,
    ease: Power2.easeIn
})
    .to(heading, {
        y: -20,
        opacity: 1,
        duration: 0.3,
        ease: Power2.easeIn,
    })
    .to(btn, {
        y: -20,
        opacity: 1,
        duration: 0.3,
        ease: Power2.easeIn,
    })
