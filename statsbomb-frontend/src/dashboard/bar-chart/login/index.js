import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './index.scss'

export default function Login() {
    return(
        <Fragment>
            <div class="cover">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3><img src='https://res.cloudinary.com/skiltime/image/upload/v1648654818/statbomb_spvfau.svg' alt=''/></h3>
                <label className='loglabel' htmlFor="username">Username</label>
                <input className='loginput' type="text" placeholder="Email or Phone" id="username" />

                <label className='loglabel' htmlFor="password">Password</label>
                <input className='loginput' type="password" placeholder="Password" id="password" />

                <Link to="/dashboard"><button className='logbutton'>Please Login</button></Link>
                <div class="social">
                <div class="go"><i class="fab fa-google"></i>  Google</div>
                <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </Fragment>
    )
}