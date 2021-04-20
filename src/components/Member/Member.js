import React from 'react';
import team from '../image/team.jpg'

const Member = () => {
    return (
        <div className = "container mt-5">
            <h4 className="text-center" style={{color:"#665D1E"}}>They are our team members</h4>
            <div className = "row">
                <div className = "col-md-6">
                    <img style ={{ height:"300px"}} src={team} alt=""/>
                </div>
                <div className = "col-md-4 offset-md-1 d-flex align-items-center">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut officiis perspiciatis explicabo recusandae amet nostrum. Quod, dolores, rerum quaerat a dignissimos ab quisquam dolorem quam voluptatum, tenetur neque exercitationem qui!</p>
                </div>
            </div>
        </div>
    );
};

export default Member;