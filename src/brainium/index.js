import React from 'react'
import Navbar from '../brainium/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/banner';
import Solutions from './Solutions/Solutions';
import SvcandSoln from './Servicesandsolutions/SvcandSoln';
import Partner  from './Partner/Partner';
import GlanceAtWork from './GlanceAtWorks/GlanceAtWork';
import WorkSamples from './WorkSamples/WorkSamples';
import Quickfacts from './Quickfacts/Quickfacts';
import WhatClientSay from './WhatClientsSay/WhatClientSay';

function index() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Solutions />
            <SvcandSoln />
            <Partner />
            <GlanceAtWork />
            <WorkSamples />
            <Quickfacts />
            <WhatClientSay/>
        </div>
    )
}

export default index
