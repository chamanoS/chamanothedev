import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"
import back from "../../assets/images/my-account.jpg"

export const Regsiter = () => {
 
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form className="exform">
            <span>Username *</span>
            <input type='text' required  />
            <span>Email address *</span>
            <input type='email' required  />
            <span>Password *</span>
            <input type='password' required />
            <button type='submit' className='button'>
              Register
            </button>
            <Link to='/login' className='linkx'>
              Login
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}
