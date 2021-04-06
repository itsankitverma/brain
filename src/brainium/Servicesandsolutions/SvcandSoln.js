import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import app_development from "../img/app_development.svg";

  
function Solutions() {
    return(
        <>
            <div className="container">
                
            <Row >
                <Col>  
                <div>
                <Card className="borderGlow">
                    <CardImg top width="100%" style={{ width:"50px",marginTop:50 ,position:"relative", left:"40px" }} src={app_development} alt="Card image cap" />
                    <CardBody>
                    <CardText style={{ width:"100px" }}>Chat App</CardText>
                    </CardBody>
                </Card>
                </div>
                </Col>
                <Col>
                <div>
                <Card className="borderGlow">
                <CardImg top width="100%" style={{ width:"50px",marginTop:50 ,position:"relative", left:"40px" }} src={app_development} alt="Card image cap" />
                     <CardBody>
                    <CardText style={{ width:"100px" }}>Classified App</CardText>
                    </CardBody>
                </Card>
                </div>
                </Col>
                <Col>
                <div>
                <Card className="borderGlow">
                <CardImg top width="100%" style={{ width:"50px",marginTop:50 ,position:"relative", left:"40px" }} src={app_development} alt="Card image cap" />
                    <CardBody>
                    <CardText style={{ width:"100px" }}>Crowdfunding</CardText>
                    </CardBody>
                </Card>
                </div>
                </Col>
                <Col>
                <div>
                <Card className="borderGlow" style={{ marginRight:"50px" }}>
                <CardImg top width="100%" style={{ width:"50px",marginTop:50 ,position:"relative", left:"40px" }} src={app_development} alt="Card image cap" />
                    <CardBody>
                    <CardText style={{ width:"200px" }}>Custom Product Design</CardText>
                    </CardBody>
                </Card>
                </div>
                </Col>                
            </Row>
            </div>
        </>
    )
}

function BtnContainer() {
    return(
        <>
             <Button className="bgc" style={{ fontSize:11, backgroundColor:"transparent", color:"black" }}>Learn More</Button>
        </>
    )
}


function SvcandSoln() {
    return (
        <div style={{ display:"grid", placeItems:"center", height:"100vh" }}>
           <div>
           <h4 style={{ display:"flex", justifyContent:"center" }}>Solutions</h4>
            <p style={{ display:"flex", justifyContent:"center" }}>that are ready-made, bespoke and save your time and money</p>
            <Solutions />
            <div style={{ display:"flex", justifyContent:"center" }}> 
            <BtnContainer/>
            </div>
           </div>
        </div>
    )
}

export default SvcandSoln
