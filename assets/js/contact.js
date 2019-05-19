const contact = document.querySelector('.contact_wrapper')

if (window.innerWidth > 800) {
	window.addEventListener('scroll', function(e) {
	  let rect = contact.getBoundingClientRect()
	  if (rect.top <= 120) {
	    contact.classList.add('contact_wrapper-fixed')
	  } else {
	    contact.classList.remove('contact_wrapper-fixed')
	  }
	})
}