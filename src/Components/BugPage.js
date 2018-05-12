//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, Text } from 'react-native-ui-lib';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import { Card, CardSection, Input } from './common';
import { TextInput, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import Communications from 'react-native-communications';
import Mailer from 'react-native-mail';

//This is the Styles for the Bug Page
const styles = StyleSheet.create({
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
    flex: 1,
    alignItems: 'baseline'
  },
  containerStyle:{
    height: 150,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
});

/**
 * [BugPage]
 * @extends Component
 */
 //This is emptying the field
class BugPage extends Component {
  constructor(props) {
    super(props);
    // Set default state in constructor
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  /**
   * Handle custom email submission
   * @return {void}
   */
  handleEmailSubmit() {
    console.log('sending email to daveshreddy@gmail.com', this.state.email);
    // NOTE: This will only work fully when run on actual devices. https://github.com/anarchicknight/react-native-communications#usage
    Communications.email([this.state.email], null, null, this.state.subject, this.state.message);
  }

  /**
   * Handle report bug email submission
   * @return {void}
   */
  handleReportBugSubmit() {
    console.log('sending report bug email to %s...', this.state.email);
    // NOTE: This will only work fully when run on actual devices. https://github.com/anarchicknight/react-native-communications#usage
    Communications.email([this.state.email], null, null, this.state.subject, this.state.message);
  }

  //The following is the input tags in the screen

  render() {
    return (
      <View style={{flex: 1}}>
      <Image
        style={{ height: 70, width: 400, alignSelf: 'center'}}
        source={require('./Jericho_Library.jpg')}
         />
        <ScrollView>
          <Card>
            <CardSection>
              <Input
                label="Name:"
                placeholder="John Smith"
                value={this.state.name}
                onChangeText={(name) => this.setState({name})}
              />
            </CardSection>
            <CardSection>
              <Input
                label="Email:"
                placeholder="example@gmail.com"
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
              />
            </CardSection>
            <CardSection>
              <Input
                label="Subject:"
                placeholder="Subject"
                onChangeText={(subject) => this.setState({subject})}
              />
            </CardSection>
            <CardSection>
              <View style={styles.containerStyle}>
              <Text style={styles.labelStyle}>{"Message:"}</Text>
              <TextInput
                placeholder={"Send a Message"}
                autoCorrect={false}
                style={styles.inputStyle}
                multiline={true}
                numberofLines={4}
                onChangeText={(message) => this.setState({message})}
              />
              </View>
            </CardSection>
            <CardSection>
              <TouchableOpacity onPress={this.handleReportBugSubmit.bind(this)}>
                <Text style={styles.textStyle}>
                  Report Bug
                </Text>
              </TouchableOpacity>
            </CardSection>
          </Card>
        </ScrollView>
        <View style={{flex: 1}}>
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
//The Middle half of the code is for navigation and calling functions

export default BugPage;
