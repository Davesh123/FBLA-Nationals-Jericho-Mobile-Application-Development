//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {Button, Text } from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import {ScrollView, Image, View} from 'react-native';

//This top is the displaying the picture
class HomePage extends Component {


  render() {
    return (

      <View style={{flex: 1}}>



      <View style = {{ alignItems: 'center' , backgroundColor: 'lightblue', flex: 10 }}>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>

      <Image
        style={{ height: 600, width: 350}}
        source={require('./Home.png')}
        resizeMode="cover"
         />
        </View>
      </View>

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
//The bottom is the naviagtion , which is simlar in many places

export default HomePage;
