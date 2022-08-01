
let response;
let score = 80;
let machineActive = false;


let fail = score > 100 && score < 0
let almost = score >= 0 && score <= 19
let barely = score >= 20 && score <= 39
let nice = score >= 40 && score <= 69
let awesome = score >= 70 && score <= 89
let howTheHell = score >= 90 && score <= 100

switch (machineActive) {
    case "true":
        //my whole command here
        break;
case "false":
    response = "Machine is not working"
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
