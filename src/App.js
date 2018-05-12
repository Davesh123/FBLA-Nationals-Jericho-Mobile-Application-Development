//Import Libraries from React Native
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import Router from './Router';


 export default class App extends Component {
   componentDidMount() {
     //SplashScreen.hide();
   }


  componentWillMount() {
//Initialize the Firebase and Connect it to Our Database
  const config = {
    apiKey: 'AIzaSyDsJpHehCX0VT6QfZkpKU4WHS4Fpun45BQ',
    authDomain: 'manager-a6248.firebaseapp.com',
    databaseURL: 'https://manager-a6248.firebaseio.com',
    projectId: 'manager-a6248',
    storageBucket: '',
    messagingSenderId: '435442249151'
  };
  firebase.initializeApp(config);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

//export default App;
//Exports the App
