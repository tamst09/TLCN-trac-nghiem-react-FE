import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Import Pages
import NotFound from './components/NotFound';
import Home from './components/Home';
import { LoginPage } from './features/Authenticate/pages/LoginPage';
import { SignUpPage } from './features/Authenticate/pages/SignUpPage';
import { ForgotPasswordPage } from './features/Authenticate/pages/ForgotPasswordPage';
import { ResetPasswordPage } from './features/Authenticate/pages/ResetPasswordPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginPage} />
        <Route path = '/signup' component={SignUpPage}/>
        <Route path = '/forgotpassword' component={ForgotPasswordPage}/>
        <Route path = '/resetpassword' component={ResetPasswordPage}/>
        <Route path='/notfound' component={NotFound} />
        <Redirect to='/notfound' />
      </Switch>
    </Router>
  );
}
export default App;
