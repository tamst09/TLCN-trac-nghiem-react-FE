import { React } from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginPage} />
        <Route path='/notfound' component={NotFound} />
        <Redirect to='/notfound' />
      </Switch>
    </Router>
  );
}
export default App;
