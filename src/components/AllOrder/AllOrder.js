import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrder = () => {

    const [allOrder, setAllOrder] = useState([])
    console.log(allOrder)

    useEffect(() => {
        fetch('https://salty-island-77539.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    return (
        <div>
            <div className="row container mt-5">
                <div className="col-md-2 offset-md-1" >
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" style={{ marginLeft: "20px", backgroundColor: "#FAEBD7", padding: "10%" }}>
                <h4>There are,{allOrder.length} bookings</h4> 
                    {
                        
                        allOrder.map(order => <li key={order._id}>{order.name} <br /> {order.email} <br /> {order.productName}  <br /> {order.country} <br /> {order.phone} <div style={{ border: "1px solid", textAlign: "center" }}>pending....</div></li>)
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrder;