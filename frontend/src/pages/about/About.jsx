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

        <div className='experience'>
        <div className='about-me'>
          <h1>Work Experience</h1>
        </div>
        <div className='titles'>
          <h2>Company Name</h2>
          <hr/>
          <h2>2019 - 2020</h2>
        </div>
        <div className='job'>
          <h3>Job Title</h3>
        </div>
        <ul className='lists'>
          <li>* Lorem ipsum dolor sit amet consectetur </li>
          <li>* Lorem ipsum dolor sit amet consectetur </li>
          <li>* Lorem ipsum dolor sit amet consectetur </li>
          <li>* Lorem ipsum dolor sit amet consectetur </li>
          <li>* Lorem ipsum dolor sit amet consectetur </li>
        </ul>
        </div>

        <div className='devider'>
          <div class="circle"></div>
          <div class="vertical-line"></div>
          <div class="circle"></div>
        </div>
      </section>
    </>
  )
}

