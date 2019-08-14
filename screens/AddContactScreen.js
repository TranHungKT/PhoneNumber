import React from 'react'
import AddContactForm from '../AddContactForm.js'
import {View} from 'react-native'
export default class AddContactScreen extends React.Component{
	handleSubmit = formState => {
		this.props.screenProps.addContact(formState)
		this.props.navigation.navigate('ListContact')
	}
	renden(){
		<View />
	}
} 