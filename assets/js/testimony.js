/* Handling the pillar modal toggling and filling it with the right data from dataJS */

// retireving data from Google Drive
async function getStrikingTestimonies() {
    
    const scriptUrl = "https://script.google.com/macros/s/AKfycby1ZEe-9EbkMBHndCc4cz0Y3PbCsbxI_sclvY9apba_AKvsmw21IFIxHqkZ9qfPKS4B3g/exec"
    let data = {}
    try {
        const response = await fetch(scriptUrl);
        data = await response.json();
    } 
    catch (error) {
    console.error(error);
    }
      return data
}

async function updateStrikingTestimonies() {

    let testimonies = await getStrikingTestimonies()
    // getting modal container from HTML
    let card_modal = document.getElementById("testimony_modal");
    
    let bars_container = document.getElementById("testimony-bars-container")
    
    // setting the Closer variable for later use
    let closer 
    
    //retrieving and listing testimonies
    let bar
    let bar_span
    let fragment = document.createDocumentFragment()
    
    
    for (let i = 0; i < testimonies.length; i++) {
        
        const testimony = testimonies [i];
    
        bar_span = document.createElement("span")
        bar_span.textContent = testimony[1]
    
        bar = document.createElement("div")
        bar.setAttribute("class", "testimony-bar")
        bar.setAttribute("data", i)
        
        bar.appendChild(bar_span)
    
        fragment.appendChild(bar)
    
        // bar = ""
        // bar_span = ""
    
        
    }
    
    bars_container.appendChild(fragment)
    
    
     //getting all the cards
    let bars = document.querySelectorAll(".testimony-bar")
    
    bars.forEach(bar  =>{
        bar.addEventListener("click", ()=>{
            // getting the pillar name from the card through data attribute
            let data = bar.getAttribute("data")
    
            // Showing the pillar modal
            card_modal.style.display = "flex"
    
            // getting the title and text container from the HTML
            // adding the title and the body text to the modal
            let title = document.getElementById("pillar_modal_title")
            title.textContent = testimonies[data][0]
            let text = document.getElementById("pillar_modal_text")
            
            text.innerHTML = testimonies[data][1]
    
    
            // getting the closer tag from HTML
            closer = document.getElementById("closer");
    
            // Setting an event listener on the closer tag for open and close toggling
            closer.addEventListener("click", () => {
                card_modal.style.display = "none"
            })
        })
    })
    
    
}

updateStrikingTestimonies()