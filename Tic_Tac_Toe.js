let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rst-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcntr=document.querySelector(".msgcntr")
let msg =document.querySelector("#msg");

let turno=true;//payer x,player y
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [2,5,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turno)
            {
                box.innerText="X";
                turno=false;
            }
            else{
                box.innerText="O";
                turno=true;
            }
            box.disabled=true;
            checkWinner();
    });
});
const disableBoxes =()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner)=>{
    msg.innerText=`Congratulations,winner is${winner}`;
    msgcntr.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for( let pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val!="" && pos2val!="" && pos3val!="")
    {
        if(pos1val===pos2val&&pos2val===pos3val)
        {
            console.log("winner",pos1val);
            showWinner(pos1val)
            button
        }
    }
  }
};
const resetGame= ()=>
{
    turno=true;
    enableBoxes();
    msgcntr.classList.add("hide");
}
newGamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)