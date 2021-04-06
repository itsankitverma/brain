import React from 'react'
import Navbar from '../brainium/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/banner';
import Solutions from './Solutions/Solutions';
import SvcandSoln from './Servicesandsolutions/SvcandSoln';

function index() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Solutions />
            <SvcandSoln />
        </div>
    )
}

export default index
