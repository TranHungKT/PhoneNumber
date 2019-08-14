import React from 'react'
import {View, Button} from 'react-native'
import SectionListContact from "./SectionListContact.js"
export default class ContactListScreen extends React.Component {
	state ={
		showContacts : false,
	}
	ToggleContact = () => {
		this.setState(prevState => ({showContacts : !prevState.showContacts}))
	}
	showForm = () =>{
        this.props.navigation.navigate('AddContact')
	}
	render(){
		return (
             <View> 
               <Button title = "Toggle Contact" onPress = {this.ToggleContact} />
               <Button title = "Add Contact" onPress = {this.showForm} />
               {this.showContacts && (
                    <SectionListContact contacts = {this.props.screenProps.contacts}
               )}
             </View>
	)}
}

