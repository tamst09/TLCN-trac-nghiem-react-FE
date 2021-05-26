import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import './styles.css'
import './profile_styles.css'
import Main from '../components/Main'
import UpdateProfile from '../components/UpdateProfile'
import ChangePassword from '../components/ChangePassword'
import { useState } from 'react'


function ShowProfile(props) {
    let { path, url } = useRouteMatch();
    const [activeTab, setactiveTab] = useState(1);

    return (
        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            <img loading="lazy" src="https://res.cloudinary.com/tam-tht/image/upload/v1620825575/samples/people/boy-snow-hoodie.jpg" className="img-responsive" alt="Avatar" />
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">Tam Tran</div>
                            <div className="profile-usertitle-job">tamst09</div>
                        </div>
                        <div className="profile-usermenu">
                            <ul className="nav">
                                <li className={"tab " + (activeTab === 1) ? "active" : ""}>
                                    <Link to={`${url}`} asp-controller="Account" asp-action="ShowProfile">
                                        <i className="glyphicon glyphicon-user" />
                                                Infomation
                                        </Link>
                                </li>
                                <li className={"tab " + (activeTab === 2) ? "active" : ""}>
                                    <Link to={`${url}/update-information`} asp-controller="Account" asp-action="UpdateProfile">
                                        <i className="glyphicon glyphicon-pencil" />
                                                Update infomation
                                        </Link>
                                </li>
                                <li className={"tab " + (activeTab === 3) ? "active" : ""}>
                                    <Link to={`${url}/change-password`} asp-controller="Account" asp-action="ChangePassword">
                                        <i className="glyphicon glyphicon-lock"></i>
                                                Change password
                                            </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        <Switch>
                            <Route exact path={path} component={Main} />
                            <Route path={`${path}/update-information`} component={UpdateProfile} />
                            <Route path={`${path}/change-password`} component={ChangePassword} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProfile;

