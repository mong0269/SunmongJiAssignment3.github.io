// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
// Function to change the background color of the body
function changeBackgroundColor() {
    CSbody.style.backgroundColor = getRandomColor();
}


// Generate a color with high contrast, excluding black
function getHighContrastColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var brightnessThreshold = 128; // Adjust this threshold to your preference

    for (var i = 0; i < 3; i++) {
        var randomValue = Math.floor(Math.random() * 256);
        var component = randomValue > brightnessThreshold ? '00' : 'FF';
        color += component;
    }

    // Check if the generated color is black, if so, generate a new color
    if (color === '#000000') {
        return getHighContrastColor();
    }

    return color;
}

// Call the changeBackgroundColor function with high contrast color when the body is clicked
CSbody.addEventListener('click', function() {
    CSbody.style.backgroundColor = getHighContrastColor();
});


// Function to display a welcome message to the visitor
function displayWelcomeMessage() {
    alert("Welcome to our website! Enjoy your visit.");
}

// Call the displayWelcomeMessage function when the page is loaded
window.addEventListener('load', displayWelcomeMessage);

