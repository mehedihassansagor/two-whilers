import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Review from './components/Review/Review';
import DashBoard from './components/DashBoard/DashBoard';
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddReview from './components/AddReview/AddReview'
import AddAdmin from './components/AddAdmin/AddAdmin';
import Order from './Order/Order';
import AllOrder from './components/AllOrder/AllOrder';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path = '/' >
          <Home></Home>
        </Route>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <PrivateRoute path = "/admin">
          <Admin></Admin>
        </PrivateRoute>
        <Route path = "/review">
          <Review></Review>
        </Route>
        <PrivateRoute path = "/product/:product_id">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <PrivateRoute path = "/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <Route path = "/addReview">
          <AddReview></AddReview>
        </Route>
        <Route path = "/addAdmin">
          <AddAdmin></AddAdmin>
        </Route>
        <Route path = "/order">
         <Order></Order>
        </Route>
        <Route path = "/allOrder">
         <AllOrder></AllOrder>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
