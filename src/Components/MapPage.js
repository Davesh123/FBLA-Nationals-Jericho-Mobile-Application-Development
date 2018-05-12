//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {Button, View, Text } from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import { TouchableHightLight, ScrollView, Image, ListView } from 'react-native';
import { Card } from './common';
//import Vr from 'react-native-vr';
//import LibraryList from './LibraryList';
//import MapView from 'react-native-maps';

class MapPage extends Component {
//THis renders the component of images
  render() {
    return (
<View style={{flex: 1}}>
<ScrollView>
<Image
  style={{ height: 70, width: 400, alignSelf: 'center'}}
  source={require('./Jericho_Library.jpg')}
   />
<Text style={styles.infoStyle}>
Jericho High School Library
</Text>
<Text style={styles.infoStyle}>
99 Cedar Swamp Road</Text>
<Text style={styles.infoStyle}>Jericho, New York 11753</Text>
<Text style={styles.infoStyle}>Phone - (516) 203-3600 x3209</Text>
<Text style={styles.infoStyle}>e-mail - dryder@jerichoschools.org</Text>
<Text style={styles.hourTitleStyle}>Hours:</Text>
<Text style={styles.hourStyle}>Monday 9 AM to 9 PM</Text>
<Text style={styles.hourStyle}>Tuesday 9 AM to 9 PM</Text>
<Text style={styles.hourStyle}>Wednesday 10 AM to 9 PM</Text>
<Text style={styles.hourStyle}>Thursday 9 AM to 9 PM</Text>
<Text style={styles.hourStyle}>Friday 9 AM to 6 PM</Text>
<Text style={styles.hourStyle}>Saturday 9 AM to 5 PM</Text>
<Text style={styles.hourStyle}>Sunday 12 PM to 5 PM</Text>
<Image
  style={{ height: 260, width: 400}}
  source={require('./Map.png')}
  resizeMode="cover"
   />
   <Image
     style={{ height: 700, width: 400, alignSelf: 'center'}}
     source={require('./GoogleMap.jpg')}
      />

   <Image
     style={{ height: 260, width: 400}}
     source={require('./Map2.png')}
     resizeMode="cover"
      />
      <Image
        style={{ height: 260, width: 400}}
        source={require('./Map3.png')}
        resizeMode="cover"
         />
</ScrollView>
      <View padding-0 paddingT-0>
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
  hourStyle: {
    alignSelf: 'center',
    color: '#0000FF',
    fontSize: 22,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5
  },
  infoStyle: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    paddingTop: 5,
    paddingBottom: 5
  },
  hourTitleStyle: {
    alignSelf: 'center',
    color: '#0000FF',
    fontSize: 22,
    fontWeight: '900',
    paddingTop: 10,
    paddingBottom: 10
  }
};
export default MapPage;
