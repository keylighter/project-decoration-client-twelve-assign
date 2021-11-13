
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
import Notfound from './Pages/Notfound/Notfound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/exploreproduct'>
              <ExploreProducts></ExploreProducts>
            </Route>

            <PrivateRoute path='/place-order'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
