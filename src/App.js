import React from "react";
import "./css/App.css";
import AppDialog from './AppDialog'
import MainPage from "./MainPage";
import Header from "./Header";
import Footer from "./Footer";

import './css/index.css';
import { createStore,applyMiddleware  } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer'
import history from "./history";
import { connectRouter,routerMiddleware } from 'connected-react-router'
import {ConnectedRouter} from 'connected-react-router/immutable';
import "bootstrap/dist/css/bootstrap.min.css";


const store = createStore(connectRouter(history)(rootReducer),applyMiddleware(routerMiddleware(history),thunk));


export default function App() {
    return (
<Provider store={store}>

      <div className="App">
        <Header/>
        <MainPage />
          <AppDialog/>
          <Footer/>
      </div>
  </Provider>
    );
  }


