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
    
    grid0= grid.forEach(element => element.addEventListener("mouseover", hoverFunction));
    grid0= grid.forEach(element => element.addEventListener("mouseout", outFunction));
    
    function hoverFunction(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);
        if (event.target !== el) {
            event.target.classList.toggle("hover", true);
        } 
    }

    function outFunction(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);
        if (event.target !== el) {
            event.target.classList.toggle("hover");
        } 
    }

    function addXO(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);    
        if (event.target !== el) {
            if (firstPlayer){
                if (arrGrid[index] == ""){
                    event.target.innerHTML = x;
                    firstPlayer = false;
                    arrGrid[index] = x;
                    function changeColor(event) {
                        if (event.target.innerHTML == "X" && event.target.classList.contains("X")== false); {
                            event.target.classList.add("X");
                            //console.log(event.target.classList.contains("X"));
                            
                        }                     
                    }
                    document.querySelector("div").onclick = changeColor;
                } 
            }else{
                if (arrGrid[index]==""){
                    event.target.innerHTML = o;
                    arrGrid[index] = o;
                    firstPlayer = true;
                    function changeColor(event) {
                        if (event.target.innerHTML == "O" && event.target.classList.contains("O")== false); {
                            event.target.classList.add("O");
                        }
                        
                      }
                      document.querySelector("div").onclick = changeColor;
                }
            } 
        }
       
      }
        //const listing = event.target;
        //listing.textContent =x; 
        
    };


    

