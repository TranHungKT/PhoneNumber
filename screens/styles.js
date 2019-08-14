import React from 'react';
import {StyleSheet} from 'react-native';
import {Constants} from 'expo'
const styles = StyleSheet.create({ 
   container: {
    flex : 1,
    backgroundColor : "#fff",
    paddingTop: Constants.statusBarHeight, 
   },
   row: {
    paddingTop : 20
   }
})
export default styles;