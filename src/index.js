const GenNum = document.querySelector(".GenerateNum input");
const GueNum = document.querySelector(".GuessNum input");
const Maxvalue=GenNum.value;
const GBtn = document.querySelector(".GuessNum button");
const Youchose=document.querySelector(".YouChose");
const Result=document.querySelector(".result");
function maxvalue(event){
    event.preventDefault();
    const Guevalue = GueNum.value;
    const Maxvalue=GenNum.value;
    if(Guevalue <= 0){
        alert("양수 정수값을 입력하시오.");
    }
    else if(Maxvalue < Guevalue){
        alert(`${Maxvalue} 보다 작은값을 입력하시오.`);
    }
    else{
        GueNum.setAttribute('max', Maxvalue);
    }
}

function GamePlay(){
    const GueValue = GueNum.value;
    const Maxvalue=GenNum.value;
    const randomValue = Math.ceil(Math.random()*(Maxvalue));
    Youchose.innerText=`You chose: ${GueValue}, the machine chose: ${randomValue}`;
    if(GueValue == randomValue){
        Result.innerText="You won!"
    }else{
        Result.innerText="You lost!"
    }
}
GueNum.addEventListener("input",maxvalue);
GBtn.addEventListener("click",GamePlay);