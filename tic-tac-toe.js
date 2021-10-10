window.onload= displayBox;
var arrGrid = [[],[],[],[],[],[],[],[],[]];
console.log(arrGrid)
var x = "X";
var o = "O";
countx = 0;
counto = 0;
var firstPlayer = true;

function displayBox(gridboxes)
{
    var grid = document.getElementById("board").childNodes;
    grid.forEach(element => { element.className = "square";});
    gridxo= grid.forEach(element => element.addEventListener("click", addXO));
    
    grid0= grid.forEach(element => element.addEventListener("mouseover", hoverFunction));
    grid0= grid.forEach(element => element.addEventListener("mouseout", outFunction));

    btn = document.querySelector('button');



    var statusGet = document.getElementById("status");
    
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
                    countx+=1
                    firstPlayer = false;
                    arrGrid[index] = x;
                    function changeColor(event) {
                        if (event.target.innerHTML == "X" && event.target.classList.contains("X")== false); {
                            event.target.classList.add("X");
                            //console.log(event.target.classList.contains("X"));
                        }                     
                    }
                    document.querySelector("div").onclick = changeColor;

                    //if-statements to validate winners.
                    if (arrGrid[0] == "X" && arrGrid[1] == "X" && arrGrid[2] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[0] == "X" && arrGrid[3] == "X" && arrGrid[6] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[3] == "X" && arrGrid[4] == "X" && arrGrid[5] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[6] == "X" && arrGrid[7] == "X" && arrGrid[8] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[1] == "X" && arrGrid[4] == "X" && arrGrid[7] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[2] == "X" && arrGrid[5] == "X" && arrGrid[8] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[0] == "X" && arrGrid[4] == "X" && arrGrid[8] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[6] == "X" && arrGrid[4] == "X" && arrGrid[2] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }
                    btn.addEventListener("click", reset);
                        function reset(e){
                            arrGrid= [[],[],[],[],[],[],[],[],[]];
                            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
                            event.target.innerHTML="";
                            firstPlayer = true;
                            statusGet.classList.remove("you-won");
                            statusGet.classList.remove("before");
                            statusGet.classList.remove("after");
                        }
                    //O's Start HERE
                    
                    
                } //end of 
            }else{
                if (arrGrid[index]==""){
                    event.target.innerHTML = o;
                    counto += 1;
                    arrGrid[index] = o;
                    firstPlayer = true;
                    function changeColor(event) {
                        if (event.target.innerHTML == "O" && event.target.classList.contains("O")== false); {
                            event.target.classList.add("O");
                        }
                        
                      }
                      document.querySelector("div").onclick = changeColor;
                      btn.addEventListener("click", reset);

                      function reset(e){
                          arrGrid= [[],[],[],[],[],[],[],[],[]];
                          document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
                          event.target.innerHTML="";
                          firstPlayer = true;
                          statusGet.classList.remove("you-won");
                          statusGet.classList.remove("before");
                          statusGet.classList.add("after");
                          
                      }
                    if (arrGrid[0] == "O" && arrGrid[1] == "O" && arrGrid[2] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[0] == "O" && arrGrid[3] == "O" && arrGrid[6] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[3] == "O" && arrGrid[4] == "O" && arrGrid[5] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[6] == "O" && arrGrid[7] == "O" && arrGrid[8] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[1] == "O" && arrGrid[4] == "O" && arrGrid[7] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[2] == "O" && arrGrid[5] == "O" && arrGrid[8] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[0] == "O" && arrGrid[4] == "O" && arrGrid[8] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[6] == "O" && arrGrid[4] == "O" && arrGrid[2] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");      
                }
                }
            } 
        }//end of first if.
       
      }
            

            
        };
    


    

