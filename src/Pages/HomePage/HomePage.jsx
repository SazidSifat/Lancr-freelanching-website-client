import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeatureTask from '../../Components/Featuretask/FeatureTask';
import { useLoaderData } from 'react-router';
import FindTalent from '../../Components/Findtalentcard/FindTalent';
import WhatClient from '../../Components/WhatClient/WhatClient';

const HomePage = () => {
    const featureData = useLoaderData()
    return (
        <div className='bg-base-200 pb-20 '>
            <Banner />
            <FeatureTask featureData={featureData} />
            <FindTalent />
            <WhatClient/>
        </div>
    );
};

export default HomePage;