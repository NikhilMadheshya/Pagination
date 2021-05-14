import React from 'react';
import ReactDOM from 'react-dom'
import StoreWrapper from './StoreWrapper';
import App from './App';
import './index.css';


ReactDOM.render(
<StoreWrapper>  
<App/>
</StoreWrapper>  
,document.querySelector('#root'));