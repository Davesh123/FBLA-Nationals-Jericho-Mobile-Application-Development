//Importing Libraries from React Native and My Other Components
import {
  ACCOUNT_FETCH_SUCCESS
} from '../actions/types';
import firebase from 'firebase';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case ACCOUNT_FETCH_SUCCESS:
      return state;
    default:
      return state;
  }
};
//This fetches data
