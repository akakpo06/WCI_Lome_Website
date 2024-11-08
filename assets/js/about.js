// let pillars = document.getElementById("pillars");

// let cardName = document.createElement("div");
// cardName.setAttribute("class") = "card_name";

// let cardIcon = document.createElement("div");
// cardName.setAttribute("class") = "card_icon";

// let icon = document.createElement("i")
// cardName.setAttribute("class") = "";

// let card = document.createElement("div")
// cardName.setAttribute("class") = "card";

// cardIcon.appendChild(icon);
// card.appendChild(cardIcon);
// card.appendChild(cardName);

// pillars.appendChild(card);



/* Handling the pillar modal toggling and filling it with the right data from dataJS */

// getting modal container from HTML
let card_modal = document.getElementById("pillar_modal");


// setting the Closer variable for later use
let closer 


 //getting all the cards
let cards = document.querySelectorAll(".card")

cards.forEach(card  =>{
    card.addEventListener("click", ()=>{
        // getting the pillar name from the card through data attribute
        let data = card.getAttribute("data")

        // Showing the pillar modal
        card_modal.style.display = "flex"
        document.body.style.position = 'fixed'

        // getting the title and text container from the HTML
        // adding the title and the body text to the modal
        let title = document.getElementById("pillar_modal_title")
        title.textContent = pillars[data][0]
        let text = document.getElementById("pillar_modal_text")
        
        text.innerHTML = pillars[data][1]






        // getting the closer tag from HTML
        closer = document.getElementById("closer");

        // Setting an event listener on the closer tag for open and close toggling
        closer.addEventListener("click", () => {
            card_modal.style.display = "none"
            document.body.style.position = ''
        })
    })
})
