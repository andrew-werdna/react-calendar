import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const store = createStore(reducerFunction);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
