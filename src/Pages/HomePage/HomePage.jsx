import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeatureTask from '../../Components/Featuretask/FeatureTask';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const featureData = useLoaderData()
    return (
        <div>

            <Banner />
            <FeatureTask featureData={featureData} />


        </div>
    );
};

export default HomePage;