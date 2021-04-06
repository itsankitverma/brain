import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import app_development from '../img/app_development.svg'
import developer_hiring from '../img/developer_hiring.svg'
import digital_marketing from '../img/digital_marketing.svg'
import web_development from '../img/web_development.svg'
import '../../App.css'

function Solutions() {

    function Titles() {
        return(
            <>
                      <h4>We Offer Quality Services and Solutions</h4> <br/>
                      <p>to start-ups and enterprises across the globe</p>
            </>
        )
    }

    const Cards = () => {

        return (
            <>
                <div style={{ display:"flex" }}>
                    <Card className="borderGlow">
                        <CardImg top width="100%" style={{ width:"50px", marginTop:50 ,position:"relative", left:"60px"}} src={developer_hiring} alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h5" style={{ fontSize:11 }}>Developer Hiring</CardTitle>
                        <CardText style={{ fontSize:11 }}>We let you hire developers <br/> from our talent pool at competitive <br/> prices with Dedicated hiring, Project <br/> based hiring, and Hourly hiring <br/> options.</CardText>
                        <Button className="bgc" style={{ fontSize:11, backgroundColor:"transparent", color:"black" }}>Learn More</Button>
                        </CardBody>
                    </Card>
                    <Card className="borderGlow"> 
                        <CardImg top width="100%" style={{ width:"60px", marginTop:50 ,position:"relative", left:"60px"}} src={app_development} alt="Card image cap" />
                        <CardBody style={{ fontSize:11 }}>
                        <CardTitle tag="h5">App Development</CardTitle>
                        <CardText>We develop and design applications <br/> for iOS, android and windows <br/> devices using our expertise in <br/> native and hybrid technologies.</CardText>
                        <Button className="bgc" style={{ fontSize:11, backgroundColor:"transparent", color:"black" }}>Learn More</Button>
                        </CardBody>
                    </Card>
                    <Card className="borderGlow">
                        <CardImg top width="100%" style={{ width:"60px", marginTop:50 ,position:"relative", left:"60px"}} src={web_development} alt="Card image cap" />
                        <CardBody style={{ fontSize:11 }}>
                        <CardTitle tag="h5">Web Development</CardTitle>
                        <CardText>We offer agile and cost <br/>-efficient web development solutions <br/>to give you a peerless experience <br/> in creating a strong online footprint.</CardText>
                        <Button className="bgc" style={{ fontSize:11, backgroundColor:"transparent", color:"black" }}>Learn More</Button>
                        </CardBody>
                    </Card>
                    <Card className="borderGlow">
                        <CardImg top width="100%" style={{ width:"60px", marginTop:50 ,position:"relative", left:"60px"}} src={digital_marketing} alt="Card image cap" />
                        <CardBody style={{ fontSize:11 }}>
                        <CardTitle tag="h5">Digital Marketing</CardTitle>
                        <CardText> We provide integrated digital marketing <br/> solutions with the strategy and <br/> approach that is best suited <br/> to grow your business.</CardText>
                        <Button className="bgc" style={{ fontSize:11, backgroundColor:"transparent", color:"black" }}>Learn More</Button>
                        </CardBody>
                    </Card>
              </div>   
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
                <Cards />
            </div>
        </>
    )
}

export default Solutions
