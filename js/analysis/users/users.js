firestore.collection('client').get().then((responce) => {
    var emailCount = 0;
    responce.forEach(doc => {
        const user = doc.id;
        const userData = doc.data();
        const userObject = {
            user,
            userData
        }
        userConceptData(userObject, emailCount)
    });

})

firestore.collection('gmailClient').get().then((responce) => {
    var googleCount = 0;
    responce.forEach(doc => {
        const user = doc.id;
        const userData = doc.data();
        
        
        const userObject = {
            user,
            userData
        }
        
        userConceptGoogle(userObject, googleCount)
        
        
    });
 
    
   

})





function userConceptData(userObject, emailCount) {


    
    const userdataEmail = document.createElement('div');
    userdataEmail.className = 'email-user-cont';
    userdataEmail.innerHTML = `
   <div class="email-user-img">
                                            <img src="https://i.ibb.co/ZDMFp9F/user.png" alt="">
                                        </div>
                                        <div class="email-user-details">
                                            <div class="email-name">
                                               ${userObject.userData.name}
                                            </div>
                                            <div class="email-number">
                                               ${userObject.userData.phoneNumber}
                                            </div>
                                            <div class="email-address">
                                               ${userObject.userData.email}
                                            </div>
                                        </div>
                                        <div class="email-user-status">
                                            Active
                                        </div>
   
   `;
   const userdataEmailElement = document.getElementsByClassName('email-users2-container')[0];
   userdataEmailElement.appendChild(userdataEmail);
   emailCount = emailCount + userdataEmailElement.children.length;
   const roundZero = (data) => {
    return data<=9 ? `0${data}` : data;
   }

   const mailCountElement = document.getElementById('mailusers');
   mailCountElement.textContent = roundZero(emailCount);

}


function  userConceptGoogle(userObject, googleCount)
{
    const userdataEmail = document.createElement('div');
    userdataEmail.className = 'email-user-cont';
    userdataEmail.innerHTML = `
   <div class="email-user-img">
                                            <img src="${userObject.userData.img}" alt="">
                                        </div>
                                        <div class="email-user-details">
                                            <div class="email-name">
                                               ${userObject.userData.displayName}
                                            </div>
                                            <div class="email-address">
                                               ${userObject.userData.email}
                                            </div>
                                        </div>
                                        <div class="email-user-status">
                                            Active
                                        </div>
   
   `;
   
   const userdataEmailElement = document.getElementsByClassName('email-users2-container')[1];
   userdataEmailElement.appendChild(userdataEmail);
    const roundZero = (data) => {
    return data<=9 ? `0${data}` : data;
   }
   googleCount = googleCount + userdataEmailElement.children.length;
   const gogleMailCountElement = document.getElementById('googleusers');
   gogleMailCountElement.textContent = roundZero(googleCount);
   
    
}