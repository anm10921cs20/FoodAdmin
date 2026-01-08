// users data

// email client

firestore.collection('client').get().then((responce) => {
    responce.forEach(doc => {
        const user = doc.id;
        const userData = doc.data();
        const userObject = {
            user,
            userData
        }
        userConcept(userObject)
    });

})

// gmail client

firestore.collection('gmailClient').get().then((responce) => {
    responce.forEach((doc) => {
        const googleUser = doc.id;
        const googleUserData = doc.data();
        const googleUserObject = {
            googleUser,
            googleUserData
        }
        googleUserConcept(googleUserObject)
    })
})


// user object function 

function userConcept(userObject) {

    db.ref('userorder/' + userObject.userData.name + userObject.user).get('value').then((responce) => {
        const userOrder = responce.val();
        const userOrderArray = []
        const userdata = Object.entries(userOrder ?? []);
        userOrderArray.push(userdata)
        userdata.forEach((userorder, index) => {
            const userOrderId = userorder[0];
            const userOrderData = userorder[1];
            const userOrderObject = {
                userOrderId,
                userOrderData
            }
            usernormalpush(userOrderObject, userObject);

        })


    })
}

// google user concpt

function googleUserConcept(googleUserObject) {


    db.ref('userorder/' + googleUserObject.googleUserData.displayName + googleUserObject.googleUser).get('value').then((responce) => {
        const userOrder = responce.val();
        const userOrderArray = []
        const userdata = Object.entries(userOrder ?? []);
        userOrderArray.push(userdata)
        userdata.forEach((userorder, index) => {
            const userOrderId = userorder[0];
            const userOrderData = userorder[1];
            const userOrderObject = {
                userOrderId,
                userOrderData
            }
            userPush(userOrderObject, googleUserObject);

        })


    })

}



function userPush(userOrderObject, googleUserConcept) {

    if (userOrderObject.userOrderData.date === new Date().toLocaleDateString()) {

        const timeZero = (data) => {
            return data <= 9 ? `0${data}` : data;
        }

        const time = userOrderObject.userOrderData.time;
        const hours = parseInt(time.slice(0, 2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3, 5)));
        const second = timeZero(parseInt(time.slice(6, 8)));
        const median = hours < 12 ? 'AM' : 'PM';








        const orderUser = document.createElement('div');
        orderUser.className = 'main-users';
        orderUser.innerHTML = `
     <div class="userimg">
                                                    <img src="${googleUserConcept.googleUserData.img}" alt="users">
                                                </div>
                                                <div class="username">
                                                  <p> ${userOrderObject.userOrderData.username}</p>
                                                  <p> ${hoursLocal}:${minutes}:${second} ${median}</p>
                                                  <p class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}"> ${userOrderObject.userOrderData.isOrderStatus === false ? "process" : "Complete"}</p>
                                                </div>
                                                <div class="total">
                                                    Rs.${userOrderObject.userOrderData.total.ToPay}
                                                </div>
    `;
        const userData = document.getElementsByClassName('users')[0];
        userData.appendChild(orderUser)

        const productorder = document.createElement('div');
        productorder.className = "product-details-container";
        productorder.innerHTML = `
        <div class="usernameorder">
        Customer Name: ${userOrderObject.userOrderData.username}
        </div>
        `;
        const productVariety = document.getElementsByClassName('products-variety')[0];
        productVariety.appendChild(productorder)

        const foodOrderData = userOrderObject.userOrderData.food;
        foodOrderData.forEach((data, id) => {
            productorder.innerHTML += ` <div class="users-product-det">
 <div class="products-img-container">
<img src="${data.img}"alt="${data.name}">
</div>
<div class="products-name-detail">
<div class="productsname">
${data.name}
</div>
<div class="productCount">
Qty:${data.quantity}
</div>
</div>
<div class="proccess-status">
<div class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}">
${userOrderObject.userOrderData.isOrderStatus === false ? "Proccess" : "Delivered"}
</div>
</div>
</div>
            
            `

        })



















    }
     const timeZero = (data) => {
            return data <= 9 ? `0${data}` : data;
        }

        const time = userOrderObject.userOrderData.time;
        const hours = parseInt(time.slice(0, 2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3, 5)));
        const second = timeZero(parseInt(time.slice(6, 8)));
        const median = hours < 12 ? 'AM' : 'PM';








        const orderUser = document.createElement('div');
        orderUser.className = 'main-users';
        orderUser.innerHTML = `
     <div class="userimg">
                                                    <img src="${googleUserConcept.googleUserData.img}" alt="users">
                                                </div>
                                                <div class="username">
                                                  <p> ${userOrderObject.userOrderData.username}</p>
                                                  <p> ${hoursLocal}:${minutes}:${second} ${median}</p>
                                                  <p class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}"> ${userOrderObject.userOrderData.isOrderStatus === false ? "process" : "Complete"}</p>
                                                </div>
                                                <div class="total">
                                                    Rs.${userOrderObject.userOrderData.total.ToPay}
                                                </div>
    `;
        const userData = document.getElementsByClassName('users1')[0];
        userData.appendChild(orderUser)


        const productorder = document.createElement('div');
        productorder.className = "product-details-container";
        productorder.innerHTML = `
        <div class="usernameorder">
        Customer Name: ${userOrderObject.userOrderData.username}
        </div>
        `;
        const productVariety = document.getElementsByClassName('products-variety1')[0];
        productVariety.appendChild(productorder)

        const foodOrderData = userOrderObject.userOrderData.food;
        foodOrderData.forEach((data, id) => {
            productorder.innerHTML += ` <div class="users-product-det">
 <div class="products-img-container">
<img src="${data.img}"alt="${data.name}">
</div>
<div class="products-name-detail">
<div class="productsname">
${data.name}
</div>
<div class="productCount">
Qty:${data.quantity}
</div>
</div>
<div class="proccess-status">
<div class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}">
${userOrderObject.userOrderData.isOrderStatus === false ? "Proccess" : "Delivered"}
</div>
</div>
</div>
            
            `

        })











}



function usernormalpush(userOrderObject, userObject) {

    if (userOrderObject.userOrderData.date === new Date().toLocaleDateString()) {


        const timeZero = (data) => {
            return data <= 9 ? `0${data}` : data;
        }

        const time = userOrderObject.userOrderData.time;
        const hours = parseInt(time.slice(0, 2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3, 5)));
        const second = timeZero(parseInt(time.slice(6, 8)));
        const median = hours < 12 ? 'AM' : 'PM';








        const orderUser = document.createElement('div');
        orderUser.className = 'main-users';
        orderUser.innerHTML = `
     <div class="userimg">
                                                    <img src="https://i.ibb.co/ZDMFp9F/user.png" alt="users">
                                                </div>
                                                <div class="username">
                                                  <p> ${userOrderObject.userOrderData.username}</p>
                                                  <p> ${hoursLocal}:${minutes}:${second} ${median}</p>
                                                  <p class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}"> ${userOrderObject.userOrderData.isOrderStatus === false ? "process" : "Complete"}</p>
                                                </div>
                                                <div class="total">
                                                    Rs.${userOrderObject.userOrderData.total.ToPay}
                                                </div>
    `;
        const userData = document.getElementsByClassName('users')[0];
        userData.appendChild(orderUser)




        const productorder = document.createElement('div');
        productorder.className = "product-details-container";
        productorder.innerHTML = `
        <div class="usernameorder">
        Customer Name: ${userOrderObject.userOrderData.username}
        </div>
        `;
        const productVariety = document.getElementsByClassName('products-variety')[0];
        productVariety.appendChild(productorder)




        const foodOrderData = userOrderObject.userOrderData.food;
        foodOrderData.forEach((data, id) => {
            productorder.innerHTML += ` <div class="users-product-det">
 <div class="products-img-container">
<img src="${data.img}"alt="${data.name}">
</div>
<div class="products-name-detail">
<div class="productsname">
${data.name}
</div>
<div class="productCount">
Qty:${data.quantity}
</div>
</div>
<div class="proccess-status">
<div class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}">
${userOrderObject.userOrderData.isOrderStatus === false ? "Proccess" : "Delivered"}
</div>
</div>
</div>
            
            `

        })












    }


         const timeZero = (data) => {
            return data <= 9 ? `0${data}` : data;
        }

        const time = userOrderObject.userOrderData.time;
        const hours = parseInt(time.slice(0, 2));
        const hoursLocal = timeZero(hours === 0 ? 12 : hours > 12 ? hours - 12 : hours);
        const minutes = timeZero(parseInt(time.slice(3, 5)));
        const second = timeZero(parseInt(time.slice(6, 8)));
        const median = hours < 12 ? 'AM' : 'PM';








        const orderUser = document.createElement('div');
        orderUser.className = 'main-users';
        orderUser.innerHTML = `
     <div class="userimg">
                                                    <img src="https://i.ibb.co/ZDMFp9F/user.png" alt="users">
                                                </div>
                                                <div class="username">
                                                  <p> ${userOrderObject.userOrderData.username}</p>
                                                  <p> ${hoursLocal}:${minutes}:${second} ${median}</p>
                                                  <p class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}"> ${userOrderObject.userOrderData.isOrderStatus === false ? "process" : "Complete"}</p>
                                                </div>
                                                <div class="total">
                                                    Rs.${userOrderObject.userOrderData.total.ToPay}
                                                </div>
    `;
        const userData = document.getElementsByClassName('users1')[0];
        userData.appendChild(orderUser)




        const productorder = document.createElement('div');
        productorder.className = "product-details-container";
        productorder.innerHTML = `
        <div class="usernameorder">
        Customer Name: ${userOrderObject.userOrderData.username}
        </div>
        `;
        const productVariety = document.getElementsByClassName('products-variety1')[0];
        productVariety.appendChild(productorder)




        const foodOrderData = userOrderObject.userOrderData.food;
        foodOrderData.forEach((data, id) => {
            productorder.innerHTML += ` <div class="users-product-det">
 <div class="products-img-container">
<img src="${data.img}"alt="${data.name}">
</div>
<div class="products-name-detail">
<div class="productsname">
${data.name}
</div>
<div class="productCount">
Qty:${data.quantity}
</div>
</div>
<div class="proccess-status">
<div class="${userOrderObject.userOrderData.isOrderStatus === false ? "status-inactive" : "status-active"}">
${userOrderObject.userOrderData.isOrderStatus === false ? "Proccess" : "Delivered"}
</div>
</div>
</div>
            
            `

        })
















}