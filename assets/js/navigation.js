// DOM variables

const navigation = document.querySelector('.navigation_wrapper')
const logo = document.querySelector('.navigation_zima-digital')
const services = document.getElementById('services-tab')
const work = document.getElementById('work-tab')
const servicesBanner = document.querySelector('.services_banner')
const workBanner = document.querySelector('.work_banner')

// client rect variables
let servicesRect = servicesBanner.getBoundingClientRect()
let workRect = workBanner.getBoundingClientRect()

// Event Listeners
window.addEventListener('scroll', function(e) {
  if (window.pageYOffset > window.innerHeight - 160) {
    navigation.classList.add('navigation_wrapper-white')
  } else {
    navigation.classList.remove('navigation_wrapper-white')
  }
})

logo.addEventListener('click', function(e) {
  window.scroll(0,0)
})

services.addEventListener('click', function(e) {
  window.scroll(0, servicesRect.top - 100)
})

work.addEventListener('click', function(e) {
  window.scroll(0, workRect.top - 100)
})