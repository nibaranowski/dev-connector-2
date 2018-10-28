import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import './styles/css/Custom.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
