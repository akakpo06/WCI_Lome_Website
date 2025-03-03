
// getting the form from the HTML
const form = document.forms['form']// Handling form submission
form.addEventListener('submit', e => {

  
  // prevent form default submission behaviour 
 e.preventDefault()

/* Sending new converts and new comers informations  */
let new_status = document.getElementById("new_status").value

// getting the different inputs values
let gender = document.getElementById("gender").value
let marital_status = document.getElementById("marital_status").value
let surname = document.getElementById("surname").value
let name = document.getElementById("name").value
let address = document.getElementById("address").value
let email = document.getElementById("email").value
let contact = document.getElementById("contact").value
let prayer = document.getElementById("prayer").value




//  Checking if the inputs are filled
  if ((gender != "" & gender != undefined) 
    & (marital_status != "" & marital_status != undefined) 
    & (surname != "" & surname != undefined) 
    & (name != "" & name != undefined) 
    & (address != "" & address != undefined) 
    & (email != "" & email != undefined) 
    & (contact != "" & contact != undefined)
    ) 
    {
      
    

      // Envoi des données vers le fichier correspondant (New Covert / New Comer)
    if (new_status === "New Convert") {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyI2BBsLx2IkFusT0jxatw5v8a7JDw2piOxwKFjYoWGJEJZYZrbZIrN2H-hYu88qedfEQ/exec'

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))

    
    // resetting the form to empty the inputs
    form.reset();
    }
    
    else if (new_status === "New Comer") {

      // A remplacer par le lien deploy du script de new Comer
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzXzl-aOf_Cqj8L0qslpQS4cW9HCMBhbu3LV9799-1eO8kULwZuex20phsLaPPT6Yr7/exec'
  
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thank you! your form is submitted successfully." ))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))

      
    // resetting the form to empty the inputs
    form.reset();
    }
 }
 else {
  alert("please type informations before subbmitting")
  
  
 }

})






