import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import Sidebar from '../components/Sidebar/Sidebar';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

const [bookings,setBookings] = useState([]);
console.log(bookings)

useEffect(()=>{
    fetch('https://salty-island-77539.herokuapp.com/order?email='+loggedInUser.email)
    .then(res =>res.json())
    .then(data =>setBookings(data))
},[loggedInUser.email])

    return (
        <div>
            <div className = "row container mt-5">
            <div className = "col-md-2 offset-md-1" >
                <Sidebar></Sidebar>
            </div>
            <div className = "col-md-8" style = {{marginLeft:"20px" ,backgroundColor:"#FAEBD7",padding:"10%"}}>
               <h4>There are,{bookings.length} bookings</h4> 
               {
                   bookings.map(book =><li key={book._id}>{book.name} <br/> {book.email} <br/> {book.productName}  <br/> {book.country} <br/> {book.phone} <div style={{border:"1px solid",textAlign:"center"}}>pending....</div></li>)
               }
            </div>
        </div>
        </div>
    );
};

export default Order;