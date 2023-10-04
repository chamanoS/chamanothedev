import React from 'react'
import './about.css'
import Image from "../../assets/images/img.jpeg";
import Github from "../../assets/images/github.png"
import Behance from "../../assets/images/behance.png"
import Email from "../../assets/images/email.png"
import Linkedin from "../../assets/images/linkedin.png"
import Phone from "../../assets/images/phone.png"

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
            <img src={Image} alt='img' />

          </div>
          <div className='about-content'>
            <div className='header'>
              <h1>Know About Me</h1>
            </div>

            <div className='about-intro'>
              <h3>Hi I'm chamano TheDev</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ea blanditiis expedita voluptatibus impedit dolore eius at
                quibusdam cumque, consectetur saepe deserunt natus,
                accusamus quis eos nobis itaque? Obcaecati, neque reiciendis?
              </p>
            </div>
            <div className='about-contact'>
              <div className='about-cont'>
                <h3>For Contact:</h3>
              </div>

              <div className='about-socials'>
                <div className='about-social'>
                  <img src={Phone} alt='' />
                  <a href='/#'>065 621 2377</a>
                </div>
                <div className='about-social'>
                  <img src={Behance} alt='' />
                  <a href='/#'>Behance</a>
                </div>
              </div>

              <div className='about-socials'>
                <div className='about-social'>
                  <img src={Github} alt='' />
                  <a href='https://github.com/chamanoS' target='blank'>Github</a>
                </div>
                <div className='about-social'>
                  <img src={Linkedin} alt='' />
                  <a href='/#'>Linkedin</a>
                </div>
              </div>
              {/* <div className='about-socialx'>
                <img src={Email} alt='' />
                <a href='/#'>Linkedin</a>
              </div> */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

