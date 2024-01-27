import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyAKxH2m_Bp2mkAhrf4okuc-5n7HFqe04ek",
    authDomain: "sajjad-firebase.firebaseapp.com",
    projectId: "sajjad-firebase",
    storageBucket: "sajjad-firebase.appspot.com",
    messagingSenderId: "657810945804",
    appId: "1:657810945804:web:0306ba85205139c9fabb29",
    measurementId: "G-6DY02PFQL7"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

let save_button = document.getElementById("save_btn");
let input_app = document.getElementById("input_app");
let ul_list = document.getElementById("li_list");
let clear_button = document.getElementById("clearall")
clear_button.style.display = "none";

save_button.addEventListener('click', function () {
    let li_list = document.createElement("li");
    let input_app_value = input_app.value;

    if (input_app_value.trim()) {
        li_list.innerHTML = `
        <span>${input_app_value}</span><br>
        <div class="icons_setting">
        <i class="fas fa-pen"></i>
        <i class="material-icons delete-icon">delete</i></div>`;
        
        ul_list.appendChild(li_list);
        li_list.classList.add("li");

        clear_button.style.display = "block";



        let deleteIcon = li_list.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function () {
            ul_list.removeChild(li_list);
            
        });

        let editIcon = li_list.querySelector('.fa-pen');
        editIcon.addEventListener('click', function () {
            let listItemText = li_list.querySelector('span').textContent;
            input_app.value = listItemText;
            ul_list.removeChild(li_list);
            save_button.innerText = "Edit"
        });
        save_button.innerText = "Save";

    } else {
        alert("Please Input Todo");
    }
    input_app.value = "";
}
)
clear_button.addEventListener("click" , function()
 {
    if (ul_list.children.length > 0) {
        ul_list.innerHTML = "";
        clear_button.style.display = "none";
    }else{}
    clear_button.style.display = "none";
    
}
)


const addDatainfirebase = async () => {
    var currentDate = new Date()
    try {
        const docRef = await addDoc(collection(db, "Todo_app"), {
            data: input_app.value,
            date: currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate(),
            time: currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()

        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

save_button.addEventListener("click", addDatainfirebase)
