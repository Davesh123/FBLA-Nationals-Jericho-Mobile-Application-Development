//Importing Libraries from React Native and My Other Components
'use strict';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, Button, Text} from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StyleSheet, TextInput, Image } from "react-native";
//import Video from "react-native-video";

//This top displays an image and has a gesture recognizer, which captures the user swiping up
class LandingPage extends Component {

      constructor(props) {
        super(props);
        this.state = {
          myText: 'Swipe Up',
          gestureName: 'none',
          backgroundColor: '#fff'
        };
      }
      onSwipeUp (gestureState) {
        this.setState({myText: 'You Swiped Up'});
      }
      onSwipe(gestureName, gestureState){
        const {SWIPE_UP} = swipeDirections;
        this.setState({ gestureName: gestureName });
        switch (gestureName){
          case SWIPE_UP:
          Actions.auth()
          break;
        }
      }
//This is some code on the velocity and the force ,whcih makes it the most efficient
render() {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>



    <GestureRecognizer
    onSwipe={(direction, state) => this.onSwipe(direction,state)}
    onSwipeUp={(state) => this.onSwipeUp(state)}
    config={config}
    style={{
      flex:1,
      backgroundColor: 'lightblue'
    }}>
    <Image
      style={{ height: 600, width: 350}}
      source={require('./Jericho.png')}
      resizeMode="cover"
       />

    </GestureRecognizer>
          </View>


  );
}
}

//I End with some styling
export default LandingPage;
