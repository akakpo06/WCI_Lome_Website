// Sendding user's prayer point to the Gsheet

// getting the form to later on retrieve data
let form = document.getElementById("form")

// Appscript link to join the Prayer request sheet in Gdrive
const scriptURL = 'https://script.google.com/macros/s/AKfycbzlYJEsE_BjGeolnHuDulGZuT1hgDdUBWoCoHY053HrSlbtOzG9XF7taXK6mqwrC9gECg/exec'


let request = document.getElementById("prayer_request")
let form_date = document.getElementById("date")

form.addEventListener('submit', e => {
  e.preventDefault()
  
  // Checking if the input is filled before submitting
  if(request.value != "" & request.value != undefined) {

    // creating a date and adding it to the form
    let date = new Date()
    form_date.value = date

    // posting the formdata to the Appscript web then handling the response then handling error
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your prayer is submitted successfully." ))
    // .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));

    // reset the form to empty the input
    form.reset();
  }
  else{
    // handling empty form submission
    alert("please type a prayer point before subbmitting")
  }
})









