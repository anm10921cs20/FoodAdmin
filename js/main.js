
// li contenet redirect

const client = document.getElementsByTagName('li')[0]
const delviery = document.getElementsByTagName('li')[1]
const deliveryOrder = document.getElementsByTagName('li')[2]
const clientOrder = document.getElementsByTagName('li')[3]

client.addEventListener('click', () => {
    window.location.href = "./index.html";
})

delviery.addEventListener('click', () => {
    window.location.href = "./delivery.html";
})

deliveryOrder.addEventListener('click', () => {
    window.location.href = "./deliveryorder.html";
})

clientOrder.addEventListener('click', () => {
    window.location.href = "./clientorder.html";
})