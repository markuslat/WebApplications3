import "./styles.css";

var counter = 0;
var time;
var id;

var elems = document.querySelectorAll(".col");

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function () {
    fillCell(this);
  });
}

function fillCell(td) {
  move();
  ClearTime();
  if (counter % 2 === 0) {
    if (td.innerHTML === "") {
      counter++;
      td.innerHTML = "X";
      td.style.backgroundColor = "rgb(124, 252, 0)";
      timer();
      Whowon();
      checkDraw();
    } else {
      alert("This cell has already marking in it");
    }
  } else {
    if (td.innerHTML === "") {
      counter++;
      td.innerHTML = "O";
      td.style.backgroundColor = "rgb(250, 128, 114)";
      timer();
      Whowon();
      checkDraw();
    } else {
      alert("This cell has already a marking in it");
    }
  }
}

function clearTable() {
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundColor = "rgb(255, 255, 255)";
    elems[i].innerHTML = "";
  }
  ClearTime();
  clearInterval(id);
  clearWidth();
}

function checkDraw() {
  var count = 0;
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].innerHTML === "X" || elems[i].innerHTML === "O") {
      count++;
    }
  }
  if (count === 25) {
    alert("It's a draw! Let's restart.");
    ClearTime();
    clearTBL();
  }
}

function Whowon() {
  var xo = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var horizontal1 = 0;
    var horizontal2 = 0;
    var horizontal3 = 0;
    var horizontal4 = 0;
    var horizontal5 = 0;
    var vertical1 = 0;
    var vertical2 = 0;
    var vertical3 = 0;
    var vertical4 = 0;
    var vertical5 = 0;
    var oblique1 = 0;
    var oblique2 = 0;

    var round = 0;

    for (var j = 0; j < 5; j++) {
      round++;
      if (elems[j].innerHTML === xo[i]) {
        horizontal1++;
        if (round === 1) {
          vertical1++;
          oblique1++;
        }
        if (round === 2) {
          vertical2++;
        }
        if (round === 3) {
          vertical3++;
        }
        if (round === 4) {
          vertical4++;
        }
        if (round === 5) {
          vertical5++;
          oblique2++;
        }
      }
      if (elems[j + 5].innerHTML === xo[i]) {
        horizontal2++;
        if (round === 1) {
          vertical1++;
        }
        if (round === 2) {
          vertical2++;
          oblique1++;
        }
        if (round === 3) {
          vertical3++;
        }
        if (round === 4) {
          vertical4++;
          oblique2++;
        }
        if (round === 5) {
          vertical5++;
        }
      }
      if (elems[j + 10].innerHTML === xo[i]) {
        horizontal3++;
        if (round === 1) {
          vertical1++;
        }
        if (round === 2) {
          vertical2++;
        }
        if (round === 3) {
          vertical3++;
          oblique1++;
          oblique2++;
        }
        if (round === 4) {
          vertical4++;
        }
        if (round === 5) {
          vertical5++;
        }
      }
      if (elems[j + 15].innerHTML === xo[i]) {
        horizontal4++;
        if (round === 1) {
          vertical1++;
        }
        if (round === 2) {
          vertical2++;
          oblique2++;
        }
        if (round === 3) {
          vertical3++;
        }
        if (round === 4) {
          vertical4++;
          oblique1++;
        }
        if (round === 5) {
          vertical5++;
        }
      }
      if (elems[j + 20].innerHTML === xo[i]) {
        horizontal5++;
        if (round === 1) {
          vertical1++;
          oblique2++;
        }
        if (round === 2) {
          vertical2++;
        }
        if (round === 3) {
          vertical3++;
        }
        if (round === 4) {
          vertical4++;
        }
        if (round === 5) {
          vertical5++;
          oblique1++;
        }
      }
    }
    if (
      horizontal1 === 5 ||
      horizontal2 === 5 ||
      horizontal3 === 5 ||
      horizontal4 === 5 ||
      horizontal5 === 5 ||
      vertical1 === 5 ||
      vertical2 === 5 ||
      vertical3 === 5 ||
      vertical4 === 5 ||
      vertical5 === 5 ||
      oblique1 === 5 ||
      oblique2 === 5
    ) {
      if (xo[i] === "X") {
        alert("Player 1 won!");
        ClearTime();
        clearTable();
        horizontal1 = 0;
        horizontal2 = 0;
        horizontal3 = 0;
        horizontal4 = 0;
        horizontal5 = 0;
        vertical1 = 0;
        vertical2 = 0;
        vertical3 = 0;
        vertical4 = 0;
        vertical5 = 0;
        oblique1 = 0;
        oblique2 = 0;
        break;
      }

      if (xo[i] === "O") {
        alert("Player 2 won!");
        ClearTime();
        clearTable();
        horizontal1 = 0;
        horizontal2 = 0;
        horizontal3 = 0;
        horizontal4 = 0;
        horizontal5 = 0;
        vertical1 = 0;
        vertical2 = 0;
        vertical3 = 0;
        vertical4 = 0;
        vertical5 = 0;
        oblique1 = 0;
        oblique2 = 0;
        break;
      }
    }
  }
}

function timer() {
  time = setTimeout(timeoutAlert, 10000);
}

function timeoutAlert() {
  counter++;
  alert("Time is up!");
}

function ClearTime() {
  clearTimeout(time);
}

function move() {
  clearInterval(id);
  var bar = document.querySelector(".determinate");
  var width = 0;
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }
}

function clearWidth() {
  var bar = document.querySelector(".determinate");
  var width = 0;
  bar.style.width = width + "%";
}
