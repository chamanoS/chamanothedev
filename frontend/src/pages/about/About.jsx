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
            <h4 className='title bottom-title'>Chamano Sidney</h4>
          </div>
          <div className='lines lower'></div>
        </div>
        <div className='about-me'>
          <h1>ABOUT ME</h1>
          <div className='lines lower'></div>
        </div>
       
      </section>
    </>
  )
}

