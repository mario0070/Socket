import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

export default function Google() {
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
                <p className="email btn  dropdown-toggle"><i class="fa-solid fa-user"></i> test@gmail.com</p>
            </div>

            <div className="inputs mb-2 mt-5">
                <input type="text" placeholder='Enter your password' />
                <p className="blue mt-2">Forgot email?</p>
            </div>
            

            <ReCAPTCHA
            sitekey="6Le2tponAAAAAB9qS1OXf_MsvRid6auzOi2n3Xy5"
            />

            <p className="mb-1 mt-5 tiny">Not your computer? Use Guest mode to sign in privately.</p>
            <p className="blue">Learn more about using Guest mode</p>

            <div className="d-flex submit mt-5 justify-content-between">
                <p className="create blue">Forgot password?</p>
                <button className="btn">Next</button>
            </div>
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
