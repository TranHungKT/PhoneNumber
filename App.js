import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import contacts, {compareNames} from './contacts.js'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import AddContact from './screens/AddContactScreen'
import ListContact from './screens/ContactListScreen'

const AppNavigator= createSwitchNavigator({
     AddContact = AddContact,
     ListContact = ListContact,
},{
	 initialRouteName : 'ContactList'
})
const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component{
     state = {
     	contacts : contacts,
     } 
     qaddContact = newContact =>{
     	this.setState(prevState => ({contacts : [...prevState,newContact]}))
     }
     render(){
     	return(<AppContainer screenProps = {
     		{
     			contacts : this.state.contacts,
     			addContact: this.addContact
     		}}/>
     	)
     }
}