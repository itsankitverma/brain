import {Button}  from 'reactstrap'
import React from 'react'
import developer_hiring from '../img/developer_hiring.svg'

function WhatClientSay() {
    return (
        <div style={{ display: "grid", placeItems: "center", height:"100vh" }}>
            <div>
                <h2 style={{ display: "grid", placeItems: "center" }}>What Do Our Clients Say?</h2>
                <img src={developer_hiring} style={{ borderRadius:"50%", position:"relative", left:"250px", top:"20px" }} height="120" alt=""/>
                <h6 style={{ marginTop:50, }}>“Working with Brainium has been nothing short of excellent. The response time, <br/> commitment and delivery far exceeded my expectations. This is the third project <br/> I have done with the company, with many more to come in the years <br/> ahead. Thank you for all you did.”</h6>
                <h2>Aleem Hasham</h2>
                <Button className="bgcWorkSamples" style={{ fontSize:11, backgroundColor:"transparent", color:"black", marginLeft:20 }}>Request Curated Portfolio</Button>

            </div>
        </div>
    )
}

export default WhatClientSay
