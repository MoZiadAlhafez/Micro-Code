import React from 'react';
import {connect} from 'react-redux';
import './Banar.css';
const Banar = props => {
    return (
        <div className='banar'>
            <h2 className='h1'> {props.LogoName} <br /> {props.PageTitle} </h2>
        </div>
    )
}

function MapStateToProps(state)  {
    return {
        LogoName: state.LogoName
    }
  }
  
  export default connect(MapStateToProps)(Banar);