import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './Store/reducer/reducer'
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(
Reducer, composeEnhancers(
    applyMiddleware(thunk)
)

)

const app=(
    <Provider store={store}>
        <App/>
    </Provider>

)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();