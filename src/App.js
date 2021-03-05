import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Link,
  useRouteMatch, useParams
} from "react-router-dom";
// Import Pages
import { Homepage } from "./pages/Homepage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login' component={Loginpage} />
        <Route path='/notfound' component={Notfoundpage} />
        <Redirect to='/notfound' />
      </Switch>
    </Router>
  );
}
const Loginpage = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Please login to continue...</h3>
      <Link to={`${url}/loginok`}>Login</Link>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}
function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
const Notfoundpage = () => {
  return (
    <h3>Page not found...</h3>
  )
}
export default App;
