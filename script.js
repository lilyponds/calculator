function sum(a,b){
    let sum = a+b;
    return sum.toFixed(4);
}

function substract(a,b){
    let substract = a-b;
    return substract.toFixed(4);
}

function multiply(a,b){
    let multiply = a*b;
    return multiply.toFixed(4);
}

function divide(a,b){
    if(b==0){
        return "Error";
    } else {
        return (a/b).toFixed(4);
    }
}

let input = "";

const display = document.querySelector(".display");

function display_input(value) {
    if(input!="Error"){
        input += value;
        display.textContent = input;
       }
}

function display_decimal() {
    if(input!="Error"){
        let tempCheck;
        tempCheck = input.split(" ");
        tempDecimalPoint = tempCheck[tempCheck.length-1].split("");
        let containsDecimal = "False";
        for(i=0;i<tempDecimalPoint.length;i++){
            if(tempDecimalPoint[i]=="."){
                containsDecimal = "True";
            }
        }
        if(containsDecimal=="False"){
            input += ".";
            display.textContent = input;
        }
    }
}

const one = document.querySelector("#one").addEventListener("click",(e)=>display_input("1"));
const two = document.querySelector("#two").addEventListener("click",(e)=>display_input("2"));
const three = document.querySelector("#three").addEventListener("click",(e)=>display_input("3"));
const four = document.querySelector("#four").addEventListener("click",(e)=>display_input("4"));
const five = document.querySelector("#five").addEventListener("click",(e)=>display_input("5"));
const six = document.querySelector("#six").addEventListener("click",(e)=>display_input("6"));
const seven = document.querySelector("#seven").addEventListener("click",(e)=>display_input("7"));
const eight = document.querySelector("#eight").addEventListener("click",(e)=>display_input("8"));
const nine = document.querySelector("#nine").addEventListener("click",(e)=>display_input("9"));
const zero = document.querySelector("#zero").addEventListener("click",(e)=>display_input("0"));

const decimal = document.querySelector("#decimal").addEventListener("click",(e)=>display_decimal());

const operateOne = document.querySelector("#sum").addEventListener("click",(e)=>display_input(" + "));
const operateTwo = document.querySelector("#substract").addEventListener("click",(e)=>display_input(" - "));
const operateThree = document.querySelector("#multiply").addEventListener("click",(e)=>display_input(" * "));
const operateFour = document.querySelector("#divide").addEventListener("click",(e)=>display_input(" / "));

const keyboard = document.addEventListener('keydown',(e)=>{
    if(e.key=="1"){
        display_input("1");
    } else if(e.key=="2"){
        display_input("2");
    } else if(e.key=="3"){
        display_input("3");
    } else if(e.key=="4"){
        display_input("4");
    } else if(e.key=="5"){
        display_input("5");
    } else if(e.key=="6"){
        display_input("6");
    } else if(e.key=="7"){
        display_input("7");
    } else if(e.key=="8"){
        display_input("8");
    } else if(e.key=="9"){
        display_input("9");
    } else if(e.key=="0"){
        display_input("0");
    } else if(e.key=="."){              
        display_decimal();
    } else if(e.key=="+"){
        display_input(" + ");
    } else if(e.key=="-"){
        display_input(" - ");
    } else if(e.key=="/"){
        display_input(" / ");
    } else if(e.key=="*"){ 
        display_input(" * ");
    } else if(e.key=="Backspace"){
        if(input!="Error"){
            let back = input.split("");
            if(back[back.length-1]==" "){
                back.splice(back.length-3,3,);
                input = back.join("");
                display.textContent = input;
            } else {
    back.splice(back.length-1,1,);
    input = back.join("");
    display.textContent = input;
            }
        }
    } else if(e.code=="Enter"||e.key=="="){
        if(input!="Error"){
            operate();
        }
    } else if(e.key=="c"||e.key=="C"){
        input = "";
        display.textContent = input;
    } 
})
const enter = document.querySelector("#enter").addEventListener("click",operate);
const backspace = document.querySelector("#backspace").addEventListener("click",function (){
    let back = input.split("");
    if(back[back.length-1]==" "){
    back.splice(back.length-3,3,);
    input = back.join("");
    display.textContent = input;
    } else {
    back.splice(back.length-1,1,);
    input = back.join("");
    display.textContent = input;
    }
});
const clear = document.querySelector("#clear").addEventListener("click",function (){
    input = "";
    display.textContent = input;
});

function operate(){
    let result = 0;
if(input!="Error"){
let calculate = input.split(" ");

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
if(input=="Error"){
    display.textContent = "You little prick";
}else {
calculate.splice(0,3,input);
    input = calculate.join("");
    display.textContent = input;
    console.log(calculate);
}
if(input!="Error"){
for(i=1;i<calculate.length;){
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
    if(input=="Error"){
        display.textContent = "You little prick";
        break;
    }else {
    calculate.splice(0,3,input);
    input = calculate.join("");
    display.textContent = input;
    console.log(calculate);
    }
    }
}
}
}
