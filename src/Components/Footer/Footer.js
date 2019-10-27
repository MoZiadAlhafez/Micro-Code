import  React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';
import {connect} from 'react-redux';
const Footer = props => {
    return (
        <footer >
            <Container>
                <Row>
                    <Col lg='9'>
                        <p>all copyrights reserved to <a href='#microcode'> micro code </a> softwear company &copy; 2019 </p>
                    </Col>
                    <Col lg='3'>
                        <ul className='reset-ul'>
                            {props.SocialMedia.map((social, index) => {
                                return (
                                    <li> <a href={social.url}> <i class={social.icon}></i> </a> </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

function MapStateToProps(state) {
    return {
        SocialMedia: state.SocialMedia
    }
}

export default connect(MapStateToProps)(Footer)