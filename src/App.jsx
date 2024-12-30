

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import backgroundImage from '../public/images/textiles-pattern-2a.jpg';
// import backgroundImage3 from '../public/images/abstract-dark-clear-grids-ac.jpg';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);



/**
 * Components
 */
import Nav from './components/nav';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import { element } from 'prop-types';

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  const [theme, setTheme] = useState(false)

  return (
    <div className={theme ? 'dark dark:bg-white' : 'bg-zinc-900 text-zinc-50'}>
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}




export default App
