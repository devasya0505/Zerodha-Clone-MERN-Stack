import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universe/>
        </>
     );
}

export default ProductPage;