import React from 'react';
import {connect} from 'react-redux';
import Banar from '../../Components/Banar/Banar'
import {Container, Row, Col, Card, Media} from 'react-bootstrap';
import Image1 from './images/info.svg';
import GoalsImg from './images/goals.svg';

import './Home.css';
import TextImg from '../../Components/Text-Img/Text_img'

const Home = props => {
    return (
        <React.Fragment>
            <Banar PageTitle='home page' page='home' />
            <TextImg title='about' img={Image1} />
            <section className='goals-section'>
                <Container>
                    <h3 className='section-title'> goals </h3>
                    <Row>
                        <Col lg='6'>
                            <div className='img'>
                                <img src={GoalsImg} alt={GoalsImg} />
                            </div>
                        </Col>
                        <Col lg='6'>
                            {props.Goals.map((goal, index) => {
                                return (
                                    <div className='goal'>
                                        <Media>
                                            <i className={goal.icon}></i>
                                            <Media.Body>
                                                <h5> {goal.title}</h5>
                                                <p> {goal.disc}</p>
                                            </Media.Body>
                                        </Media>
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='features'>
                <Container>
                    <h3 className='section-title'> features </h3>
                    <Row>
                        {props.Featuers.map((featuer, index) => {
                            return (
                                <Col lg='3'>
                                    <Card className='moving-card'>
                                        <Card.Header> {featuer.title}s </Card.Header>
                                        <Card.Img variant="top" src={featuer.img}/>
                                        <Card.Body>
                                            <Card.Text>
                                            {featuer.disc}
                                            </Card.Text>
                                        </Card.Body>
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

function MapStateToProps(state)  {
    return {
        Featuers: state.Featuers,
        Goals: state.Goals
    }
  }
  
  export default connect(MapStateToProps)(Home);