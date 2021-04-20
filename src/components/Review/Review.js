import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard'
import AddReview from '../AddReview/AddReview'


const Services = () => {
    const [events,setEvents] = useState([]);

    useEffect(() =>{
        fetch('https://salty-island-77539.herokuapp.com/review')
        .then(res => res.json())
        .then(data =>setEvents(data))
    },[])
    return (
        <div className ="container mt-5 row" style={{marginLeft:"15%"}}>
            <h4 style = {{marginLeft:"30%",color:"	#9966CC",fontWeight:'700'}}>Reviews from our Customers</h4>
            {
                events.map(event => <ReviewCard key={event._id} event={event}></ReviewCard>)
            }
    </div>
    );
};

export default Services;