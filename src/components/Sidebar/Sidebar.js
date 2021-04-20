import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch('https://salty-island-77539.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data)
            })
    }, [loggedInUser.email])

    return (
        <div style={{ height: "100%", width: "200px", backgroundColor: "gray", padding: '20px', textAlign: 'center' }}>
            <h3>DASHBOARD</h3>
            <div className="link-text"><Link to="/home" className="link-text">Home</Link></div>
            <div className="link-text"><Link to="/addReview" className="link-text">Give Review</Link></div>
           {!isAdmin &&
            <div className="link-text"><Link to="/order" className="link-text">Orders</Link></div>
           }
            {isAdmin && 
                <div >
                    <div className="link-text"><Link to="/allOrder" className="link-text">Orders</Link></div>
                    <div className="link-text"><Link to="/admin" className="link-text">Add Service</Link></div>
                    <div className="link-text"><Link to="/addAdmin" className="link-text">Add Admin</Link></div>
                    
                </div>
            }

        </div>
    );
};

export default Sidebar;