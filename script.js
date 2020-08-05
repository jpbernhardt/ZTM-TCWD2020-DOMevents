var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.createElement("button");

/* Creates a new list item from input, adds it to the list and
clears the text field */
var createListElement = () => {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
};

// Returns the input length.
var inputLength = () => {
	return input.value.length;
}

// List item is added when button is pressed.
var addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

// List item is added when "Enter" key is pressed.
var addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
	}
}

/* Adds an eventlistener to ul and checkes after "click". It also checks
to see if the parent element of the clicked element is the one that the
click event is attached to. Works for children of li too. */
ul.addEventListener('click', function (event) {
	var target = event.target; // Clicked element
	while (target && target.parentNode !== ul) {
			/* If the clicked element isn't a direct child,
			it sets the target as the parent of the current node */
			target = target.parentNode;
			if(!target) {
				return; // If element doesn't exist
			}
	}
	if (target.tagName === 'LI'){
			target.classList.toggle("done");
	}
});


button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
