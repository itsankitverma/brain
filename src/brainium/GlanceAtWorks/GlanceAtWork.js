import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import hibashi from '../img/hibashi.png'
import kidfit from '../img/kidfit.png'
import psychedeli from '../img/psychedeli.png'
import myrico from '../img/myrico.png'

function Items() {
    return (
        <div style={{ display: "grid", placeItems: "center", height:"100vh" }}>
            <Container>
                <Row >
                    <Col xs="6">
                        <h2>HIBASHI FURNITURE</h2>
                        <p>Powered by the passion for ‘Quality Beyond Class’, they offer a huge collection of exquisite quality furniture all across the United States that are made with a personal touch, and a fine blend of craft and ergonomics.

                        To impressively showcase the range of furniture they offer, we built a well-structured website with special attention to visuals, user experience, and functionality to grab the visitors' eyeballs and make it super easy for them to browse, find, & buy.

</p>
                    </Col>
                    <Col xs="6"><img src={hibashi} alt="" height="300px" style={{ maxWidth: "100%" }} /></Col>
                </Row>
                <Row>
                    <Col xs="6"><img src={kidfit} alt="" height="300px" style={{ maxWidth: "100%" }} /></Col>
                    <Col xs="6">
                        <h2>KIDFIT</h2>
                        <p>It is a streaming music service that includes songs and workouts that are used in the KID-FIT preschool P.E. program created by Aerobic Fitness Consultants, Inc. The KID-FIT Preschool P.E. program has been operating since 1994.

                        The app needed to be quick loading, easy to navigate with a user interface that is super engaging and pleasing for kids. So, we designed the UI in that way with optimum usage of colors, themes, & other elements. We enabled music streaming, offline mode, playlists, age-appropriate search, and content, etc.
</p>
                    </Col>

                </Row>
                <Row>
                    <Col xs="6">
                        <h2>PSYCHEDELI</h2>
                        <p>They are a locally owned Caterer in Canberra, Australia. We helped them achieve top rankings on search engine results with their new website. With well-planned on-page and off-site optimization in line with the SEO guidelines, the web pages acquired top spots in search engine result pages.
</p>
                    </Col>
                    <Col xs="6"><img src={psychedeli} alt="" height="300px" style={{ maxWidth: "100%" }} /></Col>
                </Row>
                <Row>
                <Col xs="6"><img src={myrico} alt="" height="300px" style={{ maxWidth: "100%" }} /></Col>
                    <Col xs="6">
                        <h2>MYRICO</h2>
                        <p>It is an app that offers a Reusable Deposit Scheme that is totally free. The users can use the app to find new stores, save favourites, get store details, check menus, place orders, make payments, and invite friends for coffee.

                        Due to the kind of utility the app provides, it needed to be an all-round performer, and we built it that way. We designed it to offer a great user experience in terms of look and feel, navigation, and action. All of this, without compromising on the application's ability to deliver it all seamlessly and powerfully.
</p>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}



function GlanceAtWork() {
    return (
        <div style={{ display: "grid", placeItems: "center", height: "150vh" }}>
            <div>
                <h2 style={{ display: "grid", placeItems: "center" }}>A Glance at Our Work</h2>
                <Items />
            </div>
        </div>
    )
}

export default GlanceAtWork
