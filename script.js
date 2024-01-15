const boxes=document.querySelectorAll('.box');
const reset_btn=document.querySelector('.reset-btn');
const new_game=document.querySelector('.new-game');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO=true;
let count=0;
const Winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const Resetbtn=(()=>{
      
    turnO=true;
    count=0;
    msgcontainer.classList.add("hide");
    enableboxes();

});

boxes.forEach((box)=>{
     box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML=`<p id="O"> O </p>`;
           turnO=false;
           count++;
        }
        else{
            box.innerHTML=`<p id="X"> X </p>`;
            turnO=true;
            count++;
        }
       box.disabled=true;
       let iswin=checkwinner();
       
       if(count===9 && !iswin){
           DrawGame();
       }
     })
});

const showWinner=((winner)=>{
    if(winner=='O'){
        msg.innerText=`Winner is ${name1.value}`;
    }
    else{
        msg.innerText=`Winner is ${name2.value}`;
    }
     
      msgcontainer.classList.remove("hide");
      disabledboxes();
    

});

const DrawGame=(()=>{
    msg.innerText='Game is Draw';
    msgcontainer.classList.remove("hide");
    disabledboxes();
});

const checkwinner=(()=>{
     for(let pattern of Winpattern){
          let val1=boxes[pattern[0]].innerText;
          let val2=boxes[pattern[1]].innerText;
          let val3=boxes[pattern[2]].innerText;
          
          if(val1 !="" && val2 !="" && val3 !=""){
             if(val1===val2 && val2==val3){
                   showWinner(val1);
                   return true;
             }
          }
     }
});




const enableboxes=(()=>{
    for(let box of boxes){
         box.disabled=false;
         box.innerHTML="";
    }
});

const disabledboxes=(()=>{
    for(let box of boxes){
        box.disabled=true;
    }
})

reset_btn.addEventListener('click',Resetbtn);
new_game.addEventListener('click',Resetbtn);