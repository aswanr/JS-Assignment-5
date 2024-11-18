// 1)Create a button and div using JS, when clicked on the button your basic details should be shown in the div. 
// The static html file should only contain the basic HTML structure, no div/buttons .

const condainer = document.createElement('div');
condainer.id = "cond-1";
condainer.style.width = '250px';
condainer.style.height = '250px';
condainer.style.backgroundColor = 'red';
document.body.appendChild(condainer);
const button1 = document.createElement('button');
button1.id = "btn-1";
button1.innerText = "Just Click"
document.body.appendChild(button1);

const btnone = document.getElementById("btn-1");
let condain = document.getElementById("cond-1");
condain.innerHTML="";
btnone.addEventListener('click', namechange);
function namechange() {
    if (condain.innerHTML == "ASWAN-R") {
        condain.innerHTML = "";
    } else {
        condain.textContent = "ASWAN-R";
    }
}

// 2)Consider an array with name of 5 fruits, map this array and create five checkboxes with 
// their corresponding names. In a div show the fruit names which are checked.

const fruits = ['Apple', 'Banana', 'Mundiri', 'Mango', 'Orange'];
const displayDiv = document.createElement('div');
document.body.appendChild(displayDiv);
let z = [];
fruits.forEach(element => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    label.htmlFor = element;
    label.appendChild(document.createTextNode(element));
    checkbox.type = 'checkbox';
    checkbox.name = element;
    checkbox.value = element;
    document.body.appendChild(checkbox);
    document.body.appendChild(label);
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            z.push(checkbox.value);
        }
        else {
            z=z.filter(element => element !== checkbox.value);
        }
        displayDiv.innerHTML = `${z}`;
    });
});
// 3)Create a toggle button, console the values as either true/ false when toggled.
function toggle() {
    let z = document.getElementById('toggle1');
    const y = document.getElementById('toggle');
    if (z.value == "True") {
        z.value = "false";
        y.style.backgroundColor = "yellow"
        console.log(z.value);
    }
    else {
        z.value = "True"
        y.style.backgroundColor = "white"
        console.log(z.value);
    }
}

// 4)Create an image slider without referring online codes, completely by yourself.

const images = document.querySelectorAll('.sliders');
let counter = 0;
images.forEach((element, index) => {
    element.style.left = `${index * 100}%`;
})
function left() {
    counter--
    slidingimgleft();
}
function right() {
    counter++
    slidingimg();
}
function slidingimg() { 
    images.forEach(element => { 
    if (element.style.transform === `translateX(-300%)`) { 
         counter=0;
        element.style.transform = `translatex(${counter * 100}%)`; 
    } 
    else { 
        element.style.transform = `translateX(-${counter * 100}%)`         
    } 
});
} 
function slidingimgleft(){
    images.forEach(element => { 
    if (element.style.transform === `translateX(-300%)`) { 
        counter=0;
        element.style.transform = `translatex(${counter * 100}%)`; 
    } 
    else { 
        element.style.transform = `translateX(${counter * 100}%)` ;       
    } 
})
}
