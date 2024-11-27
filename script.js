let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset-btn");

const winConditions = [
    ["btn1" , "btn2" , "btn3"] ,
    ["btn4" , "btn5" , "btn6"] , 
    ["btn7" , "btn8" , "btn9"] ,
    ["btn1" , "btn4" , "btn7"] ,
    ["btn2" , "btn5" , "btn8"] ,
    ["btn3" , "btn6" , "btn9"] ,
    ["btn1" , "btn5" , "btn9"] ,
    ["btn3" , "btn5" , "btn7"]
]

let turn = true;

let xBtn = {list: []};
let yBtn = {list: []};


btns.forEach(function (btn) {
    btn.addEventListener("click" , function (event){
        if (turn){
            turn = false;
            btn.innerText = "X";
            let playerBtn = event.target.classList[1];
            btn.disabled = true;
            append(playerBtn , xBtn);
            gameLogic(xBtn , btn.innerText);

        }else{
            turn = true;
            btn.innerText = "O"
            let playerBtn = event.target.classList[1];
            btn.disabled = true;
            append(playerBtn , yBtn);
            gameLogic(yBtn , btn.innerText);
        }
    })
})

reset.addEventListener("click" , resetGame);


function append (playerBtn , btn){
    btn.list.push(playerBtn);
    console.log(btn.list)
}

function gameLogic(btn , innertext){
    for (let conditions of winConditions){
        if (conditions.every(function (con) {
            return btn.list.includes(con);
        })){
            document.querySelector(".navbar").innerText = `${innertext} Wins`;
            disableBtns();
            return
        }
    }
}

function disableBtns(){
    btns.forEach(function (btn) {
        btn.disabled = true;
    })
}

function enableBtns(){
    btns.forEach(function (btn) {
        btn.disabled = false;
    })
}

function resetGame(){
    enableBtns();
    document.querySelector(".navbar").innerText = "Tic Tac Toe";
    btns.forEach(function (btn) {
        btn.innerText = "";
    })
    turn = true;
    xBtn.list = [];
    yBtn.list = [];
}

