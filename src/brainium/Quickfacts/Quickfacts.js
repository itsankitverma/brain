import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import developer_hiring from '../img/developer_hiring.svg'

function Quickfacts() {
    return (
        <div  style={{ display: "grid", placeItems: "center", height:"100vh" }}>
                <div>
                    <h3 style={{ fontWeight:1000, fontSize:35, display: "grid", placeItems: "center",marginTop:"20px" }}>Some Quick Facts About Us</h3>
                    <Container style={{ marginTop:"40px" }}>
                    <Row>
                    <Col xs="3">
                          <Row>
                          <Col xs="6"> <img src={developer_hiring} alt="" width="60px"/> </Col>
                            <Col xs="6"> 
                                <Row style={{ fontSize:"20px", position:"relative", left:"-60px" }}>
                                    <Col xs="12">10+ Years</Col>
                                    <Col xs="12">Experience</Col>
                                </Row>
                            </Col> 
                            </Row>  
                          </Col>      
                          <Col xs="3">
                          <Row>
                          <Col xs="6"> <img src={developer_hiring} alt="" width="60px"/> </Col>
                            <Col xs="6"> 
                            <Row style={{ fontSize:"20px", position:"relative", left:"-60px" }}>
                                    <Col xs="12">200+</Col>
                                    <Col xs="12">Team</Col>
                                </Row>
                            </Col> 
                            </Row>  
                          </Col>      
                          <Col xs="3">
                          <Row>
                          <Col xs="6"> <img src={developer_hiring} alt="" width="60px"/> </Col>
                            <Col xs="6"> 
                            <Row style={{ fontSize:"20px", position:"relative", left:"-60px" }}>
                                    <Col xs="12">94%</Col>
                                    <Col xs="12">Happy Customers</Col>
                                </Row>
                            </Col> 
                            </Row>  
                          </Col>      
                          <Col xs="3">
                          <Row>
                          <Col xs="6"> <img src={developer_hiring} alt="" width="60px"/> </Col>
                            <Col xs="6"> 
                            <Row style={{ fontSize:"20px", position:"relative", left:"-60px" }}>
                                    <Col xs="12"  style={{ width:"100%" }}>35+ Countries</Col>
                                    <Col xs="12">Served</Col>
                                </Row>
                            </Col> 
                            </Row>  
                          </Col>                          
                    </Row>  
                    <Row style={{ marginTop:"20px" }}> 
                          <Col xs="12">
                          <Row>
                          <Col xs="6"> <img src={developer_hiring} alt="" width="60px"/> </Col>
                            <Col xs="6"> 
                            <Row style={{ fontSize:"20px", position:"relative", left:"-60px" }}>
                                    <Col xs="12"  style={{ width:"100%" }}>35+ Countries</Col>
                                    <Col xs="12">Successful Projects</Col>
                                </Row>
                            </Col> 
                            </Row>  
                          </Col> 
                    </Row>                      
                    </Container>
                </div>
        </div>
    )
}

export default Quickfacts
