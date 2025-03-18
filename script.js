// ! mobile popup
const mobileShareOpenBtn = document.querySelector('.mobile-share-btn')
const mobileShare = document.querySelector('.mobile-share-popup')
const mobileShareShareIcon = document.querySelector('.popup-share-icon')

mobileShareOpenBtn.addEventListener('click', () => {
  mobileShare.classList.add('slide-in')
})

mobileShareShareIcon.addEventListener('click', () => {
  mobileShare.classList.remove('slide-in')
})

//! desktop popup 

const desktopPopupBtn = document.querySelector('.desktop-share-btn')
const desktopPopup = document.querySelector('.desktop-share-popup')

desktopPopupBtn.addEventListener('click', () => {
    desktopPopup.classList.toggle('show')
    desktopPopupBtn.classList.toggle('bg-img-change')
})
