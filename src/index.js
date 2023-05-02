import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */

const planeCount = (state=[], action) => {


}


/** TODO: Create store */

const planeStore = createStore(
    combineReducers({
      planeCount,
      
    }),
    applyMiddleware(
      logger
    )
  );

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={planeStore}>
            <App />
        </Provider>
    </React.StrictMode>
);