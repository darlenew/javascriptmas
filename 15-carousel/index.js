// javascript
function nextHandler() {
    let nextButton = document.getElementsByClassName("next")[0]
    let cards = document.getElementsByClassName("card")
    
    let currentIndex = -1;
    for (let i=0; i < cards.length; i++) {
        if (cards[i].classList.contains("current")) {
            currentIndex = i
            break
        }
    }
    
    if (currentIndex < cards.length) {
        cards[currentIndex].classList.remove("current")
        cards[currentIndex+1].classList.add("current")
        
        let gallery = document.getElementsByClassName("gallery")[0]
        let amount = -((currentIndex + 1) * 220);
        let transform = `translateX(${amount}px)`;
        gallery.style.transform = transform;
    }
    
    // enable the previous button
    if (currentIndex == 0) {
        let prevButton = document.getElementsByClassName("previous")[0]
        prevButton.style.opacity = 1;
    }
    
    // clicking next brought us to the end
    if ((currentIndex + 2) == cards.length) {
        // hide the next button
        let nextButton = document.getElementsByClassName("next")[0]
        nextButton.style.opacity = .3;
    }    
}

function prevHandler() {
    let prevButton = document.getElementsByClassName("previous")[0]
    let cards = document.getElementsByClassName("card")
    
    // figure out which image we're currently viewing
    let currentIndex = -1;
    for (let i=0; i < cards.length; i++) {
        if (cards[i].classList.contains("current")) {
            currentIndex = i
            break
        }
    }
    
    // update the current image to the previous image
    if (currentIndex > 0) {
        cards[currentIndex].classList.remove("current")
        cards[currentIndex-1].classList.add("current")
        
        let gallery = document.getElementsByClassName("gallery")[0]
        let amount = -((currentIndex - 1) * 220);
        let transform = `translateX(${amount}px)`;
        gallery.style.transform = transform;
    }
    
    // enable the next button
    if (currentIndex == cards.length - 1) {
        let nextButton = document.getElementsByClassName("next")[0]
        nextButton.style.opacity = 1;
    }
    
    // clicking prev brought us to the start
    if ((currentIndex - 1) == 0) {
        // hide the prev button
        let prevButton = document.getElementsByClassName("previous")[0]
        prevButton.style.opacity = .3;
    }    
}

let nextButton = document.getElementsByClassName("next")[0]
nextButton.addEventListener("click", nextHandler)   

let prevButton = document.getElementsByClassName("previous")[0]
prevButton.addEventListener("click", prevHandler)   
