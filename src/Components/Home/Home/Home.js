import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>

        </>
    );
};

export default Home;