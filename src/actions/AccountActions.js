//Importing Libraries from React Native and My Other Components
import {
  ACCOUNT_UPDATE,
  ACCOUNT_CREATE,
  ACCOUNT_FETCH_SUCCESS
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//Exporting the AccountUpdate Variable and assigning a prop and value for Login Form
export const AccountUpdate = ({ prop, value }) => {
  return {
    type: ACCOUNT_UPDATE,
    payload: { prop, value }
  };
};

//This is for Create New Account in Creat New Account and passing prop values
export const AccountCreate = ({ FullName, Email, Password, LibraryCardNumber, Role }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
firebase.auth().createUserWithEmailAndPassword( Email, Password )
firebase.database().ref(`/users/${currentUser.uid}/accounts`)
    .push({ FullName, Email, Password, LibraryCardNumber, Role })
    .then(() =>{
      dispatch({ type: ACCOUNT_CREATE });
    });
    Actions.Account({ type: 'reset'});
};
};
// code To Get the data from Firebase
export const accountsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/accounts`)
     .on('value', snapshot => {
       dispatch({ type: ACCOUNT_FETCH_SUCCESS, payload: snapshot.val() });


     });

  };

};
