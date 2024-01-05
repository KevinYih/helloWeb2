//alert("that is ok!");

// document.querySelectorAll(".drum")[1].addEventListener("click", handleClick);
// //handleClick, instead of handleClick()

// function handleClick() {
//   alert("I got clicked!");
// }

/*   anonymous function   */

var numDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numDrumButtons; i++) {
  var buttonEach = document.querySelectorAll("button")[i];
  buttonEach.addEventListener("click", function () {
    var buttonText = this.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}

// var audio = new Audio("sounds/crash.mp3");
// audio.play();

document.addEventListener("keydown", function (event) {
  var pressedKey = event.key;
  console.log(event);
  makeSound(pressedKey);
  buttonAnimation(pressedKey);
});

function makeSound(i) {
  switch (i) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
  }
  audio.play();
}

function buttonAnimation(i) {
  var buttonAni = document.querySelector("." + i);
  buttonAni.classList.add("pressed");

  setTimeout(function () {
    buttonAni.classList.remove("pressed");
  }, 200);
}
