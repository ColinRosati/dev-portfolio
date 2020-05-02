import { combineReducers } from 'redux';
const initState = {
  countX: 0,
  countY: 0,
  countZ: 0,
};
const countReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COUNTX':
      return {...state, countX: action.payload };
      case 'COUNTY':
      return {...state, countY: action.payload };
      case 'COUNTZ':
        return {...state, countZ: action.payload };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
