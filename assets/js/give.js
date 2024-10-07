/* Handling the giving information modal toggling and filling it with the right data from dataJS 
*/
// getting the giving info displayer tag from HTML
let card_modal = document.getElementById("giving_ways_modal");
let closer 


 //getting all the schedule_items
let giving_ways = document.querySelectorAll(".giving_way")

giving_ways.forEach(giving_way  =>{
    giving_way.addEventListener("click", ()=>{
        // get the info to retrieve event data from base
        let data = giving_way.getAttribute("data")
            let list = document.createElement("ul");
        if (data !== "" & giving_ways_data[data] !== undefined) {
            card_modal.style.display = "flex"


            // creating and inserting different information and tags
            let image = document.getElementById("giving_way_image");
            image.setAttribute("src",giving_ways_data[data][0]);

            let title = document.getElementById("title");
            title.textContent = giving_ways_data[data][1];

            // creating a fragment for the giving infos list
            let fragment = document.createDocumentFragment();


            let list_items = giving_ways_data[data][2]

            for (let i = 0; i < list_items.length; i++) {
                let list_item = document.createElement("li");
                list_item.innerHTML = giving_ways_data[data][2][i];
                list.appendChild(list_item);
            }

            // Setting the giving infos list
            fragment.appendChild(list)
            let items_list = document.getElementById("items_list");
            items_list.appendChild(fragment)


        }
        else{
            console.log("data attribute undefined on trigger")
            card_modal.style.display = "none"

        }

        // Handling modal closing
    closer = document.getElementById("closer");
    closer.addEventListener("click", () => {
        list.remove();
        
        card_modal.style.display = "none"
    })
    })
})
