//Importing Libraries from React Native and My Other Components
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

//This is Redux and updating constantly the email as it is Changed
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

//This is Redux and updating constantly the password as it is Changed
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

//This is the logic behing whether allowing access or denying them access by using authentication from firebase
export const loginUser = ({ email, password }) => {
  return (dispatch) => {

    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(user => loginUserSuccess(dispatch, user))
     .catch(() => {
       firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => loginUserFail(dispatch))
//Make a Page for Creating an Account
      .catch (() => loginUserFail(dispatch));
      });
  };
};

//When a User Fails to Login
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

//When a User Successfully Logs in and brings them to the home page
const loginUserSuccess = (dispatch, user) => {
  dispatch ({
      type: LOGIN_USER_SUCCESS,
      payload: user
  });
  Actions.Home();
};
