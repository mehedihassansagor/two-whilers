import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState({})

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL,
        };

        const url = `https://salty-island-77539.herokuapp.com/addReview`
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

    const handleImageUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '90b1ff1b4694ad0d8de67868cf2d06c8');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className = 'row container mt-5'>
            <div className="col-md-2 offset-md-1" >
                <Sidebar></Sidebar>
            </div>
            <div className = "col-md-8" style = {{marginLeft:"20px" ,backgroundColor:"#FAEBD7",padding:"10%"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{color: 'red',marginBottom:'10px'}}>Add Review</h1>
                 Name: &nbsp;<input  placeholder="name" name="name" {...register("name")} />
                <br />
                <br />
                Description: &nbsp;<input  placeholder="description" name="description" {...register("description")} />
                <br />
                <br />
                <input type="file" onChange={handleImageUpload} />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddEvents;