import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Label } from 'native-base'
import firebase from 'firebase'
import auth from '@react-native-firebase/auth'
import { Images } from '../Themes'

import * as Animatable from 'react-native-animatable';

// Styles
import styles from './Styles/LoginScreenStyles'
import { TouchableOpacity } from 'react-native'

export default class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    secureTextEntry: true

  }

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCD0uUL812u98r3LSsLfx60_BiJEEhnHM4",
      databaseURL: "https://d-fasto-default-rtdb.asia-southeast1.firebasedatabase.app",
      authDomain: "d-fasto.firebaseapp.com",
      projectId: "d-fasto",
      storageBucket: "d-fasto.appspot.com",
      messagingSenderId: "888195449280",
      appId: "1:888195449280:web:b838a6deaac9fd26c8c825"
      // measurementId: "G-JGQ4DRP757"  
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    else {
      firebase.app();
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified == true) {
        console.log(user.emailVerified)
        this.props.navigation.navigate("BerandaTabNav")
      } else {
        console.log("Invalid User")
        alert("Please verify your email")
      }
    });
  }

  onPressLogin = () => {
    // firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).
    //   then(this.onLoginSuccess).catch(error => {
    //     alert("Invalid Email or Password")
    //   })
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).
      then(this.onLoginSuccess).catch(error => {
        alert("Invalid Email or Password")
      })
    // var phone_number = '+62' + this.state.username
    // console.log(phone_number)
    // auth().signInWithPhoneNumber(phone_number).
    //   then(this.onLoginSuccess).catch(error => {
    //     alert("Invalid Email or Password")
    //   })
  }

  onLoginSuccess = () => {
    this.props.navigation.navigate("BerandaTabNav")
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image
              // animation='bounceIn'
              source={Images.logoApp} style={styles.logo} />
          </View>
          <Animatable.View
            animation='fadeInUpBig'
            style={styles.footer}>
            <ScrollView>
              <Text style={styles.header}>SIGN IN</Text>
              <View style={styles.form}>
                {/* <Text style={styles.label}>Phone Number</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='Fontisto' name='phone' />
                  <Label>+62</Label>
                  <Input placeholder='Enter Your Phone Number' style={styles.input} onChangeText={username => this.setState({ username })} />
                </Item> */}
                <Text style={styles.label}>Username</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='FontAwesome' name='user-o' />
                  <Input placeholder='Your Username' style={styles.input} onChangeText={username => this.setState({ username })} />
                </Item>
                <Text style={styles.label}>Password</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='SimpleLineIcons' name='lock' />
                  {this.state.secureTextEntry ?
                    <Input secureTextEntry={true} placeholder='Your Password' style={styles.input} onChangeText={password => this.setState({ password })} />
                    :
                    <Input placeholder='Your Password' style={styles.input} onChangeText={password => this.setState({ password })} />
                  }
                  <TouchableOpacity onPress={() => this.secureTextEntry()}>
                    {this.state.secureTextEntry ?
                      <Icon type='Ionicons' name='eye-off-outline' />
                      :
                      <Icon type='Ionicons' name='eye-outline' />
                    }
                  </TouchableOpacity>
                </Item>
                <Button rounded
                  onPress={this.onPressLogin}
                  style={styles.btnSign}>
                  <Text style={styles.txtSign}>SIGN IN</Text>
                </Button>
                <Text style={styles.txtAc}>Don't have a account?</Text>
                <Button rounded bordered
                  onPress={() => this.props.navigation.navigate('SignUpEmailScreen')}
                  style={styles.btnSignUp}>
                  <Text style={styles.txtSignUp}>SIGN UP</Text>
                </Button>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      </View>
    )
  }
}