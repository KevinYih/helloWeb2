var num1 = Math.floor(Math.random() * 6 + 1);
var srcImag = "images/dice" + num1 + ".png";
// "images/dice3.png
// 3 different ways to select!
// document.querySelectorAll("img")[0].setAttribute("src", srcImag);
// document.querySelectorAll(".img1")[0].setAttribute("src", srcImag);
document.querySelector(".img1").setAttribute("src", srcImag);

num2 = Math.floor(Math.random() * 6 + 1);
srcImag = "images/dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", srcImag);

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);
if (num1 > num2) {
  document.querySelector("h1").innerHTML = "Play1 Win!";
} else if (num1 < num2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
