if (window.width <= 800) {
  const services = document.querySelector('.services_container')
  const servicesExpandWrapper = document.querySelector('.services_expand-wrapper')
  const servicesExpandDescription = document.querySelector('.services_expand-description')
  const servicesExpandIcon = document.querySelector('.services_expand-icon')
  const servicesBox = document.querySelector('.services_box')
  const servicesTitle = document.querySelector('.services_title')
  const servicesIcon = document.querySelector('.services_icon')

  services.addEventListener('click', function(e) {
    servicesExpandWrapper.classList.toggle('services_expand-wrapper-mobile')
    servicesExpandDescription.classList.toggle('services_expand-description-mobile')
    servicesExpandIcon.classList.toggle('services_expand-icon-mobile')
    servicesBox.classList.toggle('services_box-mobile')
    servicesTitle.classList.toggle('services_title-mobile')
    servicesIcon.toggle('services_icon-mobile')
  })
}




