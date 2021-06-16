import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Inject gsap's core for global use, es: this.$gsap.to(...)
export default (context, inject) => {
  inject('gsap', gsap)
  inject('scrollTrigger', ScrollTrigger)
}