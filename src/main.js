import React from 'react';// eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import 'react-hot-loader/patch';

import store from './stores';
import Router from './router';

import './style/base.scss';


ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router/>
        </Provider>
    </AppContainer>,
    document.querySelector('#app')
);
