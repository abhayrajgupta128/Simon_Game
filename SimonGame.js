let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let buttton=document.querySelector("button");
    buttton.onclick = () =>{
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function sound2(){
    var snd = new Audio('levelup.mp3');
    snd.play();
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    sound2();

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function sound3(){
    var snd = new Audio('gameover.mp3');
    snd.play();
}

function checkAns(idx){

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>.`;
        sound3();
        reset();
    }
}

function sound(){
    var snd = new Audio('click.mp3');
    snd.play();
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    sound();

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}