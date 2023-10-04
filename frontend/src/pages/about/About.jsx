import React from 'react'
import './about.css'

export const About = () => {
  return (
    <>
      <section className='the-body'>
        <div className='bold-lines'>
          <div className='lines upper'></div>
          <div className='portfolio'>
            <h4 className=' title top-title'>SOFTWARE DEVELOPER</h4>
            <div className='square shape-t'></div>
            <h1> P<span className='color'>O</span>RTF<span className='color'>O</span>LI<span className='color'>O</span></h1>
            <div className='square shape-b'></div>
            <h4 className='title bottom-title'>CHAMANO SIDNEY</h4>
          </div>
          <div className='lines lower'></div>
        </div>

        <div className='about-me'>
          <div className='about-img'>
            <img src='' alt='img' />

          </div>
          <div className='about-content'>
            <h1>Know About Me</h1>
            <div className='about-intro'>
              <h3>Hi I'm chamano TheDev</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea blanditiis expedita voluptatibus impedit dolore eius at
                quibusdam cumque, consectetur saepe deserunt natus,
                accusamus quis eos nobis itaque? Obcaecati, neque reiciendis?
              </p>
            </div>
            <div className='about-contact'>

              <div className='about-socials'>
                <div className='about-social'>
                  <span></span>
                  <p>Intasgram</p>
                </div>
                <div className='about-social'>
                  <span></span>
                  <p>Intasgram</p>
                </div>
              </div>

              <div className='about-socials'>
                <div className='about-social'>
                  <span></span>
                  <p>Intasgram</p>
                </div>
                <div className='about-social'>
                  <span></span>
                  <p>Intasgram</p>
                </div>
              </div>
              <div className='about-social'>
                  <span></span>
                  <p>Intasgram</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

