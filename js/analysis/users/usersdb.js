firestore.collection('client').get().then((responce) => {
    var emailCount = 0;
    responce.forEach(doc => {
        const user = doc.id;
        const userData = doc.data();

        firestore.collection('UserAddressMobile/').doc(user).get().then((snapto) => {
            const address = snapto.data();
            const userObject = {
                user,
                userData,

            }

            userConceptData1(userObject, address)

        }).catch((err) => {
            console.log(err);
            
        })


    });

}).catch((err) => {
    console.log(err);
    
})

firestore.collection('gmailClient').get().then((responce) => {
    var googleCount = 0;
    responce.forEach(doc => {
        const user = doc.id;
        const userData = doc.data();



        firestore.collection('UserAddressMobile/').doc(user).get().then((snapto) => {
            const address = snapto.data();
            const userObject = {
                user,
                userData
            }

            userConceptGoogle1(userObject, address)

        }).catch((err) => {
            console.log(err);
            
        })


    });




}).catch((err) => {
    console.log(err);
    
})





function userConceptData1(userObject, address) {

    


    const userdataEmail = document.createElement('div');
    userdataEmail.className = 'email-user-cont1';
    userdataEmail.innerHTML = `
   <div class="email-user-img1">
                                            <img src="https://i.ibb.co/ZDMFp9F/user.png" alt="">
                                        </div>
                                        <div class="email-user-details1">
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
                                         <div class="email-user-address1">
                                            <div class="address-det">${address.street === null ? 'No Record' : address.street }<br>${address.district},<br>${address.state} ${address.pincode}</div>
                                        </div>
                                        <div class="email-user-status1">
                                            Active
                                        </div>
   
   `;
    const userdataEmailElement = document.getElementsByClassName('email-users1-container')[0];
    userdataEmailElement.appendChild(userdataEmail);

}


function userConceptGoogle1(userObject, address) {
    const userdataEmail = document.createElement('div');
    userdataEmail.className = 'email-user-cont1';
    userdataEmail.innerHTML = `
   <div class="email-user-img1">
                                            <img src="${userObject.userData.img}" alt="">
                                        </div>
                                        <div class="email-user-details1">
                                            <div class="email-name">
                                               ${userObject.userData.displayName}
                                            </div>
                                            <div class="email-address1">
                                               ${userObject.userData.email}
                                            </div>
                                        </div>
                                          <div class="email-user-address1">
                                            <div class="address-det">${address.street === undefined ? 'no record found' : address.street}<br>${address.district},<br>${address.state} ${address.pincode}</div>
                                        </div>
                                        <div class="email-user-status1">
                                            Active
                                        </div>
   
   `;

    const userdataEmailElement = document.getElementsByClassName('email-users1-container')[0];
    userdataEmailElement.appendChild(userdataEmail);


    // input search user

    const usersearch = document.getElementById('searchuser');
    usersearch.oninput = function () {
        const filter = usersearch.value.toLowerCase();
        const emailUsersContainer = document.getElementsByClassName('email-users1-container')[0];
        const emailUserItems = emailUsersContainer.getElementsByClassName('email-user-cont1');
        for (let i = 0; i < emailUserItems.length; i++) {
            const emailUserItem = emailUserItems[i];
            const txtValue = emailUserItem.textContent || emailUserItem.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                emailUserItem.style.display = "";
            } else {
                emailUserItem.style.display = "none";
            }
        }
    }
}
