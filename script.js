function sum(a,b){
    let sum = a+b;
    return sum;
}

function substract(a,b){
    let substract = a-b;
    return substract;
}

function multiply(a,b){
    let multiply = a*b;
    return multiply;
}

function divide(a,b){
    let divide = b==0 ? "Error":a/b;
    return divide;
}
let input = "";

const display = document.querySelector(".display");

const one = document.querySelector("#one").addEventListener("click",function (){
    input += "1";
    display.textContent = input;
});
const two = document.querySelector("#two").addEventListener("click",function (){
    input += "2";
    display.textContent = input;
});
const three = document.querySelector("#three").addEventListener("click",function (){
    input += "3";
    display.textContent = input;
});
const four = document.querySelector("#four").addEventListener("click",function (){
    input += "4";
    display.textContent = input;
});
const five = document.querySelector("#five").addEventListener("click",function (){
    input += "5";
    display.textContent = input;
});
const six = document.querySelector("#six").addEventListener("click",function (){
    input += "6";
    display.textContent = input;
});
const seven = document.querySelector("#seven").addEventListener("click",function (){
    input += "7";
    display.textContent = input;
});
const eight = document.querySelector("#eight").addEventListener("click",function (){
    input += "8";
    display.textContent = input;
});
const nine = document.querySelector("#nine").addEventListener("click",function (){
    input += "9";
    display.textContent = input;
});
const zero = document.querySelector("#zero").addEventListener("click",function (){
    input += "0";
    display.textContent = input;
});

const operateOne = document.querySelector("#sum").addEventListener("click",function (){
    input += " + ";
    display.textContent = input;
});
const operateTwo = document.querySelector("#substract").addEventListener("click",function (){
    input += " - ";
    display.textContent = input;
});
const operateThree = document.querySelector("#multiply").addEventListener("click",function (){
    input += " * ";
    display.textContent = input;
});
const operateFour = document.querySelector("#divide").addEventListener("click",function (){
    input += " / ";
    display.textContent = input;
});


const enter = document.querySelector("#enter").addEventListener("click",operate);
const clear = document.querySelector("#clear").addEventListener("click",function (){
    input = "";
    display.textContent = input;
});



function operate(){
    let result = 0;
let calculate = input.split(" ");
if(calculate.length==3){
if(calculate[1]=="+"){
    result = sum(+calculate[0],+calculate[2]);
} else if(calculate[1]=="-"){
    result = substract(+calculate[0],+calculate[2]);
} else if(calculate[1]=="*"){
    result = multiply(+calculate[0],+calculate[2]);
} else if(calculate[1]=="/"){
    result = divide(+calculate[0],+calculate[2]);
}
input = result;
display.textContent = input;}
    else {
    if(calculate[1]=="+"){
        result = sum(+calculate[0],+calculate[2]);
    } else if(calculate[1]=="-"){
        result = substract(+calculate[0],+calculate[2]);
    } else if(calculate[1]=="*"){
        result = multiply(+calculate[0],+calculate[2]);
    } else if(calculate[1]=="/"){
        result = divide(+calculate[0],+calculate[2]);
    }
    calculate.splice(0,3,result);
    input = calculate.join('');
    console.log(input);
    operate();
}
}