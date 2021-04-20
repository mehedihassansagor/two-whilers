import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FireBase.config';
import GoogleButton from 'react-google-button'
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  console.log(loggedInUser.displayName)

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogle = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const newUser ={
          email: result.user.email
        }
        var credential = result.credential;
        var token = credential.accessToken;
        // var user = result.user;
        setLoggedInUser(newUser)
        history.replace(from)
       
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  return (
    <section>
      <Header></Header>
      <div style={{ width: '40%', margin: "auto", padding: '0%', marginTop: '5%', boxShadow: "10px 10px 40px gray", backgroundColor: "white", borderRadius: "20px" }}>
        <Form style={{ margin: '20px', padding: '10px' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________________or________________________________
<GoogleButton style={{ marginLeft: "100px" }} className="mt-5"
          onClick={handleGoogle}
        />
        <h6 className="text-primary mt-3 " style={{ marginLeft: "20%" }}>Use Google login method others on updating</h6>
      </div>


    </section>
  );
};

export default Login;