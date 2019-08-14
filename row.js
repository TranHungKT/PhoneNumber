import React from 'react';
import {View, Text} from 'react-native'
import styles from './styles.js'
const Row = props =>(
	<View style = {styles.row}> 
	   <Text> {props.name} </Text>
	   <Text> {props.phone} </Text>
	</View>
) 
export default Row;