//Importing Libraries from React Native and My Other Components
import React from 'react';
import { Text, View, Image, Linking, Alert } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';
//This dislays my search results
const AlbumDetail = ({ album }) => {
  const { title, author, thumbnail_image, url } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
let authorCheck = {author};
  onDeleteBTN = ({author}) => {
    console.log({author});
}
  const CheckAlert = () => {
    Alert.alert(
      'You Are Checking Out a Book',
      'Do you wish to proceed? Note: The Librarians will approve of this on their devices.',
      [
        {text: 'Cancel', onPress: () => {this.onDeleteBTN({author})}, style: 'cancel'},
        {text: 'OK', onPress: () => Actions.Home()},
      ],
      { cancelable: false })
   };
   const ReserveAlert = () => {
     Alert.alert(
       'You Are Reserving Out a Book',
       'Do you wish to proceed? Note: The Librarians will approve of this on their devices.',
       [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: () => Actions.Home()},
       ],
       { cancelable: false })
    };
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{author}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={CheckAlert}>
          Check Out
        </Button>
        <Button onPress={ReserveAlert}>
          Reserve
        </Button>
      </CardSection>
    </Card>
  );
};
//All of these code on top take the json code and format it nicely

//The bottom styles the objects recieveing the json
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
