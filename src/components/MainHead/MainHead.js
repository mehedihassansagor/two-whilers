import React from 'react';
import img from '../image/main.jpg'

const MainHead = () => {
    return (
        <main class = " row mt-5 bg-image">
            <div class = "col-md-4 offset-md-1">
                <h1>Your Journey </h1><br/> <h1>Start from here</h1>
                <p className = "text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ipsam ex repellat voluptatibus! Eum facere ullam dolorem provident. Possimus culpa iure facilis vitae deserunt ea, aliquid enim voluptatibus illo porro.</p> 
            <button className="btn btn-primary">feel our ride</button>
            </div>
            <div class = "col-md-6">
                <img src={img} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default MainHead;