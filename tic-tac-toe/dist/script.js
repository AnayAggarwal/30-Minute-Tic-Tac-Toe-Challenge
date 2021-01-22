var turn = "X";
function changeturn() {
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}
function sq1() {
  var el = document.getElementById("sq1");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq2() {
  var el = document.getElementById("sq2");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq3() {
  var el = document.getElementById("sq3");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq4() {
  var el = document.getElementById("sq4");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq5() {
  var el = document.getElementById("sq5");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq6() {
  var el = document.getElementById("sq6");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq7() {
  var el = document.getElementById("sq7");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq8() {
  var el = document.getElementById("sq8");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}
function sq9() {
  var el = document.getElementById("sq9");
  el.innerHTML = turn;
  changeturn();
  document.getElementById("h").innerHTML = turn + "'s Turn";
  game();
}

function game() {
  //gamelogic goes here
  var sq1 = document.getElementById("sq1").innerHTML;
  var sq2 = document.getElementById("sq2").innerHTML;
  var sq3 = document.getElementById("sq3").innerHTML;
  var sq4 = document.getElementById("sq4").innerHTML;
  var sq5 = document.getElementById("sq5").innerHTML;
  var sq6 = document.getElementById("sq6").innerHTML;
  var sq7 = document.getElementById("sq7").innerHTML;
  var sq8 = document.getElementById("sq8").innerHTML;
  var sq9 = document.getElementById("sq9").innerHTML;

  if (sq1 == "X") {
    document.getElementById("sq1").style.background = "#b7425a";
  } else if (sq1 == "O") {
    document.getElementById("sq1").style.background = "#43eb34";
  }

  if (sq2 == "X") {
    document.getElementById("sq2").style.background = "#b7425a";
  } else if (sq2 == "O") {
    document.getElementById("sq2").style.background = "#43eb34";
  }

  if (sq3 == "X") {
    document.getElementById("sq3").style.background = "#b7425a";
  } else if (sq3 == "O") {
    document.getElementById("sq3").style.background = "#43eb34";
  }

  if (sq4 == "X") {
    document.getElementById("sq4").style.background = "#b7425a";
  } else if (sq4 == "O") {
    document.getElementById("sq4").style.background = "#43eb34";
  }

  if (sq5 == "X") {
    document.getElementById("sq5").style.background = "#b7425a";
  } else if (sq5 == "O") {
    document.getElementById("sq5").style.background = "#43eb34";
  }

  if (sq6 == "X") {
    document.getElementById("sq6").style.background = "#b7425a";
  } else if (sq6 == "O") {
    document.getElementById("sq6").style.background = "#43eb34";
  }

  if (sq7 == "X") {
    document.getElementById("sq7").style.background = "#b7425a";
  } else if (sq7 == "O") {
    document.getElementById("sq7").style.background = "#43eb34";
  }

  if (sq8 == "X") {
    document.getElementById("sq8").style.background = "#b7425a";
  } else if (sq8 == "O") {
    document.getElementById("sq8").style.background = "#43eb34";
  }

  if (sq9 == "X") {
    document.getElementById("sq9").style.background = "#b7425a";
  } else if (sq9 == "O") {
    document.getElementById("sq9").style.background = "#43eb34";
  }

  if (sq1 == ".") {
    sq1 = "sq1";
  }
  if (sq2 == ".") {
    sq2 = "sq2";
  }
  if (sq3 == ".") {
    sq3 = "sq3";
  }
  if (sq4 == ".") {
    sq4 = "sq4";
  }
  if (sq5 == ".") {
    sq5 = "sq5";
  }
  if (sq6 == ".") {
    sq6 = "sq6";
  }
  if (sq7 == ".") {
    sq7 = "sq7";
  }
  if (sq8 == ".") {
    sq8 = "sq8";
  }
  if (sq9 == ".") {
    sq9 = "sq9";
  }

  if (sq1 == sq2) {
    if (sq2 == sq3) {
      document.getElementById("h").innerHTML = sq1 + " wins!";
      document.getElementById("sq1").style.background = "#000000";
      document.getElementById("sq2").style.background = "#000000";
      document.getElementById("sq3").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq1 == sq4) {
    if (sq4 == sq7) {
      document.getElementById("h").innerHTML = sq1 + " wins!";
      document.getElementById("sq1").style.background = "#000000";
      document.getElementById("sq4").style.background = "#000000";
      document.getElementById("sq7").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq1 == sq5) {
    if (sq5 == sq9) {
      document.getElementById("h").innerHTML = sq1 + " wins!";
      document.getElementById("sq1").style.background = "#000000";
      document.getElementById("sq5").style.background = "#000000";
      document.getElementById("sq9").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq4 == sq5) {
    if (sq5 == sq6) {
      document.getElementById("h").innerHTML = sq4 + " wins!";
      document.getElementById("sq4").style.background = "#000000";
      document.getElementById("sq5").style.background = "#000000";
      document.getElementById("sq6").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq7 == sq8) {
    if (sq8 == sq9) {
      document.getElementById("h").innerHTML = sq7 + " wins!";
      document.getElementById("sq7").style.background = "#000000";
      document.getElementById("sq8").style.background = "#000000";
      document.getElementById("sq9").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq2 == sq5) {
    if (sq5 == sq8) {
      document.getElementById("h").innerHTML = sq2 + " wins!";
      document.getElementById("sq2").style.background = "#000000";
      document.getElementById("sq5").style.background = "#000000";
      document.getElementById("sq8").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq3 == sq6) {
    if (sq6 == sq9) {
      document.getElementById("h").innerHTML = sq3 + " wins!";
      document.getElementById("sq3").style.background = "#000000";
      document.getElementById("sq6").style.background = "#000000";
      document.getElementById("sq9").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq3 == sq5) {
    if (sq5 == sq7) {
      document.getElementById("h").innerHTML = sq3 + " wins!";
      document.getElementById("sq3").style.background = "#000000";
      document.getElementById("sq5").style.background = "#000000";
      document.getElementById("sq7").style.background = "#000000";
      setTimeout(function () {
        window.location.href = window.location.href;
      }, 3000);
    }
  }

  if (sq1 == "X" || sq1 == "O") {
    if (sq2 == "X" || sq2 == "O") {
      if (sq3 == "X" || sq3 == "O") {
        if (sq4 == "X" || sq4 == "O") {
          if (sq5 == "X" || sq5 == "O") {
            if (sq6 == "X" || sq6 == "O") {
              if (sq7 == "X" || sq7 == "O") {
                if (sq8 == "X" || sq8 == "O") {
                  if (sq9 == "X" || sq9 == "O") {
                    document.getElementById("h").innerHTML = "It's a tie!";
                    setTimeout(function () {
                      window.location.href = window.location.href;
                    }, 3000);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}