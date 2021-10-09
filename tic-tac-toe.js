window.onload= displayBox;
function displayBox(gridboxes)
{
    var grid = document.getElementById("board").childNodes;
    grid.forEach(element => { element.className = "square";});
        
    };