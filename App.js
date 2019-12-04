import React from 'react'
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs' ;
import {Ionicons} from '@expo/vector-icons';
import store from './Redux/store';
import {Provider} from 'react-redux';
import AddContactScreen from './screens/AddContactScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
// import {fetchUsers} from './api'
// import contacts from './contacts'
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);
const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
    AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)

MainStack.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons name={`ios-contacts${focused ? '' : '-ios-settings'}`}size={25} color={tintColor} />
  ),
}

const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
  }
)

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
})
const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  // state = {
  //   contacts,
  // }

  /*
  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const results = await fetchUsers()
    this.setState({contacts: results})
  }
  */

  // addContact = newContact => {
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }))
  // }

  render() {
    return (
    <Provider store = {store}>
      <AppContainer/>
    </Provider>
    )
  }
}
