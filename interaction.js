// capturar todos los botones de la calculadora en variables//

const numberOne = document.querySelector(".item1")
console.log(numberOne);
const numberTwo = document.querySelector(".item2")
const numberThree = document.querySelector(".item3")
const numberFour = document.querySelector(".item4")
const numberFive = document.querySelector(".item5")
const numberSix = document.querySelector(".item6")
const numberSeven = document.querySelector(".item7")
const numberEight = document.querySelector(".item8")
const numberNine = document.querySelector(".item9")
const botonTrash = document.querySelector(".item10")
const botonDelete = document.querySelector(".item11")
const botonDot = document.querySelector(".item12")
const botonPlus = document.querySelector(".item-a")
console.log(botonPlus);

const botonMinus = document.querySelector(".item-b")
const botonPor = document.querySelector(".item-c")
const botonDivide = document.querySelector(".item-d")
const botonEquals = document.querySelector(".item-e")
console.log(botonEquals);

// capturar elemento donde se imprimirán los resultados

const windows = document.querySelector(".calculator__up p")
console.log(windows);

//crear array con botones

const buttons=[];

buttons.push({
    name:"number-1",
    value:1,
})

buttons.push({
    name:"number-2",
    value:2,
})

buttons.push({
    name:"number-3",
    value:3,
})

buttons.push({
    name:"number-4",
    value:4,
})
buttons.push({
    name:"number-5",
    value:5,
})

buttons.push({
    name:"number-6",
    value:6,
})

buttons.push({
    name:"number-7",
    value:7,
})

buttons.push({
    name:"number-8",
    value:8,
})

buttons.push({
    name:"number-9",
    value:9,
})

buttons.push({
    name:"number-0",
    value:0,
})

buttons.push({
    name:"symbol-dot",
    value:0,
})

const numbers = ["numberOne", "numberTwo"];
const numbers_2 = [1,2,3,4,5,6,7,8,9,0];

console.log(buttons);

numberOne.addEventListener("click",escribirNum1);

function escribirNum1(){
    numberOne.classList.add("written");
    let number=parseInt(numberOne.innerHTML)
    return windows.innerHTML=number;
};


numberTwo.addEventListener("click",escribirNum2);

function escribirNum2(){
    numberTwo.classList.add("written");
    console.log(numberTwo);
    let number=parseInt(numberTwo.innerHTML)
    return windows.innerHTML=number;
};


// Escuchar al botón SUMA

botonPlus.addEventListener("click", toggleSuma)

function toggleSuma(){
    botonPlus.classList.add("suma");
    console.log(botonPlus);
};

// Escuchar al botón RESTA
botonMinus.addEventListener("click", toggleResta )

function toggleResta(){
    botonMinus.classList.add("resta");
    console.log(botonMinus);
};

// Escuchar al botón IGUAL y realizar la operación

botonEquals.addEventListener("click",operacionCalcu)

function operacionCalcu(){
    let opeAdition=0;

    if(botonPlus.classList.contains("suma")){
        while(numberOne.classList.contains("written")){
            console.log(numberOne.classList)
            opeAdition=opeAdition+parseInt(numberOne.innerHTML)
            numberOne.classList.remove("written");
        };
        while(numberTwo.classList.contains("written")){
            opeAdition=opeAdition+parseInt(numberOne.innerHTML)
            numberTwo.classList.remove("written");
        };

        
        return windows.innerHTML=opeAdition;
    };
    
}
