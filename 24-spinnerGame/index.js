//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    var i = 0;
    while (pushed == false) {
        console.log(i)
        await sleep(75) //Paste this wherever you need to sleep the incrimentor 
        i++;
        
        spinningElem.innerHTML = i;
        
        // wrap around back to zero 
        if (i == 100) {
            i = 0;
        }
    }
    stop(i); //Trigger this function when the STOP button has been pushed  
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); //display your result message here
    
    var lose = targetInt == i ? false : true
    if (lose) {
        const difference = Math.abs(targetInt - i);
        result.innerText = `Oh no, you lose! Off by ${difference}`
    } else {
        result.innerText = "Congratulations, you won!"
    }       
}


//main
setTargetInt();
spin()