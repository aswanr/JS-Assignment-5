// 1)Create a button and div using JS, when clicked on the button your basic details should be shown in the div. 
// The static html file should only contain the basic HTML structure, no div/buttons .
const condainer=document.createElement('div');
condainer.id="cond-1";
condainer.style.width='250px';
condainer.style.height='250px';
condainer.style.backgroundColor='red';
document.body.appendChild(condainer);

const button1=document.createElement('button');
button1.id="btn-1";
button1.innerText="Just Click"
button1.onclick=changes;
document.body.appendChild(button1);

function changes(){
    let condain=document.getElementById("cond-1");
    if(condain.style.display==="none"){
        condain.style.display="block";
        condain.innerHTML="My name is aswan";
    }
    else{
        condain.style.display="none";
    }
}

// 2)Consider an array with name of 5 fruits, map this array and create five checkboxes with 
// their corresponding names. In a div show the fruit names which are checked.

const fruits = ['Apple','Banana','Mundiri','Mango','Orange'];
const checkboxContainer = document.getElementById('checkboxContainer');
const displayDiv = document.getElementById('displayDiv');
var z= [0]
fruits.map(element=>{
    const checkbox=document.createElement('input');
    const label=document.createElement('label');
    label.htmlFor = element;
    label.appendChild(document.createTextNode(element));
    checkbox.type='checkbox';
    checkbox.name=element;
    checkbox.value = element;
    document.body.appendChild(checkbox);
    document.body.appendChild(label);
    checkbox.addEventListener('change',function(){
       if(checkbox.checked){
        condainer.innerHTML=checkbox.value;
       }
       else{
        condainer.innerHTML="";
       }
       
    })
})


// 3)Create a toggle button, console the values as either true/ false when toggled.
function toggle(){
    let z=document.getElementById('toggle1');
    const y=document.getElementById('toggle');
    if(z.value=="True"){
        z.value="false"
        y.style.backgroundColor="yellow"
        console.log(z.value)
    }
    else{
        z.value="True"
        y.style.backgroundColor="white"
        console.log(z.value);
    }
}

// 4)Create an image slider without referring online codes, completely by yourself.

const images = document.querySelectorAll('.sliders');
var counter = 0;
console.log(images);
images.forEach((element,index)=>{
    element.style.left=`${index * 100}%`;
})
function left(){
    counter--
    sildeingimg();
}
function right(){
    counter++
    sildeingimg();
}

function sildeingimg(){
    images.forEach(element=>{
        element.style.transform=`translateX(-${counter * 100}%)`;
    })  
}



