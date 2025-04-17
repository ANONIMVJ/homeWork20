import React from 'react';
import MainSection from './components/MainSection';
import BrendsSection from './components/BrendsSection';
import Catalog from './components/CatalogSection';
import FeatureSection from './components/FeatureSection';
import PopularProduct from './components/PopularProductSection';
import BlogSection from './components/BlogSection/BlogSection';
import ManufactureSection from './components/ManufactureSection/ManufactureSection';


function Main() {
    return (
        <div>
            <MainSection />
            <Catalog />
            <FeatureSection />
            <PopularProduct />
            <BrendsSection />
            <BlogSection />
            <ManufactureSection />
        </div>
    );
}

export default Main;