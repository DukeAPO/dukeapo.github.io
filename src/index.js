import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/_base.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
