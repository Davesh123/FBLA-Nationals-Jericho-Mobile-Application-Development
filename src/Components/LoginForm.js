//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

//This is the Login Page
class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

onPasswordChange(text){
  this.props.passwordChanged(text);
}

onButtonPress() {
  const { email, password } = this.props;

  this.props.loginUser({ email, password });
}

renderButton() {
  if (this.props.loading) {
    return <Spinner size="small"/>;
  }
//The Beginning is the botton rendering
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Log In
    </Button>
  );
}
//This is for errors
renderError() {
  if (this.props.error){
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }
}
_onPressButton() {
    Actions.Home()
  }
renderFacebook() {
  return (
    <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={this._onPressButton}>

     <Image
      source={require('./facebook.png')}
      style={styles.ImageIconStyle}
      />

     <View style={styles.SeparatorLine} />

     <Text style={styles.TextStyle}> Login Using Facebook </Text>

   </TouchableOpacity>
  );
};
renderTwitter() {
  return(
<TouchableOpacity style={styles.TwitterStyle} activeOpacity={0.5} onPress={this._onPressButton}>

 <Image
  source={require('./twitter.png')}
  style={styles.ImageIconStyle}
  />

 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Login Using Twitter </Text>

</TouchableOpacity>
);
};
renderGooglePlus() {
  return(
    <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={this._onPressButton}>

     <Image
      source={require('./google.png')}
      style={styles.ImageIconStyle}
      />

     <View style={styles.SeparatorLine} />

     <Text style={styles.TextStyle}> Login Using Google Plus </Text>

    </TouchableOpacity>
);
};

renderHome() {
  return (
  Actions.Home()
);
};
//This is a place holder for the Button
  render() {
    return(
      <View>
      <Card>
      <Image
        style={{ height: 70, width: 400, alignSelf: 'center'}}
        source={require('./Jericho_Library.jpg')}
         />
         </Card>
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="Password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
</Card>
{this.renderFacebook()}
{this.renderTwitter()}
{this.renderGooglePlus()}
       </View>


    );
  }

}
//This is the styling
const styles = {

 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 10
 },

 GooglePlusStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dc4e41',
   borderWidth: .5,
   borderColor: '#fff',
   height: 60,
   borderRadius: 5 ,
   margin: 5,

},
TwitterStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#00aced',
  borderWidth: .5,
  borderColor: '#fff',
  height: 60,
  borderRadius: 5 ,
  margin: 5,

},

FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#485a96',
  borderWidth: .5,
  borderColor: '#fff',
  height: 60,
  borderRadius: 5 ,
  margin: 5,

},

ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode : 'stretch',

},

TextStyle :{

  color: "#fff",
  marginBottom : 4,
  marginRight : 2,
  fontSize: 20

},

SeparatorLine :{

backgroundColor : '#fff',
width: 1,
height: 40

},
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    labelStyle:{
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle:{
      height:40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
}

//This is the state and resets everything
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
