document.getAnimations("mapTable")



const scriptURL = 'https://script.google.com/macros/s/AKfycbznYm4ZHzdIRg-HbOzOrWeGITlhSjNhkH87KX31ByeDVCxevZSq0evjDMJi372MEQoH/exec?username=jsmith&age=21'
    

 fetch(scriptURL)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then((data) => {
    data["data"].forEach(cell => {
        
    let tr = document.createElement("tr")
    let td = document.createElement("td")

    

    });
    console.log(data["data"])})
.catch(error => console.error('Error!', error.message))