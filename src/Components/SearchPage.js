//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, Button, Text} from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import {ScrollView, Image, Linking } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';
import { Card, CardSection, Input, Spinner } from './common';

//The Following is the data
class SearchPage extends Component {
  state = { albums: [{

        "title" : "The Lightning Thief",
        "author" : "Rick Riordan",
        "thumbnail_image": "https://images.gr-assets.com/books/1400602609l/28187.jpg"

      }
    ,{
      "title" : "The Great Gatsby",
      "author" : "F. Scott Fitzgerald",
      "thumbnail_image": "https://images.gr-assets.com/books/1490528560l/4671.jpg"
  },
  {
    "title" : "To Kill a Mockingbird",
    "author" : "Harper Lee",
    "thumbnail_image": "https://images.gr-assets.com/books/1361975680l/2657.jpg"
  },
  {
    "title" : "Romeo and Juliet",
    "author" : "William Shakespeare",
    "thumbnail_image": "https://images.gr-assets.com/books/1327872146l/18135.jpg"
  },
      {

        "title" : "The Sea of Monsters",
        "author" : "Rick Riordan",
        "thumbnail_image": "https://www.scholastic.com/content5/media/products/21/9780439027021_mres.jpg"

      }
    ,
      {
        "title" : "Sophie's World : The Greek Philosophers",
        "author" : "Jostein Gaarder",
        "thumbnail_image": "https://images.gr-assets.com/books/1400602609l/28187.jpg"

      }
    ,
      {

        "title" : "Lucene in Action, Second Edition",
        "author" : "Michael McCandless",
        "thumbnail_image": "https://images.manning.com/720/960/resize/book/e/b87764b-d09b-4ee5-bb2b-ba87f26c95df/hatcher2.png"

      }]};

//The following renders the the images
renderAlbums() {
return this.state.albums.map(album =>
  <AlbumDetail key={album.title} album={album} />
);
}
  render() {
    return (

      <View style={{flex:1}}>
      <ScrollView>
      <Image
        style={{ height: 70, width: 400, alignSelf: 'center'}}
        source={require('./Jericho_Library.jpg')}
         />
      {this.renderAlbums()}
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
    onPress={() => Actions.Bug()}
    icon={<Image
      style={{width: 30, height: 25}}
      source={{uri: 'https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-128.png'}}
    />}
  />
</BottomNavigation>
</View>
  </View>
  //This is all Naviagation
    );
  }
}

export default SearchPage;
