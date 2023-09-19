var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var resultHeading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    resultHeading.innerHTML = "🚩 wins!";
} else if (randomNumber2 > randomNumber1) {
    resultHeading.innerHTML = "wins! 🚩";
} else {
    resultHeading.innerHTML = "It's a draw!";
}
