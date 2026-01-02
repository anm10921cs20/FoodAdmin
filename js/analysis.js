// side bar active

const asideBarOpenClose = document.getElementsByClassName('bar-icon')[0];
const asideContainer = document.getElementsByClassName('aside')[0];
const asideImg = document.getElementsByClassName('img-src')[0];

asideBarOpenClose.addEventListener('click', () => {
    asideContainer.classList.toggle('aside-active');
    asideImg.classList.toggle('img-src-inactive');
})

  const todayBtn = document.getElementsByClassName('today-button')[0];
const alltimeBtn = document.getElementsByClassName('alltime-button')[0];

todayBtn.addEventListener('click',() => {
    alltimeBtn.classList.remove('btns-active');
    todayBtn.classList.add('btns-active')
})
alltimeBtn.addEventListener('click', () => {
    todayBtn.classList.remove('btns-active');
    alltimeBtn.classList.add('btns-active')
})