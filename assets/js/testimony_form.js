//toggling testimony form
let form_button = document.getElementById("form_button")
let form_modal = document.getElementById("form_modal")
let form_closer

form_button.addEventListener("click", () => {

  
    form_modal.style.display = "flex"
    


    
// getting the form from the HTML
const form = document.forms['form']
// Handling form submission



form.addEventListener("submit", (e) => {
  // prevent form default submission behaviour 
 e.preventDefault()



// getting the different inputs values
let surname = document.getElementById("surname").value
let name = document.getElementById("name").value
let title = document.getElementById("title").value
let contact = document.getElementById("contact").value
let testimony = document.getElementById("testimony").value


console.log(surname + " " + name + " " + testimony)

//  Checking if the inputs are filled
  if ((surname != "" & surname != undefined) 
    & (name != "" & name != undefined)
    & (title != "" & title != undefined) 
    & (contact != "" & contact != undefined)
    & (testimony != "" & testimony != undefined)) {
      
    

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxXZSVJ_iilZ2wOldcGjfq72yUEvtcMfWKpLlqCN0OSSyipKuFX72zdWCNz0_NW44yZ1Q/exec'

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))

    
    // resetting the form to empty the inputs
    form.reset();
    }
  
 else {
  alert("please type informations before subbmitting")
 }

})




    // getting the closer tag from HTML
    form_closercloser = document.getElementById("form_closer");

    // Setting an event listener on the closer tag for open and close toggling
    form_closercloser.addEventListener("click", () => {
        form_modal.style.display = "none"
    })

})



