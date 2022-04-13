import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return ( 
        <React.Fragment>
            <Container style={{ padding: 20 }}>
                <Row style={{ justifyContent: 'center'}}>
                    <Col xs='auto' style={{ marginTop: 20, alignItems: 'right', fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#A3956D' }}>
                        {/* <p style={{ marginTop: 20, alignItems: 'right', fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#A3956D' }}>musicians: johnstown, pa</p> */}
                        <a className='footer-link' style={{ color: '#A3956D'}} href="mailto:waltandjackie@gmail.com">waltandjackie@gmail.com</a>
                    </Col>
                    <Col xs='auto' style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <SocialIcon url= 'https://www.facebook.com/waltandjackie' style={{ margin: 9 }}/>
                        <SocialIcon url= 'https://www.bandsintown.com/a/4261532-walt-and-jackie?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar' style={{ margin: 9 }}/>
                        <SocialIcon url= 'https://www.youtube.com/channel/UClZEqPxlRZEqVerkh2MYiFQ' style={{ margin: 9 }}/>
                    </Col>
                    <Col xs='auto'>
                        <p style={{ marginTop: 20, alignItems: 'right', fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#A3956D' }}>booking: 814.418.7154</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}

export default Footer;