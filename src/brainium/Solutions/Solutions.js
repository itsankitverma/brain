import React from 'react'

function Solutions() {

    function Titles() {
        return(
            <>
                      <h4>We Offer Quality Services and Solutions</h4> <br/>
                      <p>to start-ups and enterprises across the globe</p>
            </>
        )
    }

    const center = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"80vh"
    } 

    return (
        <>
            <div style={center}>
                <Titles />
            </div>
        </>
    )
}

export default Solutions
