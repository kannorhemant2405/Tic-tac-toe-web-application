 
    let boxes = [...document.querySelectorAll('.box')];
    let resetBtn = document.querySelector('#reset');
    let turnO = true; 
    let newGameBtn = document.querySelector('#new-btn');
    let msgContainer = document.querySelector('.msg-container');
    let msg = document.querySelector('#msg');

    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    boxes.forEach((box) => {
      box.addEventListener('click', function () {
        if (turnO) {
          box.innerText = 'O';
          box.style.color = 'green';
          turnO = false;
        } else {
          box.innerText = 'X';
          box.style.color = 'red';
          turnO = true;
        }
        box.disabled = true;
        checkWinner();
      });
    });

    const enableBoxes = () => {
      boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
      });
    };

    const disableBoxes = () => {
      boxes.forEach((box) => box.disabled = true);
    };

    const showWinner = (winner) => {
      msg.innerText = `🎉 Winner is ${winner} 🎉`;
      msgContainer.classList.remove('hide');
      disableBoxes();
    };

    const checkWinner = () => {
      for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let val1 = boxes[a].innerText;
        let val2 = boxes[b].innerText;
        let val3 = boxes[c].innerText;

        if (val1 && val1 === val2 && val2 === val3) {
          showWinner(val1);
          return;
        }
      }
      if ([...boxes].every((box) => box.innerText !== "")) {
        msg.innerText = "🤝 Match Draw!";
        msgContainer.classList.remove("hide");
      }
    };

    const resetGame = () => {
      turnO = true;
      enableBoxes();
      msgContainer.classList.add('hide');
    };

    newGameBtn.addEventListener('click', resetGame);
    resetBtn.addEventListener('click', resetGame);
 