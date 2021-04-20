import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";


const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
      
    const eventData = {
        email: data.name,
        isAdmin:true,
    };
    // console.log(eventData);
    const url = `https://salty-island-77539.herokuapp.com/addAdmin`
    console.log(eventData)
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })
    .then(res =>console.log('server side response',res))
};

    return (
        <div className = "row container mt-5">
            <div className = "col-md-2 offset-md-1" >
                <Sidebar></Sidebar>
            </div>
            <div className = "col-md-8" style = {{marginLeft:"20px" ,backgroundColor:"#FAEBD7",padding:"10%"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{color: 'salmon',marginBottom:'10px'}}>Add Email</h1>
            
            <input  placeholder="email" name="name" {...register("name")} />
                <br />
                <br />
                <input type="submit" value="Add Admin"/>
            </form>
            </div>
        </div>
    );
};

export default AddAdmin;