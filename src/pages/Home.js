import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import TextSectionA from '../components/TextSectionA';
import TextSectionB from '../components/TextSectionB';
import TextSectionC from '../components/TextSectionC';
import CTA from '../components/CTA';



export function Home() {
    return (
        <div>
            <ImageSlider />
            <TextSectionA />
            <TextSectionB />
            <TextSectionC />
            <CTA />
            <Footer />
        </div>
    );
}