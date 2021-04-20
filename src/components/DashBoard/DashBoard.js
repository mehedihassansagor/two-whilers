import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser)



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const bookData = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            productName: singleProduct.name,
            country: data.country,
            phone: data.phone,
        }
        // console.log('book data is here', bookData)
        const url = `https://salty-island-77539.herokuapp.com/addOrder`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })


    };

    const { product_id } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://salty-island-77539.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const singleProduct = products.find(pd => pd._id === product_id)
    console.log('singleProduct', singleProduct)



    // console.log(isAdmin)
    return (
        <div>
            <div className="row container mt-5">
                <div className="col-md-2 offset-md-1" >
                    <Sidebar ></Sidebar>
                </div>
                <div className="col-md-8" style={{ marginLeft: "20px", backgroundColor: "#FAEBD7", padding: "10%" }}>

                    <h3>service,{singleProduct?.name}</h3>
                    <br />
                    <h3>Price :$ {singleProduct?.price}</h3>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("country", { required: true })} placeholder='country' />
                            <br />
                            <br />
                            <input {...register("phone", { required: true })} placeholder='phone' />
                            <br />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div style={{ border: '1px solid', marginTop: '10px', boxShadow: "5px 5px 40px", padding: '10px' }} >
                                <Payment></Payment>
                            </div>
                            <br />
                            <br />
                            <input type="submit" value="order now" />
                        </form>
                    </div>



                    <div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;