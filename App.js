import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import contacts, {compareNames} from './contacts.js'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'
const AppNavigator = createSwitchNavigator({
	AddContact : AddContactScreen,
	ContactList : ContactListScreen,
},{
	initialRouteName : "ContactList",
})
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component{
     state = {
     	contacts : contacts,
     } 
    addContact = newContact =>{
     	this.setState(prevState => ({contacts : [...prevState,newContact]}))
     }
    render(){
     	return(<View/>
     	)
     }
}