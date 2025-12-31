


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
            const div = document.createElement('div');
            div.className = "today-order";
            div.innerHTML = `<div class="order-item-today">
    <div class="order-det">
        <div class="usernameContainer">UserName:  <span class="username">${item.pushOrderData.username}</span></div>
        <div class="useruidContainer">UserId: <span class="useruid">${item.pushOrderData.useruid}</span></div>
        <div class="useruniqidContainer">UniqId: <span class="useruniqid">${item.pushDataid}</span></div>
        <div class="orderdateContainer">OrderDate: <span class="orderdate">${item.pushOrderData.date}</span></div>
        <div class="ordertimeContainer">OrderTime:  <span class="ordertime">${item.pushOrderData.time}</span></div>
    </div>
    <div class="user-det">
        <div class="totalamtContainer">Total: <span class="totalamt">${item.pushOrderData.total.ToPay}</span></div>
        <div class="addressContainer">Address:  <span class="address">${item.pushOrderData.address}</span></div>
        <div class="phoneContainer">Phone: <span class="phone">${item.pushOrderData.phone}</span></div>
        <div class="ordercount"> Item: <span>${item.pushOrderData.food.length}</div>
    </div>
    <div class="user-cont">
        <div class="orderstatus"> ${item.pushOrderData.isOrderStatus === false ? "Processing " : "delivered"}</div>
        
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

            for(var i=0; i<userContElement.length; i++)
            {
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
        isOrderStatus: true
    })
    db.ref('userorder/' + userName + userUid + "/" + userUniqId).get('value').then((sanp) => {
        const orderstatus = sanp.val();
        if (orderstatus.isOrderStatus === true) {
            const button = event.target;
            button.style.display = "none";
        }

    })






}

function readytodeliver(event)
{
     const readytodeliver = event.target.parentElement.parentElement.parentElement;
    
    const userName = readytodeliver.getElementsByClassName('username')[0].innerHTML;
    const userUid = readytodeliver.getElementsByClassName('useruid')[0].innerHTML;
    const userUniqId = readytodeliver.getElementsByClassName('useruniqid')[0].innerHTML;


    db.ref('userorder/' + userName + userUid + "/" + userUniqId).get('value').then((sanp) => {
        const orderstatus = sanp.val();
        console.log(orderstatus);
        
        if (orderstatus.isOrderStatus === false) {
             db.ref('deliverypartnerorder').push({
                orderstatus:orderstatus,
                isOrderDeliveryStatus:false,
                time:new Date().toLocaleTimeString(),
                date:new Date().toLocaleDateString(),
             })
            
        }

    })
    console.log('hii');
    const buttons = event.target;
    buttons.remove()

}