
//constants and variables
var searchBtn = document.querySelector("#search");
var gameName = document.querySelector(".gameName");
var outputInformation = document.querySelector("#informationFound");
var errorOutput = document.querySelector("#error");
var student = document.querySelector("#studentInfo");

//Adds in event listeners for the button
searchBtn.addEventListener("click",getInformation);

//the basic URl for the fetch requests
var baseURL = "https://pokeapi.co/api/v2/pokemon/";

  async function getInformation()
  {
    //combines the input with the url
    let url = baseURL+gameName.value+'/';

    //fetches the information to the API
    fetch(url)
    .then(response =>{ return response.json();})
    .then(json => {displayInformation(json);
      errorOutput.textContent = "";
    })
    .catch(err => {errorOutput.textContent = "Invalid information";});

    //Adds in the student information
    student.textContent = "Mike Kipp - 200609745"
  }

  function displayInformation(json)
  {

    let article = document.createElement("article"); // creates the article element
    let h2 = document.createElement("h2"); //creates the h2 element
    let image = document.createElement("img"); //creates the image element
    let p1 = document.createElement("p"); //creates the p elemenet
    let list = document.createElement("ul");

    h2.textContent = json.name; //Name in which was searched
    image.setAttribute("src",json.sprites.front_default); //the default Image of the character
    
    let moves = json.moves; //Gets the moves list
    
    let gameVersion = document.getElementsByName('version'); //Gets the radio buttons
    let gameVersionValue; //What version is it from

    //returns the value of the radio buttons
    for(var x = 0; x <gameVersion.length;x++)
    {
      if(gameVersion[x].checked)
      {
        gameVersionValue = gameVersion[x].value;
      }
    }

    //goes through the whole list of moves
    for(let x = 0; x < moves.length;x++)
    {
      for(let y = 0; y < moves[x].version_group_details.length; y++)
      {
        //Only get the moves from that version that are learned at
          if(moves[x].version_group_details[y].version_group.name == gameVersionValue)
          {
            if(moves[x].version_group_details[y].level_learned_at > 0){
              let moveItem = document.createElement("li");
              moveItem.textContent = moves[x].move.name +" at level " +moves[x].version_group_details[y].level_learned_at;
              list.appendChild(moveItem); //List of all the moves-              
            }

           
          }
      }
    }

    //returns a not part of game if there is no entries in list
    if(list.getElementsByTagName("li").length == 0)
      {              
        let moveItem = document.createElement("li");
        moveItem.textContent = "Not Part of game version";
        list.appendChild(moveItem);
      }

    //Adds all the information to the article
    article.appendChild(h2);
    article.appendChild(image);
    article.appendChild(list);
    //article.appendChild(p1)

    outputInformation.appendChild(article);
  }

