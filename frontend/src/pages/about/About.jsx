import React from 'react'
import './about.css'
import Image from "../../assets/images/img.jpeg";
import Github from "../../assets/images/github.png"
import Behance from "../../assets/images/behance.png"
import Email from "../../assets/images/email.png"
import Linkedin from "../../assets/images/linkedin.png"
import Phone from "../../assets/images/phone.png"
//import Create from "../../assets/images/create.png"
import Education from "../../assets/images/edu.png"
import Experience from "../../assets/images/exp.png"

export const About = () => {
  return (
    <>
      <section className='the-body'>
       
          <div className='portfolio'>
            <h4 className=' title top-title'>SOFTWARE DEVELOPER</h4>
            <div className='square shape-t'></div>
            <h1> P<span className='color'>O</span>RTF<span className='color'>O</span>LI<span className='color'>O</span></h1>
            <div className='square shape-b'></div>
            <h4 className='title bottom-title'>CHAMANO SIDNEY</h4>
          </div>
          <div className='lines lower'></div>
        
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
              <ul className='lists'>
                <li>Hi there👋! I'm a self-taught developer with a zest for life.</li>
                <li>I thrive on adventure, both in the coding world and beyond.</li>
                <li>When I'm not immersed in lines of code, you'll find me lost in the pages of a good book📚,
                 exploring new places, and embracing every opportunity to have fun.</li>
                <li>Let's embark on this digital journey together and make tech a little more exciting!✨</li>
              </ul>
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
              <div className='about-social'>
                <img src={Email} alt='' />
                <a href='/#'>chamano.sr@gmail.com</a>
              </div>

            </div>
          </div>
        </div>

        <div className='grand-parent'>
          <div className='parent-exp'>
            <div className='experience-edu'>

              <div className='experince-Box'>
                <div className='hd-exp'>
                  <img src={Education} alt=''/>
                </div>
                <div className='experience-content'>
                  <ul className='lists'>
                    <li>Hi there👋! I'm a self-taught developer with a zest for life.</li>
                    <li>I thrive on adventure, both in the coding world and beyond.</li>
                    <li>When I'm not immersed in lines of code, you'll find me lost in the pages of a good book📚,
                      exploring new places, and embracing every opportunity to have fun.</li>
                    <li>Let's embark on this digital journey together and make tech a little more exciting!✨</li>
                  </ul>
                </div>
              </div>

              <div className='experince-Box'>
                <div className='hd-exp'>
                <img src={Experience} alt=''/>
                </div>
                <div className='experience-content'>
                  <ul className='lists'>
                    <li>Hi there👋! I'm a self-taught developer with a zest for life.</li>
                    <li>I thrive on adventure, both in the coding world and beyond.</li>
                    <li>When I'm not immersed in lines of code, you'll find me lost in the pages of a good book📚,
                      exploring new places, and embracing every opportunity to have fun.</li>
                    <li>Let's embark on this digital journey together and make tech a little more exciting!✨</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className='experience-arch'>

              <div className='experince-Box'>
                <div className='hd hd-top'>
                  <h2>Certificate</h2>
                </div>
                <div className='experience-content'>
                  <ul className='lists'>
                    <li>Hi there👋! I'm a self-taught developer with a zest for life.</li>
                    <li>I thrive on adventure, both in the coding world and beyond.</li>
                    <li>When I'm not immersed in lines of code, you'll find me lost in the pages of a good book📚,
                      exploring new places, and embracing every opportunity to have fun.</li>
                    <li>Let's embark on this digital journey together and make tech a little more exciting!✨</li>
                  </ul>
                </div>
              </div>

              <div className='experince-Box'>
                <div className='hd hd-bottom'>
                  <h2>Skills</h2>
                </div>
                <div className='experience-content'>
                  <ul className='lists'>
                    <li>Hi there👋! I'm a self-taught developer with a zest for life.</li>
                    <li>I thrive on adventure, both in the coding world and beyond.</li>
                    <li>When I'm not immersed in lines of code, you'll find me lost in the pages of a good book📚,
                      exploring new places, and embracing every opportunity to have fun.</li>
                    <li>Let's embark on this digital journey together and make tech a little more exciting!✨</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

