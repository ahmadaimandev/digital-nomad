// Import Lenis
import Lenis from '@studio-freight/lenis'

// Initialize Lenis with your custom options
const lenis = new Lenis({
  duration: 1.2,    // Animation duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
  smooth: true,     // Enable smooth scrolling
})

// Animation frame function to keep the scroll updated
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)  // Start the animation loop
