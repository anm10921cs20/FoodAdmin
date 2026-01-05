

db.ref('popularcuisines').get('value').then((responce) => {
    const responceData = responce.val();
    responceData.forEach((item, index) => {
        const productsContainer = document.createElement('div');
        productsContainer.className = 'product-container';
        productsContainer.innerHTML = `<div class="product-container">
                                                    <div class="img">
                                                        <img src="${item.img}" width="40px"  alt="">
                                                    </div>
                                                    <div class="product-content">
                                                        <div class="product-name">
                                                            ${item.name}
                                                        </div>
                                                        <div class="product-type">
                                                           ${item.rel}
                                                        </div>
                                                    </div>
                                                </div>
       
       `;
       const productList = document.getElementsByClassName('products-list')[0];
       productList.appendChild(productsContainer);

    })

}).catch((err) => {
    console.log(err);

});




