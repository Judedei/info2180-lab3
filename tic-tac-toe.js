window.onload= displayBox;
var arrGrid = [[],[],[],[],[],[],[],[],[]];
console.log(arrGrid)
var x = "X";
var o = "O";
var firstPlayer = true;

function displayBox(gridboxes)
{
    var grid = document.getElementById("board").childNodes;
    grid.forEach(element => { element.className = "square";});
    gridxo= grid.forEach(element => element.addEventListener("click", addXO));
    
    function addXO(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);
        
        

    
        if (event.target !== el) {
            if (firstPlayer){
                event.target.innerHTML = x;
                firstPlayer = false;
                arrGrid[index] = x;
            }else{
                event.target.innerHTML = o;
                arrGrid[index] = o;
                firstPlayer = true;
            }
          
          
        }
    
      }
        //const listing = event.target;
        //listing.textContent =x; 
        
    };


    

