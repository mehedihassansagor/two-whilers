import React from 'react';
import img1 from '../../components/image/extra1.jpg'
import img2 from '../../components/image/extra2.jpg'
import img3 from '../../components/image/extra3.jpg'
import ComingProjectCard from './ComingProjectCard';

const extraProject = [{
    name : "Super Bike",
    description:" This bike is supper power",
    img:img1
},
{
    name : "Cool Bike",
    description:" This cool cruser bike",
    img:img2
},
{
    name : "Dashing Bike",
    description:" This is mater of speed",
    img:img3
},  
]

const ComingProject = () => {
        
    
    
    return (
        <div className ="container mt-5 row" style={{marginLeft:"15%"}}>
            <h4 style = {{marginLeft:"35%",color:'#C46210',fontWeight:'700'}}>Our Coming Services</h4>
            <h6 style = {{marginLeft:"25%",color:'#AB274F'}}>You will can also hire them from us and also can get services </h6>
            {
                extraProject.map(project =><ComingProjectCard key={project.name} project={project}></ComingProjectCard>)
            }
    </div>
    );
};

export default ComingProject;