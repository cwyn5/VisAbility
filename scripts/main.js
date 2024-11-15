let button = document.getElementById("testbutton");
let text = document.getElementById("maintext");

button.onclick = function() {
    text.innerText = "The button has been clicked.";
};