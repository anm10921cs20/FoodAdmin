// side bar active

const asideBarOpenClose = document.getElementsByClassName('bar-icon')[0];
const asideContainer = document.getElementsByClassName('aside')[0];
const asideImg = document.getElementsByClassName('img-src')[0];
const sideContainer = document.getElementsByClassName('side-container')[0]

asideBarOpenClose.addEventListener('click', () => {
  asideContainer.classList.toggle('aside-active');
  asideImg.classList.toggle('img-src-inactive');
  sideContainer.classList.toggle('side-container-active')
  asideBarOpenClose.classList.toggle('fa-close')
})

const todayBtn = document.getElementsByClassName('today-button')[0];
const alltimeBtn = document.getElementsByClassName('alltime-button')[0];
const todayContainer = document.getElementsByClassName('today-container')[0];
const alltimeContainer = document.getElementsByClassName('alltime-container')[0];


todayBtn.addEventListener('click', () => {
  alltimeBtn.classList.remove('btns-active');
  todayBtn.classList.add('btns-active');
  todayContainer.style.display = "block";
  alltimeContainer.style.display = "none";
  let type = "success"
  let icon = "fa-solid fa-circle-check";
  let title = "Today";
  let text = "All the Today Reports"

  createToast(type, icon, title, text)

})
alltimeBtn.addEventListener('click', () => {
  todayBtn.classList.remove('btns-active');
  alltimeBtn.classList.add('btns-active');
  todayContainer.style.display = "none";
  alltimeContainer.style.display = "block"

  let type = "success"
  let icon = "fa-solid fa-circle-check";
  let title = "All Time";
  let text = "Alltime Reports Here"

  createToast(type, icon, title, text)
})


const todayBtnRevenue = document.getElementsByClassName('today-button')[1];
const alltimeBtnRevenue = document.getElementsByClassName('alltime-button')[1];
const todayContainerRevenue = document.getElementsByClassName('today-container')[1];
const alltimeContainerRevenue = document.getElementsByClassName('alltime-container')[1];

todayBtnRevenue.addEventListener('click', () => {
  alltimeBtnRevenue.classList.remove('btns-active');
  todayBtnRevenue.classList.add('btns-active');
  todayContainerRevenue.style.display = "block";
  alltimeContainerRevenue.style.display = "none";
  let type = "success"
  let icon = "fa-solid fa-circle-check";
  let title = "Today";
  let text = "All the Today Revenue Reports"

  createToast(type, icon, title, text)

})
alltimeBtnRevenue.addEventListener('click', () => {
  todayBtnRevenue.classList.remove('btns-active');
  alltimeBtnRevenue.classList.add('btns-active');
  todayContainerRevenue.style.display = "none";
  alltimeContainerRevenue.style.display = "block"

  let type = "success"
  let icon = "fa-solid fa-circle-check";
  let title = "All Time";
  let text = "Alltime Revenue Reports Here"

  createToast(type, icon, title, text)
})


const todayBtnorders = document.getElementsByClassName('today-button')[2];
const alltimeBtnorders = document.getElementsByClassName('alltime-button')[2];
const todayContainerorders = document.getElementsByClassName('today-container')[2];
const alltimeContainerorders = document.getElementsByClassName('alltime-container')[2];

todayBtnorders.addEventListener('click', () => {
  alltimeBtnorders.classList.remove('btns-active');
  todayBtnorders.classList.add('btns-active');
  todayContainerorders.style.display = "block";
  alltimeContainerorders.style.display = "none";
  let type = "success"
  let icon = "fa-solid fa-circle-check";
  let title = "Today";
  let text = "All the Today orders Reports"

  createToast(type, icon, title, text)

})
alltimeBtnorders.addEventListener('click', () => {
  todayBtnorders.classList.remove('btns-active');
  alltimeBtnorders.classList.add('btns-active');
  todayContainerorders.style.display = "none";
  alltimeContainerorders.style.display = "block"

  let type = "success"
  let icon = "fa-solid fa-circle-check";
  let title = "All Time";
  let text = "Alltime orders Reports Here"

  createToast(type, icon, title, text)
})























// button
const dashboard = document.getElementsByClassName('nav-content')[0];
const users = document.getElementsByClassName('nav-content')[1];
const partners = document.getElementsByClassName('nav-content')[2];
const revenue = document.getElementsByClassName('nav-content')[3];
const orders = document.getElementsByClassName('nav-content')[4];

// container

const dashboardElement = document.getElementsByClassName('dashboard-container')[0];
const usersElement = document.getElementsByClassName('users-container')[0];
const partnersElement = document.getElementsByClassName('partners-container')[0];
const revenueElement = document.getElementsByClassName('revenue-container')[0];
const ordersElement = document.getElementsByClassName('orders-container')[0];

dashboard.style.backgroundColor = "#ff9900";
dashboard.style.color = "#fff";
dashboard.addEventListener('click', () => {
  // display control
  dashboardElement.style.display = "block";
  usersElement.style.display = "none";
  partnersElement.style.display = "none";
  revenueElement.style.display = "none";
  ordersElement.style.display = "none";


  // background control
  dashboard.style.backgroundColor = "#ff9900";
  dashboard.style.color = "#fff";

  const transparent = "transparent";
  const color = "#ff4343"
  // users

  users.style.backgroundColor = transparent;
  users.style.color = color;

  // partners

  partners.style.backgroundColor = transparent;
  partners.style.color = color;

  // revenue

  revenue.style.backgroundColor = transparent;
  revenue.style.color = color;

  // orders

  orders.style.backgroundColor = transparent;
  orders.style.color = color;





})

users.addEventListener('click', () => {
  // display control
  dashboardElement.style.display = "none";
  usersElement.style.display = "block";
  partnersElement.style.display = "none";
  revenueElement.style.display = "none";
  ordersElement.style.display = "none";


  const transparent = "transparent";
  const color = "#ff4343"

  // background control
  dashboard.style.backgroundColor = transparent;
  dashboard.style.color = color;


  // users

  users.style.backgroundColor = "#ff9900";
  users.style.color = "#fff";

  // partners

  partners.style.backgroundColor = transparent;
  partners.style.color = color;

  // revenue

  revenue.style.backgroundColor = transparent;
  revenue.style.color = color;

  // orders

  orders.style.backgroundColor = transparent;
  orders.style.color = color;





})




partners.addEventListener('click', () => {
  // display control
  dashboardElement.style.display = "none";
  usersElement.style.display = "none";
  partnersElement.style.display = "block";
  revenueElement.style.display = "none";
  ordersElement.style.display = "none";


  const transparent = "transparent";
  const color = "#ff4343"

  // background control
  dashboard.style.backgroundColor = transparent;
  dashboard.style.color = color;


  // users

  users.style.backgroundColor = transparent;
  users.style.color = color;

  // partners

  partners.style.backgroundColor = "#ff9900";
  partners.style.color = "#fff";

  // revenue

  revenue.style.backgroundColor = transparent;
  revenue.style.color = color;

  // orders

  orders.style.backgroundColor = transparent;
  orders.style.color = color;

 



})



revenue.addEventListener('click', () => {
  // display control
  dashboardElement.style.display = "none";
  usersElement.style.display = "none";
  partnersElement.style.display = "none";
  revenueElement.style.display = "block";
  ordersElement.style.display = "none";


  const transparent = "transparent";
  const color = "#ff4343"

  // background control
  dashboard.style.backgroundColor = transparent;
  dashboard.style.color = color;


  // users

  users.style.backgroundColor =transparent;
  users.style.color = color;

  // partners

  partners.style.backgroundColor = transparent;
  partners.style.color = color;

  // revenue

  revenue.style.backgroundColor = "#ff9900";
  revenue.style.color = "#fff";

  // orders

  orders.style.backgroundColor = transparent;
  orders.style.color = color;

 



})



orders.addEventListener('click', () => {
  // display control
  dashboardElement.style.display = "none";
  usersElement.style.display = "none";
  partnersElement.style.display = "none";
  revenueElement.style.display = "none";
  ordersElement.style.display = "block";


  const transparent = "transparent";
  const color = "#ff4343"

  // background control
  dashboard.style.backgroundColor = transparent;
  dashboard.style.color = color;


  // users

  users.style.backgroundColor =transparent;
  users.style.color = color;

  // partners

  partners.style.backgroundColor = transparent;
  partners.style.color = color;

  // revenue

  revenue.style.backgroundColor = transparent;
  revenue.style.color = color;

  // orders

  orders.style.backgroundColor = "#ff9900";
  orders.style.color = "#fff";

 



})




