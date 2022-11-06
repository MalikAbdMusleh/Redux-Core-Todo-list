import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  list: [ { id: 0, title: "No Thing to do ", description: "yet" }],
  stateProp1: false ,
  status: "idle",
};

export const rootReducer = (state =initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, stateProp1: true };
    case 'FAILED':
      return { ...state, stateProp1: false };
      case 'CREATE':
        action.payload.id=state.list.length
        return { ...state, list: state.list.concat([action.payload]) };
        case 'UPDATE':
          var newList  = state.list.map((e) => {
            if (e.id == action.payload.id) {
             return {id:e.id,title: action.payload.title, description:  action.payload.description }
           }
           return e
           });
          return { ...state, list: newList };
          case 'DELETE':
            var newList =state.list.filter((e) => e.id != action.payload)
            return { ...state, list: newList };
        default:
      return state;
  }
};

export const store = configureStore({reducer:rootReducer});
