import AOS from 'aos'
import 'aos/dist/aos.css';

document.addEventListener('astro:page-load', () => {
  AOS.init()
})