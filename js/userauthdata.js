


firestore.collection('client').get().then((responce) => {
    var totaluseremail;

    responce.forEach(doc => {
        const docId = doc.id



        const docData = doc.data();




        const userId = document.createElement('div');
        userId.className = "userContainer";
        userId.innerHTML = `

<div class="users">
    <div class="usermenu">
        <div class="userimg">
            <img src="https://i.ibb.co/ZDMFp9F/user.png" alt="">
        </div>
        <div class="name">${docData.name}</div>
        <div class="emailid">
        ${docData.email}
        </div>

        <div class="uniqid">
                 ${docId}
        </div>
        <div class="provider">
          <i class="fa-regular fa-envelope"></i>
        </div>
    </div>
</div>


        
        `;
        const mainusercontainer = document.getElementsByClassName('users-emailclient')[0];
        mainusercontainer.appendChild(userId);

        totaluseremail = mainusercontainer.children.length;








    })

    const useremail = document.getElementsByClassName('totaluseremail')[0];
    useremail.innerText = totaluseremail;
    localStorage.setItem('emailuser', totaluseremail)

})




firestore.collection('gmailClient').get().then((responce) => {
    var totalgmailuser;
    responce.forEach(doc => {
        const docId1 = doc.id
        const docData1 = doc.data();







        const usergmail = document.createElement('div');
        usergmail.className = "userContainer";
        usergmail.innerHTML = `
<div class="users">
    <div class="usermenu">
        <div class="userimg">
            <img src="${docData1.img}" alt="">
        </div>
        <div class="name">${docData1.displayName}</div>
        <div class="emailid">
        ${docData1.email}
        </div>
      
        <div class="uniqid">
                ${docId1}
        </div>
        <div class="provider">
           <i class="fa-brands fa-google"></i>
        </div>
    </div>
</div>


        
        `;
        const mainusercontainer1 = document.getElementsByClassName('users-gmailclient')[0];
        mainusercontainer1.appendChild(usergmail);

        totalgmailuser = mainusercontainer1.children.length;



    })

    const useremail = document.getElementsByClassName('totalusergmail')[0];
    useremail.innerText = totalgmailuser;
    var totaluser = 0;
    totaluser = parseInt(totalgmailuser) + parseInt(localStorage.getItem('emailuser'));
    const usertotal = document.getElementsByClassName('totaluser')[0];
    usertotal.innerText = totaluser;
})




db.ref('userorder').get('value').then((snap) => {
    const userOrder = snap.val();
    const ConvertUserData = Object.entries(userOrder)


    var orderCount = 0
    ConvertUserData.forEach((userdata, index) => {
        const userid = userdata[0];


        const userdet = userdata[1]

        const userOrderItems = Object.entries(userdet)

        orderCount = orderCount + userOrderItems.length
        const ordertotal = document.getElementsByClassName('ordertotal')[0];
        ordertotal.innerText = orderCount;
        var todayOrder = localStorage.getItem('todayordercount') ?? 0;
        userOrderItems.forEach((items) => {
            const pushData = items;
            const pushDataid = pushData[0]
            const pushOrderData = pushData[1]





           






                const ordertotaltoday = document.getElementsByClassName('ordertoday')[0];
                ordertotaltoday.innerText = todayOrder;

          

















        })








    })



}).catch((err) => {
    console.log(err);

});
