let input_app = document.getElementById("input_app");
let ul_list = document.getElementById("li_list");
let save_button = document.getElementById("save_btn");
let clear_button = document.getElementById("clearall")
clear_button.style.display = "none";
function add_items() {
    
    let li_list = document.createElement("li");
    let input_app_value = input_app.value;
    
    if (input_app_value.trim()) {
        li_list.innerHTML = `
        <span>${input_app_value}</span>
        <i class="fas fa-pen"></i>
        <i class="material-icons delete-icon">delete</i>`;
        ul_list.appendChild(li_list);
        li_list.classList.add("li");
        
        clear_button.style.display = "block";
    


        let deleteIcon = li_list.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function() {
            ul_list.removeChild(li_list);
        });

        let editIcon = li_list.querySelector('.fa-pen');
        editIcon.addEventListener('click', function() {
            let listItemText = li_list.querySelector('span').textContent;
            input_app.value = listItemText;
            ul_list.removeChild(li_list);
            save_button.innerText = "Edit" 
        });
        save_button.innerText = "Save";

    }else {
        alert("Please Input Todo");
      }
      input_app.value = "";
}


function clear_ALL()
{
   
    
        if (ul_list.children.length > 0) {
            ul_list.innerHTML = "";
        }
     
    
}
