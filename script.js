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
    if(b==0){
        return "Error";
    } else {
        return (a/b).toFixed(4);
    }
}


let input = "";

const display = document.querySelector(".display");

const one = document.querySelector("#one").addEventListener("click",function (){
   if(input!="Error"){
    input += "1";
    display.textContent = input;
   }
});
const two = document.querySelector("#two").addEventListener("click",function (){
    if(input!="Error"){
    input += "2";
    display.textContent = input;
}});
const three = document.querySelector("#three").addEventListener("click",function (){
    if(input!="Error"){
    input += "3";
    display.textContent = input;
}});
const four = document.querySelector("#four").addEventListener("click",function (){
    if(input!="Error"){
    input += "4";
    display.textContent = input;
}});
const five = document.querySelector("#five").addEventListener("click",function (){
    if(input!="Error"){
    input += "5";
    display.textContent = input;
}});
const six = document.querySelector("#six").addEventListener("click",function (){
    if(input!="Error"){
    input += "6";
    display.textContent = input;
}});
const seven = document.querySelector("#seven").addEventListener("click",function (){
    if(input!="Error"){
    input += "7";
    display.textContent = input;
}});
const eight = document.querySelector("#eight").addEventListener("click",function (){
    if(input!="Error"){
    input += "8";
    display.textContent = input;
}});
const nine = document.querySelector("#nine").addEventListener("click",function (){
    if(input!="Error"){
    input += "9";
    display.textContent = input;
}});
const zero = document.querySelector("#zero").addEventListener("click",function (){
    if(input!="Error"){
    input += "0";
    display.textContent = input;
}});

const decimal = document.querySelector("#decimal").addEventListener("click",function (){
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
    display.textContent = input; //pending logic for more than one decimal
        }
}});

const operateOne = document.querySelector("#sum").addEventListener("click",function (){
    if(input!="Error"){
    input += " + ";
    display.textContent = input;
}});
const operateTwo = document.querySelector("#substract").addEventListener("click",function (){
    if(input!="Error"){
    input += " - ";
    display.textContent = input;
}});
const operateThree = document.querySelector("#multiply").addEventListener("click",function (){
    if(input!="Error"){
    input += " * ";
    display.textContent = input;
}});
const operateFour = document.querySelector("#divide").addEventListener("click",function (){
    if(input!="Error"){
    input += " / ";
    display.textContent = input;
}});

const keyboard = document.addEventListener('keydown',(e)=>{
    if(e.key=="1"){
        if(input!="Error"){
            input += "1";
            display.textContent = input;
           }
    } else if(e.key=="2"){
        if(input!="Error"){
            input += "2";
            display.textContent = input;
           }
    } else if(e.key=="3"){
        if(input!="Error"){
            input += "3";
            display.textContent = input;
           }
    } else if(e.key=="4"){
        if(input!="Error"){
            input += "4";
            display.textContent = input;
           }
    } else if(e.key=="5"){
        if(input!="Error"){
            input += "5";
            display.textContent = input;
           }
    } else if(e.key=="6"){
        if(input!="Error"){
            input += "6";
            display.textContent = input;
           }
    } else if(e.key=="7"){
        if(input!="Error"){
            input += "7";
            display.textContent = input;
           }
    } else if(e.key=="8"){
        if(input!="Error"){
            input += "8";
            display.textContent = input;
           }
    } else if(e.key=="9"){
        if(input!="Error"){
            input += "9";
            display.textContent = input;
           }
    } else if(e.key=="0"){
        if(input!="Error"){
            input += "0";
            display.textContent = input;
           }
    } else if(e.key=="."){              
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
    } else if(e.key=="+"){
        if(input!="Error"){
            input += " + ";
            display.textContent = input;
        }

    } else if(e.key=="-"){
        if(input!="Error"){
            input += " - ";
            display.textContent = input;
        }
    } else if(e.key=="/"){
        if(input!="Error"){
            input += " / ";
            display.textContent = input;
        }
    } else if(e.key=="*"){ 
        if(input!="Error"){
            input += " * ";
            display.textContent = input;
        }
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
