var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
	var myName = prompt('Enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'User:' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'User:' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

myHeading.onclick = function() {
	myHeading.textContent = "Hello Mozilla";
}