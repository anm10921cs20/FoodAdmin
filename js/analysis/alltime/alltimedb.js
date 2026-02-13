



firestore.collection('client/').get().then((user) => {
    var allTimeUserCount = 0;
    const alltimeUserArray = [];
    user.forEach((doc, id) => {
        alltimeUserArray.push(doc.data())



    })
    firestore.collection('gmailClient/').get().then((users) => {
        users.forEach((email, id) => {
            alltimeUserArray.push(email.data())
        })
        allTimeUserCount = allTimeUserCount + alltimeUserArray.length;
        const userAllTimeElement = document.getElementById('usersalltime');
        const alltimeUser = allTimeUserCount <= 9 ? `0${allTimeUserCount}` : allTimeUserCount;
        userAllTimeElement.textContent = alltimeUser;
        const totalUser = document.getElementById('totalusers');
        totalUser.textContent = alltimeUser;
        const userwidth = document.getElementById('userwidth1');
        const userpercent = document.getElementById('userpercent1');
        userwidth.style.width = `${alltimeUser}%`
        userpercent.textContent = alltimeUser + '%'
         const userwidth1 = document.getElementById('touserswidth');
        const userpercent1 = document.getElementById('touserspercent');
        userwidth1.style.width = `${alltimeUser}%`
        userpercent1.textContent = alltimeUser + '%'

    })





})




// all time orders

db.ref('userorder/').get('value').then((snapshot) => {
    const responce = snapshot.val()

    const users = Object.entries(responce)
    let usersArray = [];
    let usersOrderArray = [];
    var user = 0;
    const userElement = document.getElementById('users');
    users.forEach((user, index) => {
        const users = user[0];
        const usersOrder = user[1];
        usersArray.push(users)
        usersOrderArray.push(usersOrder);
    })





    // orders count
    var totalOrderArray = [];
    usersOrderArray.forEach((order, item) => {
        const userOrders = Object.entries(order)

        userOrders.forEach((data) => {
            const dataid = data[0];
            const datavalue = data[1];
            const orderData = {
                dataid, datavalue
            };
            totalOrderArray.push(orderData);

        })
    })



    var totalOrder = 0;
    totalOrder = totalOrder + totalOrderArray.length;


    const allTimeOrders = document.getElementById('alltimeOrders');
    const alltimeZero = totalOrder <= 9 ? `0${totalOrder}` : totalOrder;
    allTimeOrders.textContent = alltimeZero;
    const torderswidth = document.getElementById('torderswidth1');
    const torderspercent = document.getElementById('torderspercent1');

    torderswidth.style.width = `${alltimeZero}%`;
    torderspercent.textContent = alltimeZero + '%';

    const totalOrders = document.getElementById('totalorders');
    totalOrders.textContent = alltimeZero;





    var alltimeDeliverCount = 0;
    const allTimeDeliver = totalOrderArray.filter((data, id) => data.datavalue.isOrderStatus === true);
    alltimeDeliverCount = alltimeDeliverCount + allTimeDeliver.length;
    const completeAllTimeElement = document.getElementById('completealltime');
    const allTimeDeliverCountZero = alltimeDeliverCount <= 9 ? `0${alltimeDeliverCount}` : alltimeDeliverCount;
    completeAllTimeElement.textContent = allTimeDeliverCountZero;

    const totalDeliver = document.getElementById('totaldelivers');
    totalDeliver.textContent = allTimeDeliverCountZero;




    // process orders items details
    var allTimeProcessCount = 0;
    const allTimeProccess = totalOrderArray.filter((data, id) => data.datavalue.isOrderStatus === false);
    allTimeProcessCount = allTimeProcessCount + allTimeProccess.length;
    const processAllTimeElement = document.getElementById('proccessalltime');
    const processAllTimeCountZero = allTimeProcessCount <= 9 ? `0${allTimeProcessCount}` : allTimeProcessCount;
    processAllTimeElement.textContent = processAllTimeCountZero;

    
    const totalProcess = document.getElementById('proccessalltimes');
    totalProcess.textContent = processAllTimeCountZero;


    var totalRevenue = 0;
    var totalGst = 0;
    var totalDeliveryCharge = 0;
    var totalPlatformCharge = 0;
    var totalproductPrice = 0;

    allTimeDeliver.forEach((data, id) => {
        totalRevenue = totalRevenue + data.datavalue.total.ToPay;
        totalGst = totalGst + data.datavalue.total.gstCalculation;
        totalDeliveryCharge = totalDeliveryCharge + data.datavalue.total.deliveryCharge;
        totalPlatformCharge = totalPlatformCharge + data.datavalue.total.platFormFee;
        totalproductPrice = totalproductPrice + data.datavalue.total.itemPrice;

    })
    const totalRevenueElement = document.getElementById('revenuealltime');
    totalRevenueElement.textContent = 'Rs.' + totalRevenue;


    // rwevenue progress bar]

    const alltimeRevenue = document.getElementById('alltime');
    const alltimeproduct = document.getElementById('productpriceall');
    const alltimegst = document.getElementById('allgstbill');
    const alltimeplatfee = document.getElementById('allplatfromfee');
    const alltimedeliver = document.getElementById('alldeliverycharges');
    alltimeRevenue.textContent = 'Rs.' + totalRevenue;
    alltimeproduct.textContent = 'Rs.' + totalproductPrice;
    alltimegst.textContent = 'Rs.' + Math.floor(totalGst);
    alltimeplatfee.textContent = 'Rs.' + Math.floor(totalPlatformCharge);
    alltimedeliver.textContent = 'Rs.' + Math.floor(totalDeliveryCharge);


    const todeliverwidth = document.getElementById('todeliverwidth1');
    const todeliverpercent = document.getElementById('todeliverpercent1');
    const torevenuewidth = document.getElementById('revenuewidth1');
    const torevenuepercent = document.getElementById('revenuepercent1');
    const productswidth = document.getElementById('productswidth1');
    const productspercent = document.getElementById('productspercent1');
    const varietywidth = document.getElementById('varietywidth1');
    const varietypercent = document.getElementById('varietypercent1');

    todeliverwidth.style.width = `${allTimeDeliverCountZero}%`;
    todeliverpercent.textContent = allTimeDeliverCountZero + '%';
    torevenuewidth.style.width = `${totalRevenue / 10000}%`;
    torevenuepercent.textContent = Math.floor(totalRevenue / 10000) + '%';
    var product = 98;
    productswidth.style.width = `${product}%`;
    productspercent.textContent = product + '%';
    var variety = 50;
    varietywidth.style.width = `${variety}%`
    varietypercent.textContent = variety + '%';



    var productsCountTotal = 0;

    allTimeDeliver.forEach((price, id) => {
        productsCountTotal = productsCountTotal + price.datavalue.food.length;
        deliverCart(price)

    })
    const productsCountTotalElements = document.getElementById('totalproductsOrder');
    const productCountsTotalZero = productsCountTotal <= 9 ? `0${productsCountTotal}` : productsCountTotal;

    productsCountTotalElements.textContent = productCountsTotalZero;
    const proorderswidth = document.getElementById('proorderswidth1');
    const proorderspercent = document.getElementById('proorderspercent1');
    proorderswidth.style.width = `${parseInt(productCountsTotalZero) / 5}%`;
    proorderspercent.textContent = parseInt(productCountsTotalZero) / 5 + '%';

    const totalProducts = document.getElementById('totalproducts');
    totalProducts.textContent = productCountsTotalZero;

    if (allTimeDeliver.length <= 0) {

        const empty = document.createElement('div');
        empty.className = "empty-container";
        empty.innerHTML = `
        <div>No Orders Delivered</div>
        `

        const deliveredContainer11 = document.getElementsByClassName('delivred-content1')[0];

        deliveredContainer11.appendChild(empty);
    }


    allTimeProccess.forEach((item, id) => {
        processCart(item, id)
    })


    function processCart(item, id) {


        const process = item;

        const itemid = process.dataid;

        var orderuid = ""
        var charset = "1234567890";
        for (var i = 0; i < itemid.length; i++) {
            const random = Math.floor(Math.random() * charset.length);
            orderuid += charset[random];

        }
        const timeZero = (data) => {
            return data <= 9 ? `0${data}` : data;
        }

        const time = item.datavalue.time;
        const hours = parseInt(time.slice(0, 2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3, 5)));
        const second = timeZero(parseInt(time.slice(6, 8)));
        const median = hours < 12 ? 'AM' : 'PM';

        const processDiv = document.createElement('div');
        processDiv.className = " item-delivered";
        processDiv.innerHTML = `
     <div class="main-content">
        <p class="orderid">Order Id ${orderuid}</p>
         <p class="order-time">Order Time:${hoursLocal}:${minutes}:${second} ${median}</p>
        <p class="order-date">Order Date:${item.datavalue.date}</p>
           </div>
        <div class="item-content">
            <p class="items-count">Items: ${item.datavalue.food.length}</p>
            <p class="items-price">Total Amt :${item.datavalue.total.ToPay}</p>
       </div>
            <div class="delivred-sym">
           <p class="items-process">Process <i class="fa-regular fa-clock"></i></p>
             </div>
    `;
        const deliveredContainer = document.getElementsByClassName('process-content1')[0];
        deliveredContainer.appendChild(processDiv);









    }

    if (allTimeProccess.length <= 0) {

        const empty = document.createElement('div');
        empty.className = "empty-container";
        empty.innerHTML = `
        <div>No Orders Proccessing</div>
        `


        const deliveredContainer1 = document.getElementsByClassName('process-content1')[0];
        deliveredContainer1.appendChild(empty);
    }


        
 if (allTimeOrders.length <= 0) {

            const empty = document.createElement('div');
            empty.className = "empty-container";
            empty.innerHTML = `
        <div>No Orders Found</div>
        `


            const deliveredContainer3 = document.getElementsByClassName('users')[1];
          

            const mainUsers = document.getElementsByClassName('main-users')[1];
         
            deliveredContainer3.appendChild(empty);
           
         

            mainUsers.style.display = "none";
           

        }






















})








function deliverCart(price) {
    const deliverContainer = price;
    const dataid = price.dataid;

    var orderId = "";
    var charset = "1234567890";
    for (var i = 0; i < dataid.length; i++) {
        const random = Math.floor(Math.random() * charset.length);
        orderId += charset[random];

    }


    const timeZero = (data) => {
        return data <= 9 ? `0${data}` : data;
    }

    const time = price.datavalue.time;
    const hours = parseInt(time.slice(0, 2));
    const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
    const minutes = timeZero(parseInt(time.slice(3, 5)));
    const second = timeZero(parseInt(time.slice(6, 8)));
    const median = hours < 12 ? 'AM' : 'PM';

    const time1 = price.datavalue.deliveryTime;
    const hours1 = parseInt(time1.slice(0, 2));
    const hoursLocal1 = timeZero(hours1 === 0 ? 12 : hours1 > 12 ? hours1 - 12 : hours1);
    const minutes1 = timeZero(parseInt(time1.slice(3, 5)));
    const second1 = timeZero(parseInt(time1.slice(6, 8)));
    const median1 = hours1 < 12 ? 'AM' : 'PM';







    const deliverDiv = document.createElement('div');
    deliverDiv.className = " item-delivered";
    deliverDiv.innerHTML = `
     <div class="main-content">
        <p class="orderid">Order Id ${orderId}</p>
         <p class="order-time">Order Time:${hoursLocal}:${minutes}:${second} ${median}</p>
        <p class="order-date">Order Date:${price.datavalue.date}</p>
           </div>
        <div class="item-content">
            <p class="items-count">Items: ${price.datavalue.food.length}</p>
            <p class="items-price">Total Amt :${price.datavalue.total.ToPay}</p>
          <p class="delivery-time">DelTime:${hoursLocal1}:${minutes1}:${second1} ${median1}</p>
       </div>
            <div class="delivred-sym">
           <p class="items-delivered">Delivered <i
            class="fas fa-check-circle"></i></p>
             </div>
    `;
    const deliveredContainer = document.getElementsByClassName('delivred-content1')[0];
    deliveredContainer.appendChild(deliverDiv);
}