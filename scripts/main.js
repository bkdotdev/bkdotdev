





//Popup Box mit OK Button
//alert('!B A K U   B A K U!');


//document.querySelector('html').onclick = function () {
//	alert('Ouh, dont touch me');
//};

var myImage = document.querySelector('img');
myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/bkdotdev.png') {
		myImage.setAttribute('src', 'images/BAKUSports-Lion.jpg');
	} else {
		myImage.setAttribute('src', 'images/bkdotdev.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Pleaser enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'BAKU x ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'BAKU x ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}