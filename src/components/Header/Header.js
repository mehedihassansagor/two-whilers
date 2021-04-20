import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <b>Two Wheelers</b> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li>{loggedInUser.name}</li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5 active" aria-current="page" to="/home">Home</Link>
                            </li>
                           
                            <li class="nav-item">
                                <Link class="nav-link ms-5" to = "/dashboard">DashBoard</Link>
                            </li>
                            <li class="nav-item">
                            <Link style ={{backgroundColor:'#D0FF14',borderRadius:'20%',fontWeight:'700'}}class="nav-link ms-5" to="/login">Login</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;