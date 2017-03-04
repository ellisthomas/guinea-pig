////// varIABLES //////

var inputText = document.getElementById("keypress-input");
var outputTarget = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var makeLarger = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");

////// FUNCTIONS //////

document.addEventListener("click", function(e) {
	writeToOutputTarget(e.target.innerText);
});

pageTitle.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
});

pageTitle.addEventListener("mouseout", function() {
	outputTarget.innerHTML = "You left me!";
});

inputText.addEventListener("keyup", function(e) {
	outputTarget.innerHTML = e.target.value;
});

addColor.addEventListener("click", function() {
	guineaPig.classList.add("add-color");
});

makeLarger.addEventListener("click", function() {
	guineaPig.classList.add("make-large");
});

addBorder.addEventListener("click", function() {
	guineaPig.classList.add("add-border");
});

addRounding.addEventListener("click", function() {
	guineaPig.classList.add("add-rounding");
});

////// FUNCTION FOR CLICKED OUTPUT TARGET //////

function writeToOutputTarget(text) {
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};