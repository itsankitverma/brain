import React from 'react'
import Navbar from '../brainium/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/banner';
import Solutions from './Solutions/Solutions';
import SvcandSoln from './Servicesandsolutions/SvcandSoln';
import Partner  from './Partner/Partner';

function index() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Solutions />
            <SvcandSoln />
            <Partner />
        </div>
    )
}

export default index
