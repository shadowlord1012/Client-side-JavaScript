// constants for query selector
var customColorNumber = document.getElementById("customNumber");
var studentNumberTag = document.querySelector("#myStudentId");
var imageSelector = document.querySelector("#imageSelect");
var images = document.querySelector("#images");

var changeCustomColorButton = document.querySelector(".custColor");
var changeRandomColorButton = document.querySelector(".randColor");

//Image array
var imageArray = new Array("img1","img2","img3","img4","img5");

// function to change bg color from user input and add student id
function changeCustomColor() {
    
    studentNumberTag.textContent = "200609745";
    let numberValue = customColorNumber.value;
    colorToChangeto(numberValue);
}



// function to change bg color from random no.
function changeRandomColor() {
    colorToChangeto(Math.floor(Math.random() * 101));
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    for(var i = 0; i < imageArray.length;i++)
    {
        var currentOption = imageArray[i];
        var elem = document.createElement('option');
        elem.textContent = currentOption;
        elem.value = currentOption;
        imageSelector.appendChild(elem);
    }
}

//calls the list
addList();
// function to change image
function changeImage(e) {
    images.src = "img/"+ e.target.value + ".jpg";
}

// event listeners for on click event of buttons and select
changeCustomColorButton.addEventListener("click",changeCustomColor);
changeRandomColorButton.addEventListener("click",changeRandomColor);
// event listeners for on change event of select
imageSelector.addEventListener("change",(e) => changeImage(e));
//custom method to be used by both buttons
function colorToChangeto(colorValue){
    
    //console.log(colorValue); for debugging the color value
    //color changing else if statements
    if(colorValue >= 0 && colorValue < 20)
        {
            //change background color to green
             document.body.style.backgroundColor = "green";
        }
        else if(colorValue>=20 && colorValue < 40)
        {
            //Change background color to blue
             document.body.style.backgroundColor = "blue";
        }
        else if(colorValue >=40 && colorValue < 60)
        {
            //Change background color to orange
             document.body.style.backgroundColor = "orange";
        }
        else if(colorValue >= 60 && colorValue < 80)
        {
            //change background color to purple
             document.body.style.backgroundColor = "purple";
        }
        else if (colorValue >=80 && colorValue < 100)
        {
            //Change background color to yellow
             document.body.style.backgroundColor = "yellow";
        }
        else
        {
            //Change background to red
             document.body.style.backgroundColor = "red";
        }
    document.body.style.visibility = "visible";
}