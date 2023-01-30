const body = document.querySelector('body');
//alternar tema de claro/oscuro 
const toolbar = document.querySelector('.toolbar');
const btnLight = document.querySelector("#light");
const btnDark = document.querySelector("#dark");
btnDark.remove();

btnLight.addEventListener(('click'), () => {
    body.classList.toggle('light');
    toolbar.replaceChild(btnDark, btnLight);
})

btnDark.addEventListener(('click'), () => {
    body.classList.toggle('light');
    toolbar.replaceChild(btnLight, btnDark);
})

//animacion para botones al hacer click
const buttons = document.querySelectorAll('button');
const arrButtons = [...buttons];
arrButtons.forEach(element => {
    element.addEventListener(('click'), () => {
        element.classList.add('hover-button')
    });

});

arrButtons.forEach(element => {
    element.addEventListener(('transitionend'), (e) => {
        element.classList.remove('hover-button')
    });
});