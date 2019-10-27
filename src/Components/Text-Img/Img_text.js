import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const ImgText = props => {
    return (
        <section className='text-img-section' dataBg={props.dataBg}>
            <Container>
                <Row>
                    <Col xs='12' lg='6'>
                        <div className='img'>
                            <img src={props.img} alt={props.img} />
                        </div>
                    </Col>
                    <Col xs='12' lg='6'>
                        <div className='text'>
                            <h3 className='h2'> {props.title} </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}
export default ImgText