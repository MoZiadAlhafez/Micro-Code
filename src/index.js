import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './imagehover.min.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import REDUCER from './Data/DataCenter'

const STORE = createStore(REDUCER)

ReactDOM.render(
<Provider store={STORE}><App /></Provider>, document.getElementById('root'));


