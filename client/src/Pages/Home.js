import React, { useEffect } from 'react';
import AppointmentBanner from '../Components/AppointmentBanner/AppointmentBanner';
import Banner from '../Components/Banner/Banner';
import Blogs from '../Components/Blogs/Blogs';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Infos from '../Components/Infos/Infos';
import Testimonials from '../Components/Testimonials/Testimonials';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="heder-content">
			<Header />
			<Banner />
			<Infos />
			<AppointmentBanner />
			<Testimonials />
			<Blogs />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
