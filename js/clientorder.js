

db.ref('userorder').get('value').then((snapchat) => {
    const userOrder = snapchat.val();
    const ConvertUserData = Object.entries(userOrder)
    const todayArray = []
    ConvertUserData.forEach((userdata, index) => {
        const userid = userdata[0];


        const userdet = userdata[1]
        const userOrderItems = Object.entries(userdet)
        userOrderItems.forEach((itemsget) => {
            const pushData = itemsget;
            const pushDataid = pushData[0]
            const pushOrderData = pushData[1]

            addOrder(pushOrderData, todayArray)





        })
    })

    const dateFilter = todayArray.filter((today, index) => today.date === new Date().toLocaleDateString())
    dateFilter.forEach((todaypro, index) => {
        todayOrder(todaypro, index)

    })
    const dateSort = todayArray.reverse()
    dateSort.forEach((items, index) => {
        oldOrder(items, index)
    })






}).catch((err) => {
    console.log(err);

});

// add order
function addOrder(pushOrderData, todayArray) {
    const todayOrder = pushOrderData;
    todayArray.push(todayOrder)


}

// add items today

function todayOrder(todaypro, index) {
    const tr = document.createElement('tbody');
    const todayTime = todaypro.time;
    const zeroAdd = (data) => {
        return data <= 9 ? `0${data}` : data;
    }
    const hours = parseInt(todayTime.slice(0, 2))
    const minutes = zeroAdd(parseInt(todayTime.slice(3, 5)))
    const seconds = zeroAdd(parseInt(todayTime.slice(6, 8)))


    const normalTime = zeroAdd(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);

    const median = hours < 12 ? "AM" : "PM"






    tr.innerHTML = `
    <tr class="tr" data-bs-toggle="offcanvas" data-bs-target ="#orderdet${index}"><td>${index + 1}</td>
                        <td>${todaypro.date}</td>
                        <td>${normalTime}:${minutes}:${seconds} ${median}</td>
                        <td>${todaypro.username}</td>
                        <td>${todaypro.phone}</td>
                        <td class="totalamt">Rs.${todaypro.total.ToPay}</td>
                        <td class="orderstatus">${todaypro.address}
                        </td>
                        <td class="deliveryStatus">deliveryStatus</td></tr>

                <div class="offcanvas offcanvas-start" id="orderdet${index}">
    
</div>
                        
    `;
    const todayItems = document.getElementsByClassName('today-items')[0];
    todayItems.appendChild(tr)
    const total = document.getElementById('todaycount')
    var todayTotalOrder = todayItems.children.length;
    total.innerText = todayTotalOrder;

     var totalValue = 0;
   const totalAmtElement = document.querySelectorAll('.totalamt');
   totalAmtElement.forEach((totalElement) => {
    const totalAmtShow = totalElement.innerHTML.slice(3); 
     const totalAmt = parseInt(totalAmtShow);
      totalValue = totalValue + totalAmt;
   })
   const totalitem = document.getElementById('total');
   totalitem.innerText = "Rs."+ totalValue


    const deliveryStatus = document.getElementsByClassName('deliveryStatus')[index];

    if (todaypro.isOrderStatus === false) {
        deliveryStatus.style.color = "#ff4343d2";
        deliveryStatus.innerText = "Proccessing"
    }
    else {
        deliveryStatus.style.color = "#3c9e4cff";
        deliveryStatus.innerText = "Delivered"
    }



}

// old

function oldOrder(items, index) {
    const tr = document.createElement('tbody');
    const todayTime = items.time;
    const zeroAdd = (data) => {
        return data <= 9 ? `0${data}` : data;
    }
    const hours = parseInt(todayTime.slice(0, 2))
    const minutes = zeroAdd(parseInt(todayTime.slice(3, 5)))
    const seconds = zeroAdd(parseInt(todayTime.slice(6, 8)))


    const normalTime = zeroAdd(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);

    const median = hours < 12 ? "AM" : "PM"






    tr.innerHTML = `
    <tr class="tr" data-bs-toggle="offcanvas" data-bs-target ="#orderdet${index}"><td>${index + 1}</td>
                        <td>${items.date}</td>
                        <td>${normalTime}:${minutes}:${seconds} ${median}</td>
                        <td>${items.username}</td>
                        <td>${items.phone}</td>
                        <td class="totalamt">Rs.${items.total.ToPay}</td>
                        <td class="orderstatus">${items.address}
                        </td>
                        <td class="deliveryStatus1"></td></tr>

                <div class="offcanvas offcanvas-start" id="orderdet${index}">
    
</div>
                        
    `;
    const todayItems = document.getElementsByClassName('old-items')[0];
    todayItems.appendChild(tr)
    const totalOrder = document.getElementById('todaycount1')
    var todayTotalOrder = todayItems.children.length;
    totalOrder.innerText = todayTotalOrder;
   var totalValue = 0;
   const totalAmtElement = document.querySelectorAll('.totalamt');
   totalAmtElement.forEach((totalElement) => {
    const totalAmtShow = totalElement.innerHTML.slice(3); 
     const totalAmt = parseInt(totalAmtShow);
      totalValue = totalValue + totalAmt;
   })
  
   


  
   const totalitem = document.getElementById('total1');
   totalitem.innerText = "Rs."+ totalValue
   
    



    const deliveryStatus = document.getElementsByClassName('deliveryStatus1')[index];

    if (items.isOrderStatus === false) {
        deliveryStatus.style.color = "#ff4343d2";
        deliveryStatus.innerText = "Proccessing"
    }
    else {
        deliveryStatus.style.color = "#3c9e4cff";
        deliveryStatus.innerText = "Delivered"
    }


}
