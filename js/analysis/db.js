
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
    user = usersArray.length;
    const userValue = user <= 9 ? `0${user}` : user;
    userElement.textContent = userValue;

    const userwidth = document.getElementById('userwidth');
    const userpercent = document.getElementById('userpercent');
    userwidth.style.width = `${userValue}%`
    userpercent.textContent = user+'%'


    // orders count
    var todayOrderArray = [];
    usersOrderArray.forEach((order, item) => {
        const userOrders = Object.entries(order)

        userOrders.forEach((data) => {
            const dataid = data[0];
            const datavalue = data[1];
            const orderData = {
                dataid, datavalue
            };
            todayOrderArray.push(orderData);

        })
    })

    var todayOrder = 0;
    const todayOrders = document.getElementById('todayOrders');

    const filterToday = todayOrderArray.filter((data, id) => data.datavalue.date === new Date().toLocaleDateString())
    todayOrder = filterToday.length;
    const orderValue = todayOrder <= 9 ? `0${todayOrder}` : todayOrder;
    todayOrders.textContent = orderValue;
    const torderswidth = document.getElementById('torderswidth');
    const torderspercent = document.getElementById('torderspercent');

    torderswidth.style.width = `${todayOrder}%`;
    torderspercent.textContent = todayOrder+'%';

    


    //    products 
    var foodCount = 0;
    const productsOrder = document.getElementById('productsOrder');

    filterToday.forEach((food, id) => {
        const foodCont = food.datavalue.food.length
        foodCount = foodCount + foodCont
    })
    const foodValue = foodCount <= 9 ? `0${foodCount}` : foodCount;
    productsOrder.textContent = foodValue;
    const proorderswidth = document.getElementById('proorderswidth');
    const proorderspercent = document.getElementById('proorderspercent');
    proorderswidth.style.width = `${foodCount}%`;
    proorderspercent.textContent = foodCount+'%';



    //  filter Process
    var filterProcessCount = 0;
    const filterProcessElement = document.getElementById('proccess');
    const filterProcess = filterToday.filter((process, id) => process.datavalue.isOrderStatus === false);

    filterProcessCount = filterProcess.length;
    const processValue = filterProcessCount <= 9 ? `0${filterProcessCount}` : filterProcessCount;
    filterProcessElement.textContent = processValue;

    
    
       if (filterProcess.length <= 0) {

            const empty = document.createElement('div');
            empty.className = "empty-container";
            empty.innerHTML = `
        <div>No Orders Proccessing</div>
        `


            const deliveredContainer1 = document.getElementsByClassName('process-content')[0];
            deliveredContainer1.appendChild(empty);
        }

    filterProcess.forEach((item, id) => {
        processCart(item, id)
    })


    //  filter delivered
    var filterDeliveredCount = 0;
    var revenueDeliver = 0;
    const filterDeliverElement = document.getElementById('complete');
    const RevenueElement = document.getElementById('revenue');
    const filterDeliver = filterToday.filter((process, id) => process.datavalue.isOrderStatus === true);

    filterDeliveredCount = filterDeliver.length;

    const DeliverValue = filterDeliveredCount <= 9 ? `0${filterDeliveredCount}` : filterDeliveredCount;
    filterDeliverElement.textContent = DeliverValue;


    
       if (filterDeliver.length <= 0) {

            const empty = document.createElement('div');
            empty.className = "empty-container";
            empty.innerHTML = `
        <div>No Orders Delivered</div>
        `


            const deliveredContainer1 = document.getElementsByClassName('delivred-content')[0];
            deliveredContainer1.appendChild(empty);
        }

    //  deliver Revenue

    filterDeliver.forEach((price, id) => {
        const totalprice = price.datavalue.total.ToPay;
        revenueDeliver = revenueDeliver + totalprice;
        deliverCart(price)

    })
    RevenueElement.textContent = "Rs." + revenueDeliver;
    
    const todeliverwidth = document.getElementById('todeliverwidth');
    const todeliverpercent = document.getElementById('todeliverpercent');
    const torevenuewidth = document.getElementById('revenuewidth');
    const torevenuepercent = document.getElementById('revenuepercent');
    const productswidth = document.getElementById('productswidth');
    const productspercent= document.getElementById('productspercent');
    const varietywidth = document.getElementById('varietywidth');
    const varietypercent = document.getElementById('varietypercent');

    todeliverwidth.style.width = `${filterDeliveredCount}%`;
    todeliverpercent.textContent = filterDeliveredCount+'%';
    torevenuewidth.style.width = `${revenueDeliver/500}%`;
    torevenuepercent.textContent = Math.floor(revenueDeliver/500) +'%';
    var product = 98;
    productswidth.style.width = `${product}%`;
    productspercent.textContent = product+'%';
    var variety = 50;
    varietywidth.style.width = `${variety}%`
    varietypercent.textContent = variety+'%';







    
 if (filterToday.length <= 0) {

            const empty = document.createElement('div');
            empty.className = "empty-container";
            empty.innerHTML = `
        <div>No Orders Found</div>
        `


            const deliveredContainer3 = document.getElementsByClassName('users')[0];
            const mainUsers = document.getElementsByClassName('main-users')[0];
            deliveredContainer3.appendChild(empty);
            mainUsers.style.display = "none";
        }


        if (filterToday.length <= 0) {

            const empty = document.createElement('div');
            empty.className = "empty-container";
            empty.innerHTML = `
        <div>No Orders Found</div>
        `


        
            const mainUsers1 = document.getElementsByClassName('products-variety')[0];
            mainUsers1.appendChild(empty);
          
        }
    











}).catch((err) => {
    console.log(err);

});





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
        const hours = parseInt(time.slice(0,2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3,5)));
        const second =  timeZero(parseInt(time.slice(6,8)));
        const median = hours < 12 ? 'AM': 'PM';

         const time1 = price.datavalue.deliveryTime;
        const hours1 = parseInt(time1.slice(0,2));
        const hoursLocal1 = timeZero(hours1 === 0 ? 12 : hours1 > 12 ? hours1 - 12 : hours1);
        const minutes1 = timeZero(parseInt(time1.slice(3,5)));
        const second1 =  timeZero(parseInt(time1.slice(6,8)));
        const median1 = hours1 < 12 ? 'AM': 'PM';







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
    const deliveredContainer = document.getElementsByClassName('delivred-content')[0];
    deliveredContainer.appendChild(deliverDiv);
}


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
        const hours = parseInt(time.slice(0,2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3,5)));
        const second =  timeZero(parseInt(time.slice(6,8)));
        const median = hours < 12 ? 'AM': 'PM';

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
    const deliveredContainer = document.getElementsByClassName('process-content')[0];
    deliveredContainer.appendChild(processDiv);









}