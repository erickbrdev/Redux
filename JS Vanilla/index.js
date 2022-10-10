const Redux = require('redux');
const ESTADO_INICIAL = {
  login: false,
  email: "",
};
const FAZERLOGIN = (email) => ({
  type: "LOGIN",
  email,
})

const reducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
      case "LOGIN": 
        return {
          ...state,
          login: !state.login,
          email: action.email
        };
      default: return state 
    }
};

const store = Redux.createStore(reducer);

store.dispatch(FAZERLOGIN("teste@teste.com"))

// console.log(store.getState()); === { login: true, email: 'teste@teste.com' }


// COMBINANDO REDUCERS 

import { combineReducers } from 'redux';
import reduce1 from './reduceOne'
import reduce2 from './reduceTwo'

const combineReducers = combineReducers({
  reduce1,
  reduce2,
});

const combineStore =  createStore(combineReducers)

//console.log(combineStore.getState()); === {ESTADO DO REDUCE1} {ESTADO DO REDUCE2}