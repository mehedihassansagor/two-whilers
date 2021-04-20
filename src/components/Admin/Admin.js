import React from 'react';
import { Link } from 'react-router-dom';
import AddEvents from '../AddEvents/AddEvents';
import AddReview from '../AddReview/AddReview';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className = "row container mt-5">
            <div className = "col-md-2 offset-md-1" >
                <Sidebar></Sidebar>
            </div>
            <div className = "col-md-8" style = {{marginLeft:"20px" ,backgroundColor:"#FAEBD7",padding:"10%"}}>
            <AddEvents></AddEvents>
            </div>
        </div>
    );
};

export default Admin;