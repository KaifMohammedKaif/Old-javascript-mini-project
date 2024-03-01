//grabbing element
let btnBox = document.querySelectorAll(".box");
let btnReset = document.querySelector(".reset");
let winMsg = document.querySelector(".winner");
let board = document.querySelector(".game-box");
let turn = true;

//win pattern
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//turn
btnBox.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("btn click");
    if (turn) {
      box.innerHTML = "0";
      turn = false;
    } else {
      box.innerHTML = "X";
      turn = true;
    }
    box.disabled = true;
    checkWin();
  });
});

// Reset
btnReset.addEventListener("click", () => {
  for (let box of btnBox) {
    box.disabled = false;
    box.innerHTML = "";
  }
  winMsg.classList.add("hide");
  board.classList.remove("hide");
});

// Check the Winner
const checkWin = () => {
  for (let pattern of winPattern) {
    let pos1Val = btnBox[pattern[0]].innerHTML;
    let pos2Val = btnBox[pattern[1]].innerHTML;
    let pos3Val = btnBox[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        setTimeout(() => {
          Winner(pos1Val);
        }, 500);
      }
    }
  }
};

// Show win msg
const Winner = (pos1Val) => {
  winMsg.innerHTML = "winner is " + pos1Val;
  winMsg.classList.remove("hide");
  board.classList.add("hide");
};
