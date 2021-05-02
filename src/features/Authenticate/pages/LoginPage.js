import {
    Link
} from "react-router-dom";

// import assets
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../../assets/authenticate/vendor/fontawesome-free/css/all.min.css';
import '../../../assets/authenticate/css/fontgoogleapis.css';

export const LoginPage = () => {
    return (
        <div className="bg-gradient-primary">
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <img style={{ maxWidth: '100%', maxHeight: '100%', backgroundSize: 'cover' }} src={process.env.PUBLIC_URL + '/images/common/loginbg.jpg'} alt="Login background" />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 claclassNamess="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user" placeholder="Enter your username..." />
                                                    <span className="text-danger"></span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" className="form-control form-control-user" placeholder="Password" />
                                                    <span className="text-danger"></span>
                                                    <span id="msg" className="text-danger">Message</span>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember Me</label>
                                                    </div>
                                                </div>
                                                <input type="submit" className="btn btn-primary btn-user btn-block" value="Login" />
                                            </form>
                                            <hr />

                                            <form id="external-account" className="user">
                                                <div>
                                                    <input type="hidden" name="token" id="TokenValue" />
                                                    <input type="hidden" name="provider" id="ProviderValue" />
                                                    <button type="button" className="btn btn-facebook btn-user btn-block">
                                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                    </button>
                                                    <button id="googleSignIn" type="button" className="btn btn-google btn-user btn-block">
                                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                                    </button>
                                                </div>
                                            </form>
                                            <hr />

                                            <div className="text-center">
                                                <Link to='/account/forgot' className="small">Forgot Password?</Link>
                                            </div>
                                            <div className="text-center">
                                                <Link to='/register' className="small">Create an Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}