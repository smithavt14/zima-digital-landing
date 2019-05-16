const navigation = document.querySelector('.navigation_wrapper')

window.addEventListener('scroll', function(res) {
  if (window.pageYOffset > window.innerHeight - 160) {
    navigation.classList.add('navigation_wrapper-white')
  } else {
    navigation.classList.remove('navigation_wrapper-white')
  }
})