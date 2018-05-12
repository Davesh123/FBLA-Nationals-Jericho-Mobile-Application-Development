import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text} from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import {ScrollView, Image, Linking, ListView, TouchableOpacity } from 'react-native';
import AlbumDetail, { onDeleteBTN } from './AlbumDetail';
import axios from 'axios';
import { Card, CardSection, Input, Button } from './common';
import { connect} from 'react-redux';
import { AccountUpdate, AccountCreate, accountsFetch } from '../actions';
import _ from 'lodash';


class MyAccount extends Component {
  renderTwitter() {
    return(
  <TouchableOpacity style={styles.TwitterStyle} activeOpacity={0.5} onPress={() => Linking.openURL("https://www.instagram.com/jerichohslibrary/")}>

   <Image
    source={require('./Instagram.png')}
    style={styles.ImageIconStyle}
    />

   <View style={styles.SeparatorLine} />

   <Text style={styles.TextStyle}> Click this Link to Go to Our Instagram Page! </Text>

  </TouchableOpacity>
  );
  };

  render() {
    console.log({onDeleteBTN})
    return (

        <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <ScrollView>
        <Image
          style={{ height: 70, width: 400, alignSelf: 'center'}}
          source={require('./Jericho_Library.jpg')}
           />
        <View style = {{ alignItems: 'center'}}>
            <Text style={styles.textStyle}> Name: John Smith </Text>
            <Text style={styles.textStyle}> Email: Test@test.com </Text>
            <Text style={styles.textStyle}> Library Card Number: 123-456-7890 </Text>
            <Text style={styles.textStyle}> Fines: $2.00 </Text>
            <Text style={styles.textStyle}> {onDeleteBTN} </Text>
            <Text> Check Your Library Account Online for more information </Text>
            <Button onPress={() => Linking.openURL("https://www.instagram.com/jerichohslibrary/")}> Take a Picture at Our Instgram Spot</Button>
            {this.renderTwitter()}
        </View>
        </ScrollView>
        <View flex padding-5 paddingT-0>

        <BottomNavigation
        labelColor="black"
        backgroundColor="white"
        activeLabelColor='white'
        rippleColor="white"
        shifting={false}
        // overflow =' hidden'
          style={{ elevation: 8, position: 'absolute', height: 60, left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
        >
    <Tab
      barBackgroundColor="coral"
      label="My Account"
      labelColor="white"
      activeLabelColor="white"
      flex="1"
      onPress={() => Actions.Account()}

       icon={<Image
         style={{width: 30, height: 25}}
         source={{uri: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-64.png'}}
       />}
      //icon={<Image source={require('')} color="white" name="Shop" style={{ width: 20, height: 20 }} />}
     />
    <Tab
      barBackgroundColor="coral"
      label="Search"
      labelColor="white"
      activeLabelColor="white"
      //icon={<Image source={require('')} color="white" name="Cart" style={{ width: 20, height: 20 }} />}
      onPress={() => Actions.Search()}

      icon={<Image
        style={{width: 30, height: 25}}
        source={{uri: 'https://png.icons8.com/metro/1600/search.png'}}
      />}

    />
    <Tab
      barBackgroundColor="coral"
      label="Library Map"
      labelColor="white"
      activeLabelColor="white"
      flex="1"
      //icon={<Image source={require('@images/ordersW.png')} color="white" name="My Orders" style={{ width: 20, height: 20 }} />}
      onPress={() => Actions.Map()}
      icon={<Image
        style={{width: 30, height: 23}}
        source={{uri: 'https://www.shareicon.net/data/128x128/2015/09/21/644178_book_512x512.png'}}
      />}
    />
    <Tab
      barBackgroundColor="coral"
      label="Report Bug"
      labelColor="white"
      activeLabelColor="white"
      flex="1"
      //icon={<Image source={require('')} color="white" name="Shop" style={{ width: 20, height: 20 }} />}
      onPress={() => Actions.Bug()}
      icon={<Image
        style={{width: 30, height: 25}}
        source={{uri: 'https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-128.png'}}
      />}
    />
  </BottomNavigation>
    </View>
    </View>
      );
    }
  }

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
    backgroundColor: '#cd486b',
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
     height: 40,
     width: 40,
     resizeMode : 'stretch',

  },

  TextStyle :{

    color: "#fff",
    marginBottom : 4,
    marginRight : 2,
    fontSize: 16

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
      textStyle: {
        alignSelf: 'center',
        color: '#ff0000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      },
      containerStyle:{
        height:40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }
  }

  const mapStateToProps = state => {
    const accounts = _.map(state.accounts, (val, uid) =>{
      return { ...val, uid };
    });

    return { accounts };

  };

export default connect(mapStateToProps, { accountsFetch })(MyAccount);
