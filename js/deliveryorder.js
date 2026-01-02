
// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
// You might also need these imports for database and firestore
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";



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

db.ref('userorder').get('value').then((snap) => {
    const userOrder = snap.val();

    const ConvertUserData = Object.entries(userOrder)

    const orderToday = []
    ConvertUserData.forEach((userdata, index) => {
        const userid = userdata[0];


        const userdet = userdata[1]
        const userOrderItems = Object.entries(userdet)
        userOrderItems.forEach((itemsget) => {
            const pushData = itemsget;
            const pushDataid = pushData[0]
            const pushOrderData = pushData[1]
            const data = {
                pushDataid,
                pushOrderData
            }
            orderToday.push(data)
        })
    })

    orderToday.forEach((item, index) => {
        if (item.pushOrderData.date === new Date().toLocaleDateString()) {

            function zeroAdd(data) {
                return data <= 9 ? `0${data}` : data;
            }

            const orderTime = item.pushOrderData.time;
   
            
            const convertNormalTimeElement = parseInt(orderTime.slice(0, 3));
            const hours = zeroAdd(convertNormalTimeElement === 0 ? 12 : convertNormalTimeElement > 12 ? convertNormalTimeElement - 12 : convertNormalTimeElement);
          
            
            const minutes = zeroAdd(parseInt(orderTime.slice(3, 5)));
           
            

            const second = zeroAdd(parseInt(orderTime.slice(6, 8)))
            const median = convertNormalTimeElement < 12 ? "AM" : "PM";

         
            








            const div = document.createElement('div');
            div.className = "today-order";
            div.innerHTML = `<div class="${item.pushOrderData.isOrderStatus === false ? "order-item-today" : "order-item-today-active"}">
    <div class="order-det">
        <div class="usernameContainer">UserName:  <span class="username">${item.pushOrderData.username}</span></div>
        <div class="useruidContainer">UserId: <span class="useruid">${item.pushOrderData.useruid}</span></div>
        <div class="useruniqidContainer">UniqId: <span class="useruniqid">${item.pushDataid}</span></div>
        <div class="orderdateContainer">OrderDate: <span class="orderdate">${item.pushOrderData.date}</span></div>
        <div class="ordertimeContainer">OrderTime:  <span class="ordertime">${hours}:${minutes}:${second} ${median}</span></div>
    </div>
    <div class="user-det">
        <div class="totalamtContainer">Total: Rs.<span class="totalamt">${item.pushOrderData.total.ToPay}</span></div>
        <div class="addressContainer">Address:  <span class="address">${item.pushOrderData.address}</span></div>
        <div class="phoneContainer">Phone: <span class="phone">${item.pushOrderData.phone}</span></div>
        <div class="ordercount"> Item: <span>${item.pushOrderData.food.length}</div>
    </div>
    <div class="user-cont">
        <div class="orderstatus"> ${item.pushOrderData.isOrderStatus === false ? "Processing " : "Delivered"}</div>
        
    </div>
</div>
        
        `;
            const todayDeliveryOrder = document.getElementsByClassName('today-delivery-order')[0];
            todayDeliveryOrder.appendChild(div);
            const userCont = document.getElementsByClassName('user-cont');
            const userContElement = userCont

            if (item.pushOrderData.isOrderStatus === false) {
                const div = document.createElement('div');
                div.className = "button-container";
                div.innerHTML = `
            <button class="clicktodeliver">Click To Deliverd</button>
            <button class="readytodeliver">Ready To Deliverd</button>

            `;

                for (var i = 0; i < userContElement.length; i++) {
                    userContElement[i].appendChild(div)

                }

            }











            const clickToDeliverd = document.querySelectorAll('.clicktodeliver');
            clickToDeliverd.forEach((btn, id) => {
                btn.addEventListener('click', clicktodeliver)

            })



                const readyToDeliver = document.querySelectorAll('.readytodeliver');



                readyToDeliver.forEach((btns, id) => {
                    btns.addEventListener('click', readytodeliver)
                })







           






        }

    })


}).catch((err) => {
    console.log(err);

});


function clicktodeliver(event) {
    const clicktodeliver = event.target.parentElement.parentElement.parentElement;

    const userName = clicktodeliver.getElementsByClassName('username')[0].innerHTML;
    const userUid = clicktodeliver.getElementsByClassName('useruid')[0].innerHTML;
    const userUniqId = clicktodeliver.getElementsByClassName('useruniqid')[0].innerHTML;

    db.ref('userorder/' + userName + userUid + "/" + userUniqId).update({
        isOrderStatus: true,
        deliveryTime: new Date().toLocaleTimeString()
    })
    db.ref('userorder/' + userName + userUid + "/" + userUniqId).get('value').then((sanp) => {
        const orderstatus = sanp.val();
        if (orderstatus.isOrderStatus === true) {
            const button = event.target;
            button.style.display = "none";
        }

    })

    setTimeout(() => {
        window.location.reload();
    })






}
function readytodeliver(event) {
    const readytodeliver = event.target.parentElement.parentElement.parentElement;

    const userName = readytodeliver.getElementsByClassName('username')[0].innerHTML;
    const userUid = readytodeliver.getElementsByClassName('useruid')[0].innerHTML;
    const userUniqId = readytodeliver.getElementsByClassName('useruniqid')[0].innerHTML;


    db.ref('userorder/' + userName + userUid + "/" + userUniqId).get('value').then((sanp) => {
        const orderstatus = sanp.val();


        if (orderstatus.isOrderStatus === false) {
            push(ref(deliverydb, 'deliverypartnerorder'), {
                orderstatus: orderstatus,
                isOrderDeliveryStatus: false,
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
            })
             
            var button = event.target;
            button.remove();


        }

    })
        setTimeout(() => {
        window.location.reload();
    },1000)


}





// second container

get(ref(deliverydb, 'deliverypartnerorder/')).then((snap) => {
    const value = snap.val()
    const deliverydata = Object.entries(value);
    const deliveryArray = [];
    deliverydata.forEach((items, index) => {
        const item = items[1]
        const itemid = items[0]
        const deliveryItem = {
            item,
            itemid
        }
        deliveryArray.push(deliveryItem)
    })



    deliveryArray.forEach((item, index) => {


        if (item.item.date === new Date().toLocaleDateString()) {

            function zeroAdd(data) {
                return data <= 9 ? `0${data}` : data;
            }

            const orderTime = item.item.time;


            const convertNormalTimeElement = parseInt(orderTime.slice(0, 2));
            const hours = zeroAdd(convertNormalTimeElement === 0 ? 12 : convertNormalTimeElement > 12 ? convertNormalTimeElement - 12 : convertNormalTimeElement);
            const minutes = zeroAdd(parseInt(orderTime.slice(3, 5)));

            const second = zeroAdd(parseInt(orderTime.slice(6, 8)))
            const median = convertNormalTimeElement < 12 ? "AM" : "PM";










            const div = document.createElement('div');
            div.className = "today-order";
            div.innerHTML = `<div class="${item.item.isOrderDeliveryStatus === false ? "order-item-today" : "order-item-today-active"}">
    <div class="order-det">
        <div class="usernameContainer">UserName:  <span class="username">${item.item.orderstatus.username}</span></div>
        <div class="useruidContainer">UserId: <span class="useruid">${item.item.orderstatus.username}</span></div>
        <div class="useruniqidContainer">UniqId: <span class="useruniqid">${item.itemid}</span></div>
        <div class="orderdateContainer">OrderDate: <span class="orderdate">${item.item.date}</span></div>
        <div class="ordertimeContainer">OrderTime:  <span class="ordertime">${hours}:${minutes}:${second} ${median}</span></div>
    </div>
    <div class="user-det">
        <div class="totalamtContainer">Total: Rs.<span class="totalamt">${item.item.orderstatus.total.ToPay}</span></div>
        <div class="addressContainer">Address:  <span class="address">${item.item.orderstatus.address}</span></div>
        <div class="phoneContainer">Phone: <span class="phone">${item.item.orderstatus.phone}</span></div>
        <div class="ordercount"> Item: <span>${item.item.orderstatus.food.length}</div>
    </div>
    <div class="user-cont1">
        <div class="orderstatus"> ${item.item.isOrderDeliveryStatus === false ? "Processing " : "Delivered"}</div>
        
    </div>
</div>
        
        `;
            const todayDeliveryOrder = document.getElementsByClassName('today-delivered-order')[0];
            todayDeliveryOrder.appendChild(div);


        }

    })

}).catch((err) => {
    console.log(err);

})



setTimeout(() => {
window.location.reload();
},1200000)