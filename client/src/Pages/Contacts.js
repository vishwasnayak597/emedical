import React, { useEffect } from 'react';
import '../App.css';
import Banner from '../Components/Banner/Banner';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Contacts = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="heder-content">
        <Header />
        <Banner />
        <Contact />
        <Footer />
    </div>
    );
};

export default Contacts;