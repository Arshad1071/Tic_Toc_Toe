var player = "X";
var flag = 0; //To konw the game is completed or not

function clickHandler(num) {
  if (document.getElementById(num).innerText === "") {
    
    document.getElementById(num).innerText = player;

    if (player == "X") {
      document.getElementById("current_player").innerText = "Player O";
    } else {
      document.getElementById("current_player").innerText = "Player X";
    }
  }

  if (flag === 1) {
    var r = confirm("Pleaes Restart the game !");
  }

  if (r === true) {
    document.location.reload(true);
  }

  //Game logic
  if (player == "X") {
    console.log(num, document.getElementById(num).innerText);
    player = "O";
    if (
      document.getElementById("11").innerText === "X" &&
      document.getElementById("12").innerText === "X" &&
      document.getElementById("13").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("21").innerText === "X" &&
      document.getElementById("22").innerText === "X" &&
      document.getElementById("23").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("31").innerText === "X" &&
      document.getElementById("32").innerText === "X" &&
      document.getElementById("33").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("11").innerText === "X" &&
      document.getElementById("21").innerText === "X" &&
      document.getElementById("31").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("12").innerText === "X" &&
      document.getElementById("22").innerText === "X" &&
      document.getElementById("32").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("12").innerText === "X" &&
      document.getElementById("22").innerText === "X" &&
      document.getElementById("32").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("13").innerText === "X" &&
      document.getElementById("23").innerText === "X" &&
      document.getElementById("33").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("11").innerText === "X" &&
      document.getElementById("22").innerText === "X" &&
      document.getElementById("33").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    } else if (
      document.getElementById("13").innerText === "X" &&
      document.getElementById("22").innerText === "X" &&
      document.getElementById("31").innerText === "X"
    ) {
      document.getElementById("result").innerText = "X Won the game";
      flag = 1;
    }
  } else if (player == "O") {
    player = "X";
    console.log(num, document.getElementById(num).innerText);

    if (
      document.getElementById("11").innerText === "O" &&
      document.getElementById("12").innerText === "O" &&
      document.getElementById("13").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
    } else if (
      document.getElementById("21").innerText === "O" &&
      document.getElementById("22").innerText === "O" &&
      document.getElementById("23").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("31").innerText === "O" &&
      document.getElementById("32").innerText === "O" &&
      document.getElementById("33").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("11").innerText === "O" &&
      document.getElementById("21").innerText === "O" &&
      document.getElementById("31").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("12").innerText === "O" &&
      document.getElementById("22").innerText === "O" &&
      document.getElementById("32").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("12").innerText === "O" &&
      document.getElementById("22").innerText === "O" &&
      document.getElementById("32").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("13").innerText === "O" &&
      document.getElementById("23").innerText === "O" &&
      document.getElementById("33").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("11").innerText === "O" &&
      document.getElementById("22").innerText === "O" &&
      document.getElementById("33").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
      flag = 1;
    } else if (
      document.getElementById("13").innerText === "O" &&
      document.getElementById("22").innerText === "O" &&
      document.getElementById("31").innerText === "O"
    ) {
      document.getElementById("result").innerText = "O Won the game";
    }
  } else {
    console.log(num, document.getElementById(num).innerText);
  }
}

function resetHandler() {
  document.location.reload(true);
}
