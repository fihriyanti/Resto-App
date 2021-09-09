import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button, Icon, Thumbnail, List, ListItem, Left, Right } from 'native-base'
import { Images } from '../Themes'
// import auth from '@react-native-firebase/auth'
import firebase from 'firebase'

// Styles
import styles from './Styles/AkunScreenStyles'
import { ScrollView } from 'react-native'

export default class AkunScreen extends Component {
  

  // componentDidMount() {
  //   // Your web app's Firebase configuration
  //   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyCD0uUL812u98r3LSsLfx60_BiJEEhnHM4",
  //     authDomain: "d-fasto.firebaseapp.com",
  //     projectId: "d-fasto",
  //     storageBucket: "d-fasto.appspot.com",
  //     messagingSenderId: "888195449280",
  //     appId: "1:888195449280:web:b838a6deaac9fd26c8c825"
  //     // measurementId: "G-JGQ4DRP757"  
  //   };
  //   // Initialize Firebase
  //   if(!firebase.apps.length){
  //     firebase.initializeApp(firebaseConfig);
  //   }
  //   else{
  //     firebase.app();
  //   }
  // }
  
  signoutuser = () =>{
    // auth().signOut().then(this.props.navigation.navigate('LoginScreen'))
    firebase.auth().signOut().then(this.props.navigation.navigate('LoginScreen'))
    console.log('logout berhasil')
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View>
            <Icon type='Ionicons' name='settings'
              style={styles.set}
              onPress={() => this.props.navigation.navigate('EditAkunScreen')}
            />
          </View>
          <View style={styles.centered}>
            <Thumbnail source={Images.profile} style={styles.logo} />
            <Text style={styles.nama}>Akun Saya</Text>
            <Text style={styles.username}>@username</Text>
          </View>
          <View style={styles.footer}>
            <ScrollView>
              <List>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>Nama</Text>
                  </Left>
                  <Text style={styles.txtRight}>{firebase.auth().currentUser.displayName}</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>No. HP</Text>
                  </Left>
                  <Text style={styles.txtRight}>{firebase.auth().currentUser.email}</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>Alamat</Text>
                  </Left>
                  <Text style={styles.txtRight}>Jl. Indah No. 4</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>Tanggal Lahir</Text>
                  </Left>
                  <Text style={styles.txtRight}>28-06-1991</Text>
                </ListItem>
                <ListItem onPress={this.signoutuser}>
                  <Left>
                    <Text style={styles.txtLogout}>Log Out</Text>
                  </Left>
                  <Icon type='FontAwesome' name='angle-right' />
                </ListItem>
              </List>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}