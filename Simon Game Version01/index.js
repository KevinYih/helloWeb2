// $(document).keydown(function () {
//   alert("OK");

//   $("h1").text("NNNN Over, Press Any Key to Restart");
//   i++;
//   var array1 = [];
//   var arrayNext = Math.floor(Math.random() * 4 + 1);
//   array1.push(arrayNext);

//   // for (var j = 0; (j = array1.length); j++) {
//   //   pressK(j);
//   // }

//   alert("you fail");
//   $("h1").text("Game Over, Press Any Key to Restart");
// });
var arrayGame = [];
var arrayClick = [];
var startMark = false;
var level = 1;

$(document).keydown(function () {
  // alert("begain");
  // console.log($(this).attr());
  if (!startMark) {
    nextLevel();
    startMark = true;
  }
});

$(".btn").click(function (event) {
  console.log(event);
  console.log("Event target:", event.target.id);

  if (event.target.id === "green") {
    arrayClick.push(1);
    pressK(1);
  } else if (event.target.id === "red") {
    arrayClick.push(2);
    pressK(2);
  } else if (event.target.id === "yellow") {
    arrayClick.push(3);
    pressK(3);
  } else if (event.target.id === "blue") {
    arrayClick.push(4);
    pressK(4);
  }

  console.log("begin to check:" + arrayClick);
  console.log("begin to check:" + (arrayClick.length - 1));
  checkArray(arrayClick.length - 1);
});

function pressK(x) {
  if (x === 1) {
    $("#green").fadeOut().fadeIn();
    var audio = new Audio("sounds/green.mp3");
    audio.play();
  }

  if (x === 2) {
    $("#red").fadeOut().fadeIn();
    var audio = new Audio("sounds/red.mp3");
    audio.play();
  }

  if (x === 3) {
    $("#yellow").fadeOut().fadeIn();
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
  }

  if (x === 4) {
    $("#blue").fadeOut().fadeIn();
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
  }
}

function checkArray(n) {
  if (arrayClick[n] === arrayGame[n]) {
    if (arrayClick.length === arrayGame.length) {
      setTimeout(function () {
        nextLevel();
      }, 1000);
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game Over, Press Any Key to Restart");

    reStart();
  }
}

function nextLevel() {
  arrayClick = [];
  $("h1").text("level " + level);
  var arrayNext = Math.floor(Math.random() * 4 + 1);

  pressK(arrayNext);
  arrayGame.push(arrayNext);
  console.log("arrayGame:" + arrayGame);
  level++;
}

function reStart() {
  level = 1;
  arrayGame = [];
  startMark = false;
}
