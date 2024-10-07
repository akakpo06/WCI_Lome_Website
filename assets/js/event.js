/* Handling the event modal toggling and filling it with the right data from dataJS 
Then Sorting the different events from dataJs to determine the upcoming one
*/

// getting the schedule modal tag from HTML
let card_modal = document.getElementById("schedule_modal");
let closer 


 //getting all the schedule_items
let schedule_items = document.querySelectorAll(".schedule_item")

schedule_items.forEach(schedule_item  =>{
    schedule_item.addEventListener("click", ()=>{

        // get the info to retrieve event data from base
        let data = schedule_item.getAttribute("data")
            let list = document.createElement("ul");

            // checking if the event is in the provided data
        if (data !== "" & events[data] !== undefined) {
            card_modal.style.display = "flex"


            // creating and inserting different information and tags
            let image = document.getElementById("event_image");
            image.setAttribute("src",events[data][0]);

            let title = document.getElementById("title");
            title.textContent = events[data][1];

            let text = document.getElementById("description_text");
            text.textContent = events[data][2];

            let items_title = document.getElementById("items_title");
            items_title.textContent = events[data][3][0];

            // creating a fragment for the features/speakers/starring list
            let fragment = document.createDocumentFragment();


            let list_items = events[data][3]

            // Setting the event Features list
            for (let i = 1; i < list_items.length; i++) {
                let list_item = document.createElement("li");
                list_item.textContent = events[data][3][i];
                list.appendChild(list_item);
            }

            fragment.appendChild(list)
            let items_list = document.getElementById("items_list");
            items_list.appendChild(fragment)


            let event_date = document.getElementById("event_date");
            event_date.textContent = events[data][4];

            let event_time = document.getElementById("event_time");
            event_time.textContent = events[data][5];
        }
        else{
            console.log("data attribute undefined on trigger")
            card_modal.style.display = "none"

        }

        // Handling modal closing
    closer = document.getElementById("closer");
    closer.addEventListener("click", () => {
        
        // removing the previuosly created list to avoid stacking the next lists on it
        list.remove();
        
        card_modal.style.display = "none"
    })
    console.log("gfddkzh")
    })
})

// function upcoming_Events_Handler(data) {
//     let ref_date = new Date()
//     let upcoming_Event_Date = new Date()
//     let Up_Ev_box = document.getElementById("Up_Ev_box");
//     let Up_Ev_img = document.getElementById("Up_Ev_img");
//     let Up_Ev_name = document.getElementById("Up_Ev_name");

//     for (let i = 0; i < events.length; i++) {
//         console.log(events[1])

//         let test_date = new Date(events[i][6])

//         if (i === 0 ) {
//             upcoming_Event_Date = test_date
//         }
//         else{
//             if (test_date > ref_date && test_date < upcoming_Event_Date) {
//                 Up_Ev_box.setAttribute("data", )
//             }
//         }

//     }

//     console.log(ref_date)

//     console.log(test_date)

//     console.log(test_date>ref_date)
// }

// upcoming_Events_Handler(events)
// function pour gérer les upcoming events 
/*
Creer une variable ref_date initiée sur la date courante
Mapper les données du tableau events en récupérant pour chaque event le fomat de date au events[data][6] 
avce la classe date générer des dates que l'on peut comparer
pour chaque event comparer sa date avec la ref date


*/