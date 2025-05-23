import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeatureTask from '../../Components/Featuretask/FeatureTask';
import { useLoaderData } from 'react-router';
import FindTalent from '../../Components/Findtalentcard/FindTalent';

const HomePage = () => {
    const featureData = useLoaderData()
    return (
        <div>

            <Banner />
            <FeatureTask featureData={featureData} />
            <FindTalent/>


        </div>
    );
};

export default HomePage;