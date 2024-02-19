import React from 'react'

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
                <h5 className="name">Sign in</h5>
                <p className="">to continue to Gmail</p>
            </div>

            <div className="inputs mb-5 mt-5">
                <input type="text" placeholder='Email or Phone' />
                <p className="blue mt-2">Forgot email?</p>
            </div>

            <p className="mb-1 tiny">Not your computer? Use Guest mode to sign in privately.</p>
            <p className="blue">Learn more about using Guest mode</p>

            <div className="d-flex submit mt-5 justify-content-between">
                <p className="create blue">Create account</p>
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
