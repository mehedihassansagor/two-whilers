import React from 'react';
import ComingProject from '../ComingProject/ComingProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainHead from '../MainHead/MainHead';
import Member from '../Member/Member';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainHead></MainHead>
            <Services></Services>
            <Review></Review>
            <ComingProject></ComingProject>
            <Member></Member>
            <Footer></Footer>

        </div>
    );
};

export default Home;