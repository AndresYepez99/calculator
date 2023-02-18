

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
        element.classList.add('hover-button');
    });

    element.addEventListener(('transitionend'), (e) => {
        element.classList.remove('hover-button')
    });

});


//--------------screen
const resultScreen = document.querySelector('.result');
const equal = document.querySelector('#igual');

const bntNumbers = document.querySelectorAll('.btn-numbers');
const arrBtnNumbers = [...bntNumbers];

const btnOperators = document.querySelectorAll('.btn-operator');
const arrBtnOperators = [...btnOperators];

let previousValue = '';
let currrentValue = '';
let operator = ''; 


function updateScreen(element) {
    if (resultScreen.textContent === '0') {
        resultScreen.textContent = '';
        resultScreen.textContent += element.textContent;
    } else {
        resultScreen.textContent += element.textContent;
    }
}

arrButtons.forEach(element => {
    element.addEventListener(('click'), () => {
        updateScreen(element);
        
    })
});

arrBtnNumbers.forEach(element => {
    element.addEventListener(('click'), () => {
        currrentValue += element.textContent;
    })
});

arrBtnOperators.forEach(element => {
    element.addEventListener(('click'), () => {
        previousValue = currrentValue;
        operator = element.textContent 
        currrentValue = '';
        console.log(previousValue)
        console.log(currrentValue)
        console.log(operator)
    })
});

//limpiar pantalla
const btnClear = document.querySelector('.btn-delete');
btnClear.addEventListener(('click'), () => {
    resultScreen.textContent = '0';
    previousValue = '';
    currrentValue = '';
})

function add(a, b) {
    console.log('la suma es: ', a+b)
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        resultScreen.textContent = (a + b);
        currrentValue = a + b;
    } else if (operator === '-') {
        resultScreen.textContent = (a - b);
        currrentValue = a + b;
    } else if (operator === '*') {
        resultScreen.textContent = (a * b);
        currrentValue = a + b;
    } else if (operator === '/') {
        resultScreen.textContent = (a / b);
        currrentValue = a + b;
    }
}

const screenHistory = document.querySelector('.operator');

let arrHistory = [];
let resultEnd;

function resultHistory(element) {
    arrHistory.push(element + resultEnd);
    screenHistory.innerHTML = arrHistory
    arrHistory.forEach(e => {
        console.log(e);
    });
}

equal.addEventListener(('click'), () => {  
    let value1 = Number(previousValue);
    let value2 = Number(currrentValue);
    let result = `${previousValue} + ${currrentValue} = `;
    operate(operator, value1, value2);
    resultEnd = resultScreen.textContent + '<br>';
    resultHistory(result);
    
})


/*  guardo primer valor
    guardo segundo valor
    guado operador
    llamar funcion para realizar operacion*/










//-----------funciones operaciones
