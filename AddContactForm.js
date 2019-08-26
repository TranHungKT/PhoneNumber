import React from 'react'
import {View, Button, TextInput,StyleSheet,KeyboardAvoidingView} from 'react-native'
import {Constants} from 'expo'
const styles = StyleSheet.create({
	title : {
		fontSize : 52,
		flexDirection: 'row',
		justifyContent : 'center',
	},
	inputText : {
		 borderLeftWidth : 25,
		 borderRightWidth : 25,
		 marginHorizontal: 50,
		 paddingHorizontal: 25,
		 borderColor : 'black',
		 paddingTop : Constants.statusBarHeight,
	},
	button : {
		justifyContent : 'center',
	},
	container : {
        backgroundColor : '#fff', 
        paddingTop : Constants.statusBarHeight,   
	},
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

export default class AddContactForm extends React.Component {
      constructor(props){
      	this.state = {
      		Name : '',
      		Phone: '',
      		isFormValid : false,
      	}
      	this.inputFullNameRef = React.createRef()
    }
    componentDidUpdate(prevProps,prevState){
    	if(
    		this.state.Name !== prevState.name ||
    		this.state.Phone !== prevState.Phone
    		){
    		this.validateForm();
    	}
    }
    getHandler = key => val => {
    	this.setState({[key]:val});
    }
    handleName = name => {
    	this.getHandler(name)
    }
    handlePhone = phone => {
    	this.getHandler(phone)
    }
    validateForm = () => {
        const names = this.state.Name.split()
        if(names>=0 && +this.state.Phone >= 0 && +this.state.Phone === 10) {
        	this.setState(isFormValid : true)
        }     	
        else {
            this.setState(isFormValid : false)
        }
    }
    handleSubmit = () =>{
    	this.props.onSubmit(this.state);
    }
    render(){
    	return(
            <KeyboardAvoidingView style = {styles.container} 
            behavior = 'padding' enabled >
            <TextInput style = {styles.inputText}
            value = {this.state.Name}
            onChangeText = {this.getHandler('Name')}
            placeholder = 'Name' />
            <TextInput style = {styles.inputText}
            value = {this.state.phone}
            onChangeText = {this.getHandler('Phone')}
            placeholder = 'Phone' 
            keyboardType = 'numeric'/>
            <Button style = {styles.button}
                    title = "Submit"
                    onSubmit = {this.handleSubmit} 
            /> 
               
    		</KeyboardAvoidingView>)
    }
    
}