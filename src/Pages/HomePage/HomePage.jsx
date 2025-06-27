import React, { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import FeatureTask from '../../Components/Featuretask/FeatureTask';
import { useLoaderData } from 'react-router';
import FindTalent from '../../Components/Findtalentcard/FindTalent';
import WhatClient from '../../Components/WhatClient/WhatClient';
import Category from '../../Components/Category/Category';
import Newsletter from '../../assets/Newsletter/Newsletter';

const HomePage = () => {

    useEffect(() => {
        document.title = 'Lancr | Home Page'
    }, [])


    const featureData = useLoaderData()
    return (
        <div className='bg-base-200 pb-20 space-y-10'>
            <Banner />
            <Category />
            <FeatureTask featureData={featureData} />
            <FindTalent />
            <WhatClient />
            <Newsletter/>
        </div>
    );
};

export default HomePage;