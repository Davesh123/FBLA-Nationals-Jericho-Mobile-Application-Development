//Importing Libraries from React Native and My Other Components
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import HomePage from './Components/HomePage';
import MyAccount from './Components/MyAccount';
import SearchPage from './Components/SearchPage';
import MapPage from './Components/MapPage';
import BugPage from './Components/BugPage';
import CreateAnAccount from './Components/CreateAnAccount';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import { Actions } from 'react-native-router-flux';

//This is app hierachy and helps navigate between screens by assigning values and keys
const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root" hideNavBar>
      <Scene key="Landing">
        <Scene key="Landing" component={LandingPage} title="Welcome to Jericho High School Library" initial/>
      </Scene>
        <Scene key="auth">
          <Scene rightTitle="New User" onRight={() => {Actions.Create()}} key="login" component={LoginForm} title="Please Login"/>
          <Scene key="Create" component={CreateAnAccount} title="Create An Account"/>
        </Scene>
        <Scene key="about">
          <Scene rightTitle="Log Out" onRight={() => {Actions.auth()}} key="AboutPage" component={AboutPage} title="About Us"/>
        </Scene>
        <Scene key="Home">
          <Scene leftTitle ="About Us" onLeft={() => {Actions.about()}} rightTitle="Log Out" onRight={() => {Actions.auth()}} key="HomePage" component={HomePage} title="Jericho High School Library"/>
        </Scene>
        <Scene key="Account">
          <Scene leftTitle ="About Us" onLeft={() => {Actions.about()}} rightTitle="Log Out" onRight={() => {Actions.auth()}} key="MyAccount" component={MyAccount} title="My Account"/>
        </Scene>
        <Scene key="Search">
          <Scene leftTitle ="About Us" onLeft={() => {Actions.about()}} rightTitle="Log Out" onRight={() => {Actions.auth()}} key="SearchPage" component={SearchPage} title="Jericho High School Library"/>
        </Scene>
        <Scene key="Map">
          <Scene leftTitle ="About Us" onLeft={() => {Actions.about()}} rightTitle="Log Out" onRight={() => {Actions.auth()}} key="MapPage" component={MapPage} title="Map Information"/>
        </Scene>
        <Scene key="Bug">
          <Scene leftTitle ="About Us" onLeft={() => {Actions.about()}} rightTitle="Log Out" onRight={() => {Actions.auth()}} key="BugPage" component={BugPage} title="Report a Bug"/>
        </Scene>
      </Scene>
    </Router>
  );
};


export default RouterComponent;
