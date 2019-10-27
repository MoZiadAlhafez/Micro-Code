import React from 'react';
import { connect } from 'react-redux';
import Banar from '../../Components/Banar/Banar'
import { Container, Row, Col, Nav, Tab, Card, Button, Badge, Media } from 'react-bootstrap';
import TextImg from '../../Components/Text-Img/Text_img';

import './Portfolio.css';

import Analysis from './images/services/analysis.svg';





const Portfolio = props => {
   
    return (
        <React.Fragment>
            <Banar PageTitle='Portfolio page' />
            <TextImg title='some analysis' img={Analysis} dataBg='light' />
            <section className='porfolio'>
                <Container>
                    <h3 className='h2 section-title'> portfolio</h3>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {props.Portfolio.map((portfolio, index) => {
                                        return (
                                            <Nav.Item><Nav.Link eventKey={index}> {portfolio.Name} <Badge variant="primary"> {portfolio.Content.length} </Badge></Nav.Link></Nav.Item>
                                        )
                                    })}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {props.Portfolio.map((portfolio, index) => {
                                        return (
                                            <Tab.Pane eventKey={index}>
                                                <Row>
                                                    {portfolio.Content.map(item => {
                                                        return (
                                                            <Col lg='3'>
                                                                <Card style={{ width: '90%' }}>
                                                                    <Card.Img style={{ width: '90%' }} variant="top" src={item.Img} />
                                                                    <Card.Body>
                                                                        <h6> {item.Project} </h6>
                                                                        <Button variant="primary">live preview</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                        )
                                    })}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>




            <section className='team'>
                <Container>
                    <h3 className='h2 section-title'> our awesome team</h3>
                    <Row>
                        {props.Team.map((man, index) => {
                            return (
                                <Col lg='3'>
                                    <Card className='moving-card'>
                                        <Card.Header>
                                            <ul className='reset-ul'>
                                                {man.SocialMedia.map(social => {
                                                    return (
                                                        <li> <i className={social.icon}></i> </li>
                                                    )
                                                })}

                                            </ul>
                                        </Card.Header>
                                        <Card.Img variant="top" src={man.img} />
                                        <Card.Body>
                                            <Card.Title>{man.name}</Card.Title>
                                            <h6>{man.jop}</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                </Container>
            </section>
            <section className='testimonials'>
                <Container>
                    <h3 className='h2 section-title'> testimonials</h3>
                    <Row>
                        {props.Testimonials.map((client, index) => {
                            return (
                                <Col lg='4'>
                                    <Card className='moving-card'>
                                        <Card.Body>
                                            <Media>
                                                <img
                                                    width={80}
                                                    height={80}
                                                    className="mr-3"
                                                    src={client.img}
                                                    alt="Generic placeholder"
                                                />
                                                <Media.Body>
                                                    <q>
                                                        {client.say}
                                                    </q>
                                                </Media.Body>
                                            </Media>
                                        </Card.Body>
                                        <Card.Footer>
                                            <h5>{client.name}</h5>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

function MapStateToProps(state) {
    return {
        Portfolio: state.Portfolio,
        Team: state.Team,
        Testimonials: state.Testimonials
    }
}

export default connect(MapStateToProps)(Portfolio);