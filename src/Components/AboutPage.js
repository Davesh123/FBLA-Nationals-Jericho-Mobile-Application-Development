//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {Button, View, Text } from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import { TouchableHightLight, ScrollView, Image, ListView } from 'react-native';
//import Vr from 'react-native-vr';
//import LibraryList from './LibraryList';
//import MapView from 'react-native-maps';

class AboutPage extends Component {
//THis renders the component of images


  render() {
    return (
<View style={{flex: 1}}>
<ScrollView>
<Text style={styles.HeaderStyle}>               About Page                </Text>
<Image
  style={{ height: 70, width: 400, alignSelf: 'center'}}
  source={require('./Jericho_Library.jpg')}
   />
   <Text style={styles.textStyle}>
    The Jericho High School Library mission is to help each
    student excel and achieve maximum potential
    by creating a 21 st Century learning environment,
    fostering a love of reading, and promoting the
    effective use of information and communications technology.
    </Text>
    <Text style={styles.bulletStyle}>
    Students will be able to:
    </Text>
    <Text style={styles.bulletStyle}>
-determine what information is needed
</Text>
<Text style={styles.bulletStyle}>
-identify the best sources for a given task
</Text>
<Text style={styles.bulletStyle}>
-evaluate all sources critically
</Text>
<Text style={styles.bulletStyle}>
-efficiently locate and access information
</Text>
<Text style={styles.bulletStyle}>
-use the information ethically
</Text>
<Text style={styles.bulletStyle}>
-share the information effectively and/or creatively
   </Text>
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
  HeaderStyle: {
    alignSelf: 'center',
    color: '#FFDF00',
    fontSize: 32,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'steelblue',
    alignItems: 'center'
  },
  textStyle: {
    alignSelf: 'stretch',
    color: '#FF4500',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7
  },
  bulletStyle: {
    alignSelf: 'stretch',
    color: '#0000ff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'steelblue',
    borderRadius: 10,
    color: 'red',
    padding: 15,
    margin: 45
  }
};

export default AboutPage;
