import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [events,setEvents] = useState([]);

    useEffect(() =>{
        fetch('https://salty-island-77539.herokuapp.com/events')
        .then(res => res.json())
        .then(data =>setEvents(data))
    },[])
    return (
        <div className ="container mt-5 row" style={{marginLeft:"15%"}}>
            <h4 style = {{marginLeft:"35%",color:'blue',fontWeight:'700'}}>Our services</h4>
            {
                events.map(event =><ServiceCard key={event._id} event={event}></ServiceCard>)
            }
    </div>
    );
};

export default Services;