//Importing Libraries from React Native and My Other Components
import {
  ACCOUNT_UPDATE,
  ACCOUNT_CREATE
} from '../actions/types';
import firebase from 'firebase';

//This initializes state and the following uses login fro Creat an Account
const INITIAL_STATE = {
  FullName: '',
  Email: '',
  Password: '',
  LibraryCardNumber: '',
  Role: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case ACCOUNT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ACCOUNT_CREATE:
      firebase.auth().createUserWithEmailAndPassword(email, password)
      return INITIAL_STATE;
    default:
      return state;
  }
};
