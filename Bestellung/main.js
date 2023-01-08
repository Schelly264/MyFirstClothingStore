/*
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(`Button ${button.id} was clicked!`);
        check1.classList.toggle("faded");
    });
});
*/
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(button.classList);
        buttons.forEach(function(button) {
            button.classList.remove("button-clicked");
        });
        button.classList.add("button-clicked");
        
    });
});           