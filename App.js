import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LaunchScreen from './App/Containers/LaunchScreen'
import LoginScreen from './App/Containers/LoginScreen'
import SignUpScreen from './App/Containers/SignUpScreen'
// import VerifyCodeScreen from './App/Containers/VerifyCodeScreen'
import BerandaTabNav from './App/Containers/BerandaTabNav'
import DetailsMenuScreen from './App/Containers/DetailsMenuScreen'
import ReservasiScreen from './App/Containers/ReservasiScreen'
import MenuTabNav from './App/Containers/MenuTabNav'
import EditAkunScreen from './App/Containers/EditAkunScreen'
import KeranjangScreen from './App/Containers/KeranjangScreen'
import PhoneAuth from './App/Containers/PhoneAuth'
import CountDown from './App/Containers/CountDownScreen'
import SignUpEmailScreen from './App/Containers/SignUpEmailScreen'

import styles from './App/NavigationStyles'

const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  SignUpEmailScreen: { screen: SignUpEmailScreen },
  // VerifyCodeScreen: { screen: VerifyCodeScreen },
  BerandaTabNav: { screen: BerandaTabNav },
  DetailsMenuScreen: { screen: DetailsMenuScreen },
  ReservasiScreen: { screen: ReservasiScreen },
  CountDownScreen: { screen: CountDown },
  MenuTabNav: { screen : MenuTabNav },
  EditAkunScreen: { screen : EditAkunScreen },
  KeranjangScreen: { screen : KeranjangScreen },
  PhoneAuth: { screen : PhoneAuth },
}, {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)