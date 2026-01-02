// firebase

const firebaseConfig1 = {
    apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
    authDomain: "mahan-food-app.firebaseapp.com",
    databaseURL: "https://mahan-food-app-default-rtdb.firebaseio.com",
    projectId: "mahan-food-app",
    storageBucket: "mahan-food-app.firebasestorage.app",
    messagingSenderId: "33097873868",
    appId: "1:33097873868:web:a34866029150b96d274569",
    measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig1);

const firestore = firebase.firestore();
const db = firebase.database();



// li contenet redirect

const client = document.getElementsByTagName('li')[0]
const delviery = document.getElementsByTagName('li')[1]
const deliveryOrder = document.getElementsByTagName('li')[2]
const clientOrder = document.getElementsByTagName('li')[3]
const analysis = document.getElementsByTagName('li')[4]

const adminLogout = document.getElementsByClassName('login-portal')[0];

client.addEventListener('click', () => {
    window.location.href = "./client.html";
})

delviery.addEventListener('click', () => {
    window.location.href = "./delivery.html";
})

deliveryOrder.addEventListener('click', () => {
    window.location.href = "./deliveryorder.html";
})

clientOrder.addEventListener('click', () => {
    window.location.href = "./clientorder.html";
})
analysis.addEventListener('click', () => {
    window.location.href = "./analysis.html";
})


adminLogout.addEventListener('click',() => {

     let type = "success"
        let icon = "fa-solid fa-circle-check";
        let title ="Success";
        let text = "Logout Succeessfully"

        createToast(type, icon, title, text)
         


    setTimeout(() => {
         window.location.replace("./index.html");
    },4000)
   

})



const navBarClose  = document.getElementsByClassName('fa-close')[0];
navBarClose.addEventListener('click', () => {
    const navContainer = document.getElementsByClassName('nav-container')[0];
  navContainer.classList.remove('nav-container-active')
})

const navBarOpen = document.getElementsByClassName('fa-bars')[0];
navBarOpen.addEventListener('click', () => {
     const navContainer = document.getElementsByClassName('nav-container')[0];
     navContainer.classList.add('nav-container-active')
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
