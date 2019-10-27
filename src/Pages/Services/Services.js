import React from 'react';
import {connect} from 'react-redux';
import Banar from '../../Components/Banar/Banar'

import {Container, Row, Col, Card, Tabs, Tab, Media} from 'react-bootstrap';

import './Services.css';
import TextImg from '../../Components/Text-Img/Text_img'
import ImgText from '../../Components/Text-Img/Img_text'





import Domain from './images/services/domain.svg';
import BugFixxing from './images/services/bug_fixing.svg';
import CleanCode from './images/services/clean code.svg';




const Services = props => {
    
    return (
        <React.Fragment>
            <Banar PageTitle='services page' />
            
            <section className='services'>
                <Container>
                    <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
                        {props.Services.map((service, index) => {
                            return (
                                <Tab eventKey={index} title={service.title}>
                                    <ImgText title={service.title} img={service.img} />
                                </Tab>
                            )
                        })}
                    </Tabs>
                </Container>
            </section>




            <section className='version-control'>
                <Container>
                    <Row>
                        <Col Lg='6'>
                            <div className='text'>
                                <h3 className='h2'> vresion controls </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <Row>
                                    {props.VersionControls.map((control, index) => {
                                         return (
                                            <Col lg='6' xs='6'>
                                                <Card>
                                                    <i className={control.icon}></i>
                                                    <Card.Body>
                                                        <Card.Title> {control.title} </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                         )
                                    })}
                            </Row>
                        </Col>
                    </Row>
                </Container>                
            </section>


            <TextImg title='Buy Domain' img={Domain} />
            <section className='awesome-featuers'>
                <Container>
                    <h3 className='section-title'>awesome services</h3>
                    <Row>
                        <Col lg='6'>
                        <Media>
                            <img 
                                width={200}
                                height={160}
                                className="mr-3 xs-hidden sm-hidden"
                                src={BugFixxing}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5 className='card-title'>Bug Fixing</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis.
                                </p>
                            </Media.Body>
                        </Media>
                        </Col>
                        <Col lg='6'>
                        <Media>
                            <img
                                width={200}
                                height={160}
                                className="mr-3 xs-hidden sm-hidden"
                                src={CleanCode}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5 className='card-title'>Clean Code</h5>
                                <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis.
                                </p>
                            </Media.Body>
                        </Media>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </React.Fragment>
    )
}

function MapStateToProps(state)  {
    return {
        Services: state.Services,
        VersionControls: state.VersionControls
    }
  }
  
  export default connect(MapStateToProps)(Services);