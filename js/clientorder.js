

db.ref('userorder').get('value').then((snapchat) => {
    const userOrder = snapchat.val();
    const ConvertUserData = Object.entries(userOrder)
    const todayArray = []
    const uniqArray = []
    ConvertUserData.forEach((userdata, index) => {
        const userid = userdata[0];


        const userdet = userdata[1]
        const userOrderItems = Object.entries(userdet)
        userOrderItems.forEach((itemsget) => {
            const pushData = itemsget;
            const pushDataid = pushData[0]

            const pushOrderData = pushData[1]




            addOrder(pushOrderData, todayArray, pushData, uniqArray)





        })
    })

    const dateFilter = todayArray.filter((today, index) => today.date === new Date().toLocaleDateString());










    dateFilter.forEach((todaypro, index) => {
        todayOrder(todaypro, index, uniqArray)

    })
    const dateSort = todayArray.reverse()
    dateSort.forEach((items, index) => {
        oldOrder(items, index)
    })





}).catch((err) => {
    console.log(err);

});

// add order
function addOrder(pushOrderData, todayArray, pushData, uniqArray) {
    const todayOrder = pushOrderData;

    todayArray.push(todayOrder);
    uniqArray.push(pushData);




}

// add items today

function todayOrder(todaypro, index, uniqArray) {
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
 <div class="orderitem-header">
            <div class="orderiddata">
                <div class="orderuniqid">
                    UserUid #<span>${todaypro.useruid}</span>
                </div>
                <div class="item-count">
                <span>${todaypro.username}</span> | ${todaypro.food.length} Items, Rs.${todaypro.total.ToPay}
                </div>
            </div>
            <div class="close-icon">
                <i class="fas fa-close" type="button" data-bs-dismiss="offcanvas"></i>
            </div>
        </div>
  <div class="order-address-container">
                <div class="fromaddress">
                    <div class="formicon"><i class="fas fa-location-dot"></i></div>
                    <div class="officeaddress-container">
                        <div class="officename">Mahan Food</div>
                        <div class="officeaddress">Kn Pettai</div>
                    </div>
                </div>
                <div class="toaddress">
                    <div class="toicon"><i class="fas fa-home"></i></div>
                    <div class="homeaddress-container">
                        <div class="homename">Home</div>
                        <div class="homeaddress">${todaypro.address}</div>
                    </div>
                </div>
                <div class="travel-line"></div>
            </div>
            <div class="checkout-summary-container">
                <div class="checkout-summary-content">
                    <div class="checkout-summary-content-det">
                        Bill Summary
                    </div>
                </div>
                <div class="line">
                </div>
                <div class="checkout-summary-price-container">
                    <div class="checkout-summary-price">
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Item Price</div>
                            <div class="payamt" id="itemPrice">Rs.${todaypro.total.itemPrice}</div>
                        </div>
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Delivery Charge</div>
                            <div class="payamt" id="deliveryCharge">Rs.${todaypro.total.deliveryCharge}</div>
                        </div>

                    </div>

                </div>
                <div class="checkout-summary-price-container">
                    <div class="checkout-summary-price">
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Platform Fee</div>
                            <div class="payamt" id="platFormFee">Rs.${todaypro.total.platFormFee}</div>
                        </div>
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Gst & Other Charges</div>
                            <div class="payamt" id="gstCharges">Rs.${todaypro.total.gstCalculation}</div>
                        </div>

                    </div>

                </div>
                <div class="topay">
                    <div class="checkout-summary-topay-amt">
                        <div class="Topaycashname">Paid</div>
                        <div class="Topayamt" id="toPay">Rs.${todaypro.total.ToPay}</div>
                    </div>
                </div>

            </div>
</div>
                        
    `;












    const todayItems = document.getElementsByClassName('today-items')[0];
    todayItems.appendChild(tr)

    const offCanavs = document.getElementById(`orderdet${index}`);



    const foodContainer = todaypro.food;
    foodContainer.forEach((food, id) => {
        const addfoodContainer = document.createElement('div')
        addfoodContainer.innerHTML = `
                 <div class="order-main">
            <div class="order-items-data">
                <div class="order-items-img">
                    <img src="${food.img}" alt="${food.name}" width="40px" >
                    </div>
                    <div class="order-items-detail">
                        <div class="productname">${food.name}</div>
                        <div class="product-price-container">
                            <div class="product-price">
                            Rs.${parseInt(food.price.slice(3)) / food.quantity}
                            </div>
                            <div class="product-count-price">
                            ${food.price}
                            </div>
                        </div>
                       
                    </div>
                     <div class="product-qty-container">Qty:${food.quantity}</div>
                </div>
            </div>

                ` ;
        offCanavs.appendChild(addfoodContainer);
        const displayWidth = innerWidth;

        if (displayWidth >= 1024) {
            offCanavs.style.width = "30%"
        }
        if (displayWidth <= 1023) {
            offCanavs.style.width = "100%"
        }

        offCanavs.style.overflowY = "scroll";









    })

    if (todaypro.isOrderStatus == false) {
        const divIsOrderStatus = document.createElement('div');
        divIsOrderStatus.className = "isorder-status";
        divIsOrderStatus.innerHTML = `
             <div class="order-status-text">Order Process
            <i class="fa-solid fa-stopwatch"></i>
             </div>
             `;
        divIsOrderStatus.style.color = "#e24141ff"
        offCanavs.appendChild(divIsOrderStatus)


    }
    else {
        const divIsOrderStatus = document.createElement('div');
        divIsOrderStatus.className = "isorder-status";
        function zeroAdd(data) {
            return data < 9 ? `0${data}` : data;
        }
        const orderTime1 = todaypro.deliveryTime;





        const convertNormalTimeElement = parseInt(orderTime1.slice(0, 2));


        const hours = zeroAdd(convertNormalTimeElement === 0 ? 12 : convertNormalTimeElement > 12 ? convertNormalTimeElement - 12 : convertNormalTimeElement);
        const minutes = zeroAdd(parseInt(orderTime1.slice(3, 5)));



        const second = zeroAdd(parseInt(orderTime1.slice(6, 8)))
        const median = convertNormalTimeElement < 12 ? "AM" : "PM";
        divIsOrderStatus.innerHTML = `
             <div class="order-status-text">Order Delivered ${hours}:${minutes}:${second} ${median}
             <i class="fa-solid fa-circle-check"></i></i>
             </div>
             `;
        divIsOrderStatus.style.color = "#30a76fff"
        offCanavs.appendChild(divIsOrderStatus)
    }













    const total = document.getElementById('todaycount')
    var todayTotalOrder = todayItems.children.length;
    total.innerText = todayTotalOrder;
    localStorage.setItem('todayordercount', todayTotalOrder === 0 ? 0 : todayTotalOrder )

    var totalValue = 0;
    const totalAmtElement = document.querySelectorAll('.totalamt');
    totalAmtElement.forEach((totalElement) => {
        const totalAmtShow = totalElement.innerHTML.slice(3);
        const totalAmt = parseInt(totalAmtShow);
        totalValue = totalValue + totalAmt;
    })











    const totalitem = document.getElementById('total');
    totalitem.innerText = "Rs." + totalValue


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

function oldOrder(items, index, uid) {
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
    <tr class="tr" data-bs-toggle="offcanvas" data-bs-target ="#orderdet1${index}"><td>${index + 1}</td>
                        <td>${items.date}</td>
                        <td>${normalTime}:${minutes}:${seconds} ${median}</td>
                        <td>${items.username}</td>
                        <td>${items.phone}</td>
                        <td class="totalamt">Rs.${items.total.ToPay}</td>
                        <td class="orderstatus">${items.address}
                        </td>
                        <td class="deliveryStatus1"></td></tr>

<div class="offcanvas offcanvas-start" id="orderdet1${index}">
<div class="orderitem-header">
            <div class="orderiddata">
                <div class="orderuniqid">
                    UserUid #${items.useruid}
                </div>
                <div class="item-count">
                ${items.username} | ${items.food.length} Items, Rs.${items.total.ToPay}
                </div>
            </div>
            <div class="close-icon">
                <i class="fas fa-close" type="button" data-bs-dismiss="offcanvas"></i>
            </div>
        </div>
  <div class="order-address-container">
                <div class="fromaddress">
                    <div class="formicon"><i class="fas fa-location-dot"></i></div>
                    <div class="officeaddress-container">
                        <div class="officename">Mahan Food</div>
                        <div class="officeaddress">Kn Pettai</div>
                    </div>
                </div>
                <div class="toaddress">
                    <div class="toicon"><i class="fas fa-home"></i></div>
                    <div class="homeaddress-container">
                        <div class="homename">Home</div>
                        <div class="homeaddress">${items.address}</div>
                    </div>
                </div>
                <div class="travel-line"></div>
            </div>
            <div class="checkout-summary-container">
                <div class="checkout-summary-content">
                    <div class="checkout-summary-content-det">
                        Bill Summary
                    </div>
                </div>
                <div class="line">
                </div>
                <div class="checkout-summary-price-container">
                    <div class="checkout-summary-price">
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Item Price</div>
                            <div class="payamt" id="itemPrice">Rs.${items.total.itemPrice}</div>
                        </div>
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Delivery Charge</div>
                            <div class="payamt" id="deliveryCharge">Rs.${items.total.deliveryCharge}</div>
                        </div>

                    </div>

                </div>
                <div class="checkout-summary-price-container">
                    <div class="checkout-summary-price">
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Platform Fee</div>
                            <div class="payamt" id="platFormFee">Rs.${items.total.platFormFee}</div>
                        </div>
                        <div class="checkout-summary-pay-amt">
                            <div class="payname">Gst & Other Charges</div>
                            <div class="payamt" id="gstCharges">Rs.${items.total.gstCalculation}</div>
                        </div>

                    </div>

                </div>
                <div class="topay">
                    <div class="checkout-summary-topay-amt">
                        <div class="Topaycashname">Paid</div>
                        <div class="Topayamt" id="toPay">Rs.${items.total.ToPay}</div>
                    </div>
                </div>

            </div>    
</div>
                        
    `;
    const todayItems = document.getElementsByClassName('old-items')[0];
    todayItems.appendChild(tr)


    const offCanavs = document.getElementById(`orderdet1${index}`);



    const foodContainer = items.food;
    foodContainer.forEach((food, id) => {
        const addfoodContainer = document.createElement('div')
        addfoodContainer.innerHTML = `
                 <div class="order-main">
            <div class="order-items-data">
                <div class="order-items-img">
                    <img src="${food.img}" alt="${food.name}" width="40px" >
                    </div>
                    <div class="order-items-detail">
                        <div class="productname">${food.name}</div>
                        <div class="product-price-container">
                            <div class="product-price">
                            Rs.${parseInt(food.price.slice(3)) / food.quantity}
                            </div>
                            <div class="product-count-price">
                            ${food.price}
                            </div>
                        </div>
                       
                    </div>
                     <div class="product-qty-container">Qty:${food.quantity}</div>
                </div>
            </div>

                ` ;
        offCanavs.appendChild(addfoodContainer);
        const displayWidth = innerWidth;

        if (displayWidth >= 1024) {
            offCanavs.style.width = "30%"
        }
        if (displayWidth <= 1023) {
            offCanavs.style.width = "100%"
        }

        offCanavs.style.overflowY = "scroll";
        offCanavs.style.scrollBehavior = "smooth"






    })


























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
    totalitem.innerText = "Rs." + totalValue


    if (items.isOrderStatus == false) {
        const divIsOrderStatus = document.createElement('div');
        divIsOrderStatus.className = "isorder-status";
        divIsOrderStatus.innerHTML = `
             <div class="order-status-text">Order Process
            <i class="fa-solid fa-stopwatch"></i>
             </div>
             `;
        divIsOrderStatus.style.color = "#e24141ff"
        offCanavs.appendChild(divIsOrderStatus)







    }
    else {

        function zeroAdd(data) {
            return data <= 9 ? `0${data}` : data;
        }
        const orderTime1 = items.deliveryTime;





        const convertNormalTimeElement = parseInt(orderTime1.slice(0, 2));


        const hours = zeroAdd(convertNormalTimeElement === 0 ? 12 : convertNormalTimeElement > 12 ? convertNormalTimeElement - 12 : convertNormalTimeElement);
        const minutes = zeroAdd(parseInt(orderTime1.slice(3, 5)));



        const second = zeroAdd(parseInt(orderTime1.slice(6, 8)))
        const median = convertNormalTimeElement < 12 ? "AM" : "PM";
        const divIsOrderStatus = document.createElement('div');
        divIsOrderStatus.className = "isorder-status";
        divIsOrderStatus.innerHTML = `
             <div class="order-status-text">Order Delivered  ${hours}:${minutes}:${second} ${median}
             <i class="fa-solid fa-circle-check"></i></i>
             </div>
             `;
        divIsOrderStatus.style.color = "#30a76fff"
        offCanavs.appendChild(divIsOrderStatus)
    }




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





   localStorage.setItem('todayordercount', 0)