// javascript
function nextHandler() {
    let nextButton = document.getElementsByClassName("next")[0]
    let cards = document.getElementsByClassName("card")
    
    let currentIndex = -1;
    for (let i=0; i < cards.length; i++) {
        if (cards[i].classList.contains("current")) {
            console.log(cards[i])
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
    console.log(currentIndex, cards.length)
    if ((currentIndex + 2) == cards.length) {
        console.log("we're at the end")
        // hide the next button
        let nextButton = document.getElementsByClassName("next")[0]
        nextButton.style.opacity = .3;
    }    
}

let nextButton = document.getElementsByClassName("next")[0]
nextButton.addEventListener("click", nextHandler)   
