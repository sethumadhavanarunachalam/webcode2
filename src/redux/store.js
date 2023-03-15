import { createStore, applyMiddleware ,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carsReducer } from './reducer/carsReducers';
import { alertReducer } from './reducer/alertsReducer';

const composeEnhancers = composeWithDevTools({

});

 const rootReducer = combineReducers({
    carsReducer,
    alertReducer,
 })


export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  
  )
);