// side bar active

const asideBarOpenClose = document.getElementsByClassName('bar-icon')[0];
const asideContainer = document.getElementsByClassName('aside')[0];
const asideImg = document.getElementsByClassName('img-src')[0];
const sideContainer = document.getElementsByClassName('side-container')[0]

asideBarOpenClose.addEventListener('click', () => {
    asideContainer.classList.toggle('aside-active');
    asideImg.classList.toggle('img-src-inactive');
    sideContainer.classList.toggle('side-container-active')
})

  const todayBtn = document.getElementsByClassName('today-button')[0];
const alltimeBtn = document.getElementsByClassName('alltime-button')[0];
  const todayContainer = document.getElementsByClassName('today-container')[0];
const alltimeContainer = document.getElementsByClassName('alltime-container')[0];


todayBtn.addEventListener('click',() => {
    alltimeBtn.classList.remove('btns-active');
    todayBtn.classList.add('btns-active');
    todayContainer.style.display = "block";
    alltimeContainer.style.display = "none";
      let type = "success"
        let icon = "fa-solid fa-circle-check";
        let title ="Today";
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
        let title ="All Time";
        let text = "Alltime Reports Here"

        createToast(type, icon, title, text)
})