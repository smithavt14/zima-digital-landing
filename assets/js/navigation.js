const navigation = document.querySelector('.navigation_wrapper')
const logo = document.querySelector('.navigation_zima-digital')

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