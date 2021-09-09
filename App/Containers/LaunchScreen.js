import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Images } from '../Themes'
import firebase from 'firebase'


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("LoginScreen");
    }, 3000);
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image 
            // animation='bounceIn'
            source={Images.logoApp} style={styles.logo} />
          </View>

        </View>
      </View>
    )
  }
}
