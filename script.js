var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

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

var addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

var addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);