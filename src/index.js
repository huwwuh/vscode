import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from "./js/components/Layout";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();
