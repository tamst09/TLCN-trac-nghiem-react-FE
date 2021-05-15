import React from 'react';
import { Link } from "react-router-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../assets/home/css/one-page-wonder.min.css';
import '../assets/home/vendor/bootstrap/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to=''>ENGLISH QUIZZES</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/signup' className="nav-link" >Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link" >Log In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Become better at English</h1>
                        <h2 className="masthead-subheading mb-0">Try your best !</h2>
                        <Link to='/login' className="btn btn-primary btn-xl rounded-pill mt-5">Continue</Link>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle" />
                <div className="bg-circle-2 bg-circle" />
                <div className="bg-circle-3 bg-circle" />
                <div className="bg-circle-4 bg-circle" />
            </header>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={process.env.PUBLIC_URL + '/images/homepage/impro.jpg'} alt="Improve skills" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Improve English skills...</h2>
                                <p>Improve your vocabulary, provide opportunities for vocabulary and grammar review.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={process.env.PUBLIC_URL + '/images/homepage/share.jpg'} alt="Share ur quizzes" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h2 className="display-4">Knowledge is about sharing. Share your quizzes with everyone!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={process.env.PUBLIC_URL + '/images/homepage/community.png'} alt="Community spirit" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">Building a community</h2>
                                <p>It would be great if there were people studying together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-5 bg-black">
                <div className="container">
                    <div className="text-center footer_logo"><Link to='/'><img src={process.env.PUBLIC_URL + 'images/homepage/footer-logo.png'} alt="" /></Link></div>
                    <div className="text-center location_main">Help Email : <Link to={{ pathname: "https://mail.google.com" }} target='_blank'>tamst09@gmail.com</Link></div>
                    <p className="m-0 text-center text-white small">Copyright © English quizzes</p>
                </div>
            </footer>
        </div>
    )
}

export default Home;