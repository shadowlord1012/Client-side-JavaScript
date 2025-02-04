// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var nounOneArray = ["The turkey","Mom","Dad","The dog","My Teacher","The Cat"];
var verbOneArray = ["sat on","ate","danced with","saw","doesn't like","kissed"];
var adjectiveArray = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var nounTwoArray = ["a goat","monkey","fish","cow","frog","bug","worm"];
var settingArray = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];
// Constants for main button query selectors

var nounButtonOne = document.getElementById("noun1");
var verbButton = document.getElementById("verb");
var nounButtonTwo = document.getElementById("noun2");
var adjectiveButton = document.getElementById("adjective");
var settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors

var nounOneLabel = document.getElementById("choosenNoun1");
var verbLabel = document.getElementById("choosenVerb");
var adjectiveLabel = document.getElementById("choosenAdjective");
var nounTwoLabel = document.getElementById("choosenNoun2");
var settingLabel = document.getElementById("choosenSetting");

// Constants for final buttons and p tags

var playbackButton = document.getElementById("playback");
var randomButton = document.getElementById("random");
var finalStory = document.getElementById("story");
var resetButton = document.getElementById("reset");

// Variables for pre-defined arrays

var story;
var randomStory = story;

// Variables for count to grab array elements

//defaulted them to -1
var nounOneCount = -1;
var verbCount = -1;
var adjectiveCount = -1;
var nounTwoCount = -1;
var settingCount = -1;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {

    //increases the count
    nounOneCount++;

    //reset counter if its equal to the length of the string
    if(nounOneCount > nounOneArray.length - 1)
        nounOneCount = 0;

    //Sets the label content
    nounOneLabel.textContent = nounOneArray[nounOneCount];
    nounOneLabel.style.visibility = "visible";
    document.body.style.backgroundColor = "rgba(47,28,45)";
    document.body.style.visibility = "visible";
}

function verb_on_click() {
    
    //increases the count
    verbCount++;

    //reset counter if its equal to the length of the string
    if(verbCount >= verbOneArray.length)
        verbCount = 0;

    //Sets the label content
    verbLabel.textContent = verbOneArray[verbCount];
    verbLabel.style.visibility = "visible";
    document.body.style.backgroundColor = "rgba(28,64,80)";
    document.body.style.visibility = "visible";
}

function adjective_on_click() {
    //increases the count
    adjectiveCount++;

    //reset counter if its equal to the length of the string
    if(adjectiveCount >= adjectiveArray.length)
        adjectiveCount = 0;

    //Sets the label content
    adjectiveLabel.textContent = adjectiveArray[adjectiveCount];
    adjectiveLabel.style.visibility = "visible";    
    document.body.style.backgroundColor = "rgba(50,65,20)";
    document.body.style.visibility = "visible";
}

function noun2_on_click() {
    
    //increases the count
    nounTwoCount++;

    //reset counter if its equal to the length of the string
    if(nounTwoCount >= nounTwoArray.length)
        nounTwoCount = 0;

    //Sets the label content
    nounTwoLabel.textContent = nounTwoArray[nounTwoCount];
    nounTwoLabel.style.visibility = "visible";
    document.body.style.backgroundColor = "rgba(81,51,18)";
    document.body.style.visibility = "visible";
}

function setting_on_click() {
    
    //increaase the counter
    settingCount++;

    //reset counter if its equal to the length of the string
    if(settingCount >= settingArray.length)
        settingCount = 0;

    // variable to get array element and displaying it

    settingLabel.textContent = settingArray[settingCount];
    settingLabel.style.visibility = "visible";
    document.body.style.backgroundColor = "rgba(90,57,73)";
    document.body.style.visibility = "visible";
}

// concatenate the user story and display
function playback_on_click() {

    //Will only display the story if all buttons have been clicked
    if(nounOneCount == -1 || verbCount == -1 || adjectiveCount == -1|| nounTwoCount == -1 || settingCount == -1)
        story = "Not enough values clicked. Please click all buttons first";
    else
        story = nounOneArray[nounOneCount]+" "+verbOneArray[verbCount]+" "+ adjectiveArray[adjectiveCount]+" "+nounTwoArray[nounTwoCount]+" "+settingArray[settingCount];
    
    finalStory.textContent = story;
    finalStory.style.visibility = "visible";

    document.getElementById("studentId").textContent = "Mike Kipp Student# 200609745";
    document.body.style.backgroundColor = "rgba(9,43,29)";
    document.body.style.visibility = "visible";
}

// function from lab 1
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    //gets random values from each array
    story = randomValueFromArray(nounOneArray)+" "+randomValueFromArray(verbOneArray)+" "+ randomValueFromArray(adjectiveArray)+" "
    +randomValueFromArray(nounTwoArray)+" "+randomValueFromArray(settingArray);
    
    //Sets the contents of the story p on page
    finalStory.textContent = story;
    finalStory.style.visibility = "visible";
    document.body.style.backgroundColor = "rgba(63,12,5)";
    document.body.style.visibility = "visible";
}

function reset_story(){

    //resets all the values
    story = "";

    //labels
    nounOneLabel.textContent = "";
    verbLabel.textContent = "";
    adjectiveLabel.textContent = "";
    nounTwoLabel.textContent = "";
    settingLabel.textContent = "";
    finalStory.textContent = "";
    nounOneLabel.style.visibility = "visible";
    verbLabel.style.visibility = "visible";
    adjectiveLabel.style.visibility = "visible";
    nounTwoLabel.style.visibility = "visible";
    settingLabel.style.visibility = "visible";
    finalStory.style.visibility = "visible";

    //button counts
    nounOneCount = -1;
    nounTwoCount = -1;
    verbCount = -1;
    adjectiveCount = -1;
    settingCount = -1;
    
    document.body.style.backgroundColor = "#cca700";
    document.body.style.visibility = "visible";
}

/* Event Listeners
-------------------------------------------------- */

nounButtonOne.addEventListener("click",noun1_on_click);
verbButton.addEventListener("click",verb_on_click);
adjectiveButton.addEventListener("click",adjective_on_click);
nounButtonTwo.addEventListener("click",noun2_on_click);
settingButton.addEventListener("click",setting_on_click);
playbackButton.addEventListener("click",playback_on_click);
randomButton.addEventListener("click",random_on_click);
resetButton.addEventListener("click",reset_story);
