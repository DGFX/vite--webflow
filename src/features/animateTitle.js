import gsap from 'gsap'

function animateTitle() {
  // Get the element from the DOM
  const span = document.querySelector('.blue')

  // If it exists, play the aniamtion
  if (span) {
    gsap.to(span, {
      color: 'blue',
      duration: 3,
      delay: 1,
      ease: 'Power1.easeOut',
    })
  }
}

export default animateTitle
