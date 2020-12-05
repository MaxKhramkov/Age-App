const nameInput = document.querySelector("#name-input");
const ageInput = document.querySelector("#age-input");
const btn = document.querySelector(".btn");
const answer = document.querySelector(".answer");

const colcAge = function() {
    const age = ageInput.value;
    const name = nameInput.value;
    const nameToString = name.toString();
    const nameFirstChar = nameToString.slice(0, 1);
    const nameFirstCharUpperCase = nameFirstChar.toUpperCase();
    const nameRestChars = nameToString.slice(1, nameToString.length);
    const nameRestCharsLowerCase = nameRestChars.toLowerCase();
    if ( age >= 18 && age <= 65) {
        answer.innerHTML = "";
        answer.style.color = "#333";
        answer.innerHTML = `Hi, ${nameFirstCharUpperCase}${nameRestCharsLowerCase} you are good to go!`;
    } 
    else if (age > 0 && age < 18) {
        answer.innerHTML = " ";
        answer.style.color = "#333";
        answer.appendChild(document.createTextNode(`Hi, ${nameInput.value} you are too young to be here!`));
    } 
    else if (age > 65) {
        answer.innerHTML = " ";
        answer.style.color = "#333";
        answer.innerHTML = `Hi, ${nameFirstCharUpperCase}${nameRestCharsLowerCase} you are good to go!`;

    }
    else if (age == "") {
        answer.innerHTML = " ";
        setTimeout(function() {answer.innerHTML = " ";}, 3000);
        answer.style.color = "red";
        answer.appendChild(document.createTextNode(`enter corect age`));
    }
    else {
        answer.innerHTML = " ";
        setTimeout(function() {answer.innerHTML = " ";}, 3000);
        answer.style.color = "red";
        answer.appendChild(document.createTextNode("enter corect age"));
    }

    setTimeout(function() {   
        nameInput.value = " ";
        ageInput.value = " ";
    }, 500);
};

btn.addEventListener("click", colcAge);
nameInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        colcAge();
    }
});
ageInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        colcAge();
    }
});
