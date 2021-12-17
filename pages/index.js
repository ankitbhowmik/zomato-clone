import React from 'react';
import Brands from '../components/index/Brands';
import FilterChips from '../components/index/FilterChips';
import Inspiration from '../components/index/Inspiration';

import Navbar from '../components/index/navbar';
import Recommendation from '../components/index/Recommendation';
import TabList from '../components/index/TabList';

const Index = () => {
    return (
        <div className="main">
            <Navbar />
            <TabList />
            <FilterChips />
            <Inspiration />
            <Brands />
            <Recommendation />
        </div>
    )
}

export default Index
