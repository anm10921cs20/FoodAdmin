

// const db = firebase.database();

// db.ref('userorder').get('value').then((snap) => {
//   const userOrder = snap.val();
//   const ConvertUserData = Object.entries(userOrder)

//   ConvertUserData.forEach((userdata, index) => {
//     const userid = userdata[0];
//     console.log(userid);
    
    
//     const userdet = userdata[1]
//     const userOrderItems = Object.entries(userdet)
//     userOrderItems.forEach((itemsget ) => {
//         const pushData = itemsget;
//         const pushDataid = pushData[0]
//         const pushOrderData = pushData[1]
//         console.log(pushDataid);
        
//         console.log(pushOrderData);
//         console.log(pushOrderData.username, pushOrderData.useruid);
        
        
      
        

//   db.ref('userorder/' + pushOrderData.username + pushOrderData.useruid + "/" + pushDataid ).get('value').then((snaps) => {
//             const datas = snaps.val();
//             const orderStaus = datas.isOrderStatus;
//             console.log(orderStaus);
            
//              db.ref('userorder/' + pushOrderData.username + pushOrderData.useruid + "/" + pushDataid).update({
            
//             isOrderStatus:true
//              })
            
            
//         })
    
        
//     })
    
    
    
    
    
    
    
    
//   })
  
  
    
// }).catch((err) => {
//     console.log(err);
    
// });
