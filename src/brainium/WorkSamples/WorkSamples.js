import { Button } from 'reactstrap'
import React from 'react'

function WorkSamples() {
    return (
        <div style={{ display: "grid", placeItems: "center", height:"100vh" }}>
           <div style={{ height:"0vh" }}>
           <h4 style={{ fontWeight:1000 }} className="d-flex justify-content-center">LOOKING FOR RELEVANT</h4>
            <h1 style={{ fontWeight:1000, fontSize:"4rem" }}>WORK SAMPLES?</h1>
            <div className="d-flex justify-content-center">
            <Button className="bgcWorkSamples" style={{ fontSize:11, backgroundColor:"transparent", color:"black", marginLeft:20 }}>Request Curated Portfolio</Button>

            </div>
           </div>
                        
        </div>
    )
}

export default WorkSamples
