
        
function showHome()
{
    /*
        loop through all creatures
        
        if creature lives on land, background color green
        if creature lives in water, blue
        if creature lives in air, yellow
        
        alert("showHome()");
    */
    let creatures = document.querySelectorAll(".creature");
    for (let i=0; i<creatures.length; i++) {

      if (creatures[i].dataset.home === "land") {
        creatures[i].style.backgroundColor = "green";
      }
      else if (creatures[i].dataset.home === "water") {
        creatures[i].style.backgroundColor = "blue";
      }
      else if (creatures[i].dataset.home === "air") {
        creatures[i].style.backgroundColor = "yellow";
      }
    }
}//end showHome()


function showType()
{
    /*
    loop through all creatures
    
    if creature is an animal, border color solid red
    if creature is an insect, border color is dashed orange
    alert("showType()");
    */
    let creatures = document.querySelectorAll(".creature");
    for (let i=0; i<creatures.length; i++) {

      if (creatures[i].dataset.type === "animal") {
        creatures[i].style.border = "2px solid red";
      }
      else if (creatures[i].dataset.type === "insect") {
        creatures[i].style.border = "2px dashed orange";
      }
    }
}//end showType()


function clearAll()
{
    /*
    loop through all creatures
    
    clear border back to 1px solid black
    clear background color to white
        
    alert("clearAll()");
    */

    let creatures = document.querySelectorAll(".creature");

    for (let i=0; i<creatures.length; i++) {
        creatures[i].style.backgroundColor = "white";
        creatures[i].style.border = "2px solid black";
    }
}//end clearAll()

const button = document
