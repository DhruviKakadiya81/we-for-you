import { createStore } from 'redux';
const initialState = {
    firstname:'',
    lastname:'',
  };
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FIRSTNAME':
        return {
          ...state,
        firstname:state.firstname,
        };
      case 'LASTNAME':
        return {
          ...state,
          lastname:state.lastname,
        };
      default:
        return state;
    }
  };  

  
  const store = createStore(reducer);
