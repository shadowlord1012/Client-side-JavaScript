//variables 

let pizzaSize = document.getElementById("sizes");
let cheeseAmount = document.getElementById("Amount");
let suaceType = document.getElementById("sauceType");
let pizzaToppings = document.getElementsByTagName('input');
let orderBtn = document.querySelector('.orderbtn');
let resetBtn = document.querySelector('.resetbtn');

//basic pizza object
var pizzaobj = new basicPizza("personal","thin","tomatoe","","");


//Basic pizza Object
function basicPizza(size, crust, sauce, cheese, toppings){
    //Creates the pizza object
    var pizza = new Object();
    //Sets the variables
    pizza.Size = size;
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.Toppings = toppings;
    pizza.ExtraCheese = "";

    //To display the pizza information by text
    pizza.description = function (){

        //output to a console or a html tag
        return `Your ${this.Size} Pizza has a ${this.crust} crust with ${this.sauce} sauce with the following toppings
            ${this.Toppings} with ${this.ExtraCheese} ${this.cheese} chesse on top`;
    }
    //returns the obj
    return pizza;
}

function makePizza() {
    //Sets the size of the pizza
    pizzaobj.Size = document.getElementById("sizes").options[document.getElementById("sizes").selectedIndex].text;

    //sets the sauce type
    pizzaobj.sauce = document.getElementById("sauceType").options[document.getElementById("sauceType").selectedIndex].text;

    //sets if there is extra or double cheese
    pizzaobj.ExtraCheese = document.getElementById("Amount").options[document.getElementById("Amount").selectedIndex].text;

    //Gets all the checkboxes and adds them to the pizza object
    var cheeseChecked = false;
    for(var i = 0; i < pizzaToppings.length;i++)
        {
            if(pizzaToppings[i].type.toLocaleLowerCase() == "checkbox"){
                if(pizzaToppings[i].value == "ched" && pizzaToppings[i].checked && cheeseChecked == false){
                    pizzaobj.cheese = "Cheddar";
                    cheeseChecked = true;
                }
                else if(pizzaToppings[i].value == "moz" && pizzaToppings[i].checked&& cheeseChecked == false){
                    pizzaobj.cheese = "Mozzeralla";   
                    cheeseChecked = true;
                }
                else if(pizzaToppings[i].checked){
                    pizzaobj.Toppings += pizzaToppings[i].value;
                    if(i+1 < pizzaToppings.length)
                        pizzaobj.Toppings += ", ";
                } 
            }
        }  
    
        
}

//displays the information on the screen
function displayInformation(){

    //makes the pizza if not the default will be generated
    makePizza();

    //displays the information
    let displayInfo = document.querySelector('#informationDisplay');
    let p = document.createElement("p");

    //adds the student informatoin
    document.getElementById("studentInformation").textContent = "Mike Kipp 200609745";
    p.textContent = pizzaobj.description();

    displayInfo.appendChild(p);

    //resets for the next pizza
    pizzaobj = new basicPizza("personal","thin","tomatoe","",""); 
}

function reset(){
    for(var i = 0; i < pizzaToppings.length;i++)
    {
        pizzaToppings[i].checked = false;
    }
}

//Event listeners
orderBtn.addEventListener("click",displayInformation);
resetBtn.addEventListener("click",reset);
