/* Handling the pillar modal toggling and filling it with the right data from dataJS */

// getting modal container from HTML
let card_modal = document.getElementById("ministry_modal");
let modal_box = document.getElementById("modal-box");

// setting the Closer variable for later use
let closer 


 //getting all the cards
let cards = document.querySelectorAll(".card_link")

cards.forEach(card  =>{
    card.addEventListener("click", ()=>{
        // getting the pillar name from the card through data attribute
        let data = card.getAttribute("data")

        // Showing the pillar modal
        card_modal.style.display = "flex"
        modal_box.style.backgroundImage = `url(${ministries[data][2]})`

        // getting the title and text container from the HTML
        // adding the title and the body text to the modal
        let title = document.getElementById("ministry_modal_title")
        title.textContent = ministries[data][0]
        let text = document.getElementById("ministry_modal_text")
        
        text.innerHTML = ministries[data][1]






        // getting the closer tag from HTML
        closer = document.getElementById("closer");

        // Setting an event listener on the closer tag for open and close toggling
        closer.addEventListener("click", () => {
            card_modal.style.display = "none"
        })
    })
})
