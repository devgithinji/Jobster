import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";


const container = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    container
)



