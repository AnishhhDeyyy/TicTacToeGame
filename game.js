const boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')
let draw = document.querySelector('#draw')
let drawContainer = document.querySelector('.draw-container')
let winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]
let playGame = true
let isdraw = false;
let count = 0;

const resetGame = function(){
  playGame = true
  count = 0
  msgContainer.classList.add("hide")
  drawContainer.classList.add("hide")
  boxes.forEach((box)=>{
       box.innerHTML = ''
       box.disabled = false
  })
} 

boxes.forEach((box)=>{
  box.addEventListener('click',function(e){
      if(playGame){
        box.innerText = 'O'
        playGame = false
        box.disabled = true
        count++;
      }else{
        box.innerText = 'X'
        playGame = true
        box.disabled = true
        count++;
      }
     let checkdraw = func()
     if(count ===9 && checkdraw === false){
       isDraww()
     }
  });
});

const showWinner = function(pos1Val){
  msg.innerText = `Congratualtions, Winner is ${pos1Val}`
  msgContainer.classList.remove("hide")
  for(let box of boxes){
    box.disabled = true
  }
}
// let isdraw = false;
const func = function(){
  for(let pattern of winPattern){
    
   let pos1Val = boxes[pattern[0]].innerText;
   let pos2val = boxes[pattern[1]].innerText;
   let pos3Val = boxes[pattern[2]].innerText;

   if(pos1Val!='' && pos2val!='' && pos3Val!=''){
    if(pos1Val === pos2val && pos2val === pos3Val){
      //console.log("Winner" , pos1Val);
      showWinner(pos1Val);
    
      return true;
    }
   }
  }
  return false;
}
const isDraww = function(isDraw){

     draw.innerText = 'Draw Game It Is'
     drawContainer.classList.remove("hide")

}
resetBtn.addEventListener('click',resetGame)
newGameBtn.addEventListener('click',resetGame)
