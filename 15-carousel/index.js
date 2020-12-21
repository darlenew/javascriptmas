// javascript
function nextHandler() {
    console.log("clicked")

    let nextButton = document.getElementsByClassName("next")[0]
    console.log(nextButton)    
    
    let cards = document.getElementsByClassName("card")
    console.log(cards.length)
    
    let currentIndex = -1;
    for (let i=0; i < cards.length; i++) {
        if (cards[i].classList.contains("current")) {
            console.log(cards[i])
            currentIndex = i
        }
    }
    
    if (currentIndex < cards.length) {
        cards[currentIndex].classList.remove("current")
        cards[currentIndex+1].classList.add("current")
        
        let gallery = document.getElementsByClassName("gallery")[0]
        console.log(window.getComputedStyle(gallery, null).getPropertyValue("transform"));
        let amount = -((currentIndex + 1) * 220);
        let transform = `translateX(${amount}px)`;
        gallery.style.transform = transform;
        console.log(transform)    
    }
}

let nextButton = document.getElementsByClassName("next")[0]
nextButton.addEventListener("click", nextHandler)   
