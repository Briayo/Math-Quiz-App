 const num1 = Math.ceil(Math.random()*10);
 const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");
 
const scoreEl = document.getElementById("score");

const timerEl = document.getElementById("timer");

let score = JSON.parse(localStorage.getItem("score"));


if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`

questionEl.innerText =  `What is ${num1} multiplied by ${num2}?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }
 });
 function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
 }
 function stopWatch(){
    let timer = 60;
    if(timer > 0){
        timer--  
    }
    else{
        alert(`Time is up. total score is ${score}`);
    }
    timerEl.innerText = timer;
    
    setInterval(()=>{
            stopWatch()
        }, 1000)
    };
stopWatch();
setTimeout(stopWatch(),60000);

