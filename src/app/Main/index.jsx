import React from 'react';
import MainSection from './components/MainSection';
import BrendsSection from './components/BrendsSection';
import Catalog from './components/CatalogSection';
import FeatureSection from './components/FeatureSection';


function Main() {
    return (
        <div>
            <MainSection />
            <Catalog />
            <FeatureSection />
            <BrendsSection />
        </div>
    );
}

export default Main;