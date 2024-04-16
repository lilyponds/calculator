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

const enter = document.querySelector("#enter").addEventListener("click",operate)
const string = document.querySelector("#input");
let result;
function operate(){
let input = string.value.split(" ");
if(input[1]=="+"){
    result = sum(+input[0],+input[2]);
} else if(input[1]=="-"){
    result = substract(+input[0],+input[2]);
} else if(input[1]=="*"){
    result = multiply(+input[0],+input[2]);
} else if(input[1]=="/"){
    result = divide(+input[0],+input[2]);
}
console.log(result);
}