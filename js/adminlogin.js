

// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
// You might also need these imports for database and firestore
import { getDatabase, ref, push, get, set } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";



const firebaseConfig = {
    apiKey: "AIzaSyDSysb2GGH_CDpi5zJfH5GxWEHy5UEuGrk",
    authDomain: "data-stores-3d173.firebaseapp.com",
    databaseURL: "https://data-stores-3d173-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "data-stores-3d173",
    storageBucket: "data-stores-3d173.firebasestorage.app",
    messagingSenderId: "659441376291",
    appId: "1:659441376291:web:bc901456b5a08c03156596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use the new modular functions to get database and firestore instances

const deliverydb = getDatabase(app);







const loginbtn = document.getElementsByClassName('loginbtn')[0]

loginbtn.addEventListener('click', () => {
    adminLogin()
  
})

function createToast(type, icon, title, text)
{
    const notification = document.getElementsByClassName('notification')[0];
    const div = document.createElement('div');
    div.innerHTML =  `
    <div class="Toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fas fa-close" onclick="(this.parentElement).remove()"></i>
            </div>
    `;
    notification.appendChild(div)
    div.timeOut = setTimeout(() => div.remove(),5000)

}






function adminLogin()
{
    
  
    const email = document.getElementById('email').value;
  
    const password = document.getElementById('password').value;

    get(ref(deliverydb,'admin')).then((result) => {
        const resultdata = result.val()


      if(email === resultdata.username && password === resultdata.password)
      {
       
        let type = "success"
        let icon = "fa-solid fa-circle-check";
        let title ="Success";
        let text = "Login Succeessfully"

        createToast(type, icon, title, text)
          setTimeout(() => {
            window.location.replace('../clientorder.html')
          },4000)
      }
      else if(email === "")
      {
        
         let type = "error";
        let icon = "fa-solid fa-circle-exclamation";
        let title ="Error";
        let text = "Email Empty"

        createToast(type, icon, title, text)
        
      }
      else if( password === "")
      {
          let type = "error";
        let icon = "fa-solid fa-circle-exclamation";
        let title ="Error";
        let text = "Password Empty"

        createToast(type, icon, title, text)
    
        
      }
       else
      {
          let type = "error";
        let icon = "fa-solid fa-circle-exclamation";
        let title ="Error";
        let text = "Email Or Password Wrong"

        createToast(type, icon, title, text)
        
      }



       
    











        
    }).catch((err) => {
        console.log(err);
        
    });



}



