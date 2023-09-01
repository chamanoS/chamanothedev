import React from "react"
import "./styles.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"

export const Login = () => {
 
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form className="exform">
            <span>Username or email address *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required  />
            <button className='button' type='submit' >
              Log in
            </button>

            <Link to='/register' className='linkx'>
              Register
            </Link>
          </form>
        </div>
        <div className="spacex"></div>
      </section>
    </>
  )
}
