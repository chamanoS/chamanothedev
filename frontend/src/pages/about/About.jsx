import React from 'react'
import './about.css'
import about from '../../assets/images/Sparkle.png'

export const About = () => {
  return (
    <>
      <section className='the-body'>
        <div className='about-me'>
          <h1>About Me</h1>
        </div>
        <div className='hero-section'>
          <div className='about-img'>
            <img src={about} alt='' />
          </div>
          <div className='about-content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni, quibusdam sequi vitae ducimus distinctio aspernatur
              odio et expedita veritatis necessitatibus. Ea quam perspiciatis
              ad deserunt ducimus libero voluptatem earum temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni, quibusdam sequi vitae ducimus distinctio aspernatur
              odio et expedita veritatis necessitatibus. Ea quam perspiciatis
              ad deserunt ducimus libero voluptatem earum temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni, quibusdam sequi vitae ducimus distinctio aspernatur
              odio et expedita veritatis necessitatibus. Ea quam perspiciatis
              ad deserunt ducimus libero voluptatem earum temporibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni, quibusdam sequi vitae ducimus distinctio aspernatur
              odio et expedita veritatis necessitatibus. Ea quam perspiciatis
              ad deserunt ducimus libero voluptatem earum temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni, quibusdam sequi vitae ducimus distinctio aspernatur
              odio et expedita veritatis necessitatibus. Ea quam perspiciatis
              ad deserunt ducimus libero voluptatem earum temporibus.</p>
          </div>
        </div>
      </section>
    </>
  )
}

