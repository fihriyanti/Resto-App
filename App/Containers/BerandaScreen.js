import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Button } from 'native-base'
import { Images } from '../Themes'
// import auth from '@react-native-firebase/auth'
// import database from '@react-native-firebase/database'
// import auth from 'firebase/auth'

import firebase from 'firebase'

// Styles
import styles from './Styles/BerandaScreenStyles'

export default class BerandaScreen extends Component {

  // countdown = () => {
  // }

  // reservation = () => {
  //   console.log('go to reservasi')
  // }

  reservasi = () => {
    // this.props.navigation.navigate('ReservasiScreen')
    const user = firebase.auth().currentUser
    console.log(user)
    console.log(user.uid)
    firebase.database()
      .ref("Reservasi/" + user.uid)
      .orderByChild("userid")
      .equalTo(user.uid)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          // var jumlah = this.state.count * this.props.navigation.getParam('paramharga');
          // var banyak = this.state.count;
          // console.log(snapshot)
          // const obj = JSON.parse(snapshot.val());
          // console.log(obj.nama)
          console.log("ada data")
          console.log("Updated !!!")
          // this.updateHarga(key, banyak_now);
          // this.props.navigation.navigate('MenuTabNav')
          this.props.navigation.navigate('CountDownScreen')
          // this.countdown
        } else {
          console.log("tidak ada data")
          this.props.navigation.navigate('ReservasiScreen')
        }
      })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView>
            <View
              style={styles.centered}>
              <Image source={Images.logoApp} style={styles.logo} />
            </View>
            <View style={styles.footer}>
              <View>
                <Button rounded
                  // onPress={() => this.props.navigation.navigate('ReservasiScreen')}
                  onPress={this.reservasi}
                  style={styles.btnSign}>
                  <Text style={styles.txtSign}>RESERVASI</Text>
                </Button>
                <Button rounded bordered
                  onPress={() => this.props.navigation.navigate('MenuTabNav')}
                  style={styles.btnSignUp}>
                  <Text style={styles.txtSignUp}>ORDER MENU</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}