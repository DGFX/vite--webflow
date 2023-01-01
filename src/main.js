import animateTitle from './features/animateTitle'
import createBadge from './features/createBasge'
import Experience from './three/three'
import './styles/style.css'

//Setup Experience
const threeCanvas = document.querySelector('.experience')

if (threeCanvas) {
  new Experience({
    dom: threeCanvas,
  })
}

createBadge()
animateTitle()
