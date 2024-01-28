let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turnO=true; //playerx,playerO
let newbtn=document.querySelector("#new-btn");
let msgcontiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winpatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
    
            box.innerText="X";
            turnO="true";
        }
        box.disabled="true";

        checkwinner();
          });
});

        const showWinner=(winner) =>{
            msg.innerText=`Congrtulations, winner is ${winner}`;
            msgcontiner.classList.remove("hide");
            disbleboxes();
        };

        const disbleboxes=()=>{
            for(let box of boxes){
                box.disabled=true;
            }
        }

        const enableboxes=()=>{
            for(let box of boxes){
                box.disabled=false;
                box.innerText="";
            }
        }



        const checkwinner=()=>{
            for(pattern of winpatterns){
               let pos1val=boxes[pattern[0]].innerText;
               let pos2val=boxes[pattern[1]].innerText;
               let pos3val=boxes[pattern[2]].innerText;

               if(pos1val!="" &&  pos2val!="" && pos3val!="") {
                if(pos1val===pos2val && pos2val===pos3val){
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
               }
            }

        };

        const resetGame=()=>{
            turnO=true;
            enableboxes();
            msgcontiner.classList.add("hide")
        };

 newbtn.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);

