'use strict'

const Comp=document.getElementById('CC');
const User=document.getElementById('UC');
const result=document.getElementById('res');

// let pro;

let Uchoice;

let Cchoice;

let PC=document.querySelectorAll('button');

PC.forEach(PC=>PC.addEventListener('click',(e)=>{

     Uchoice=e.target.id;
    User.innerHTML=Uchoice;
    generateComputerChoice();

    end();
}));

function generateComputerChoice() 
{
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    
    if (randomNumber === 1) {
      Cchoice ='✊'
    }
    if (randomNumber === 2) {
      Cchoice = '✌'
    }
    if (randomNumber === 3) {
      Cchoice = '✋'
    }
    
    Comp.innerHTML = Cchoice

  }

  function end()
  {

    if(Cchoice === Uchoice)
    result.innerHTML='Draw';
      
    if(Cchoice==='✊' && Uchoice==='✌')
    result.innerHTML='You Lose😢';

    if(Cchoice==='✊' && Uchoice==='✋')
    result.innerHTML='You Win🎉';

    if(Cchoice==='✋' && Uchoice==='✌')
    result.innerHTML='You Win🎉';

    if(Cchoice==='✋' && Uchoice==='✊')
    result.innerHTML='You Lose😢';

    if(Cchoice==='✌' && Uchoice==='✋')
    result.innerHTML='You Lose😢';

    if(Cchoice==='✌' && Uchoice==='✊')
    result.innerHTML='You Win🎉';

  }