import React from 'react';
import './NotFound.css';
import NotFoundImg from './404.svg';

const NotFound = _ => {
    return (
        <div className='container notfound'>
            <img src={NotFoundImg} alt={NotFoundImg} />
        </div>
    )
}
export default NotFound