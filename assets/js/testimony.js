/* Handling the pillar modal toggling and filling it with the right data from dataJS */

// retireving data from Google Drive
async function getStrikingTestimonies() {
    
    const scriptUrl = "https://script.google.com/macros/s/AKfycbynPbUiZ4xfPbfrYRxIw3ZhUBEhKySsuGeS3AjW3LLKGDMMTFDo2jTJDbRboUi73Yd9jA/exec"
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

    let result = await getStrikingTestimonies()
    let testimonies = result.data


    // getting modal container from HTML
    let card_modal = document.getElementById("testimony_modal");
    
    let bars_container = document.getElementById("testimony-bars-container")
    
    // setting the Closer variable for later use
    let closer 
    
    //retrieving and listing testimonies
    let bar
    let bar_title
    let bar_text
    let bar_title_span
    let bar_text_span
    let fragment = document.createDocumentFragment()
    
    
    for (let i = 0; i < testimonies.length-1; i++) {
        
        const testimony = testimonies [i];

        bar_title = document.createElement("div")
        bar_title.setAttribute("class", "bar_title")
    
        bar_title_span = document.createElement("span")
        bar_title_span.textContent = testimony[3]

        bar_text = document.createElement("div")
        bar_text.setAttribute("class", "bar_text")
    
        bar_text_span = document.createElement("span")
        bar_text_span.textContent = testimony[4]
    
        bar = document.createElement("div")
        bar.setAttribute("class", "testimony-bar")
        bar.setAttribute("data", i)
        
        bar_title.appendChild(bar_title_span)
        bar_text.appendChild(bar_text_span)
        bar.appendChild(bar_title)
        bar.appendChild(bar_text)
    
        fragment.appendChild(bar)
    
        // bar = ""
        // bar_span = ""
    
        
    }
    console.log(testimonies)
    
    bars_container.appendChild(fragment)
    
    
     //getting all the cards
    let bars = document.querySelectorAll(".testimony-bar")
    
    bars.forEach(bar  =>{
        bar.addEventListener("click", ()=>{
            // getting the pillar name from the card through data attribute
            let data = bar.getAttribute("data")
    
            // Showing the pillar modal
            card_modal.style.display = "flex"
            document.body.style.position = 'fixed'
    
            // getting the title and text container from the HTML
            // adding the title and the body text to the modal
            let title = document.getElementById("modal_title")
            title.textContent = testimonies[data][3]
            let text = document.getElementById("modal_text")
            
            text.innerHTML = testimonies[data][4]
    
            let footer = document.getElementById("modal_footer")
            footer.textContent = testimonies[data][1] + " " + testimonies[data][0]
    
            // getting the closer tag from HTML
            closer = document.getElementById("closer");
    
            // Setting an event listener on the closer tag for open and close toggling
            closer.addEventListener("click", () => {
                card_modal.style.display = "none"
                document.body.style.position = ''
            })
        })
    })
    
    
}

updateStrikingTestimonies()