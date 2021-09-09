import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Label } from 'native-base'
import firebase from 'firebase'
import auth from '@react-native-firebase/auth'
import { Images } from '../Themes'

import * as Animatable from 'react-native-animatable';

// Styles
import styles from './Styles/SignUpEmailScreenStyles'
import { TouchableOpacity } from 'react-native'

export default class SignUpEmailScreen extends Component {
  state = {
    email: '',
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
  }

  onPressLogin = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).
      then((userCredential) => {
        userCredential.user.sendEmailVerification()
        const users = firebase.database().ref("User/" + userCredential.user.uid);
        users.set({
            uid: userCredential.user.uid,
            email: this.state.email,
            password: this.state.password,
            displayName: userCredential.user.displayName
        })
        this.props.navigation.navigate("LoginScreen")
      }).catch(error => {
        alert("Gagal membuat akun anda")
      })
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
              <Text style={styles.header}>SIGN UP</Text>
              <View style={styles.form}>
                {/* <Text style={styles.label}>Phone Number</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='Fontisto' name='phone' />
                  <Label>+62</Label>
                  <Input placeholder='Enter Your Phone Number' style={styles.input} onChangeText={username => this.setState({ username })} />
                </Item> */}
                <Text style={styles.label}>Email</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='Fontisto' name='email' />
                  <Input placeholder='Your Email' style={styles.input} onChangeText={email => this.setState({ email })} />
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
                <Button rounded bordered
                  onPress={this.onPressLogin}
                  style={styles.btnSignUp}>
                  <Text style={styles.txtSignUp}>SIGN UP</Text>
                </Button>
                <Text style={styles.txtAc}>Have an account?</Text>
                <Button rounded
                  onPress={() => this.props.navigation.navigate('LoginScreen')}
                  style={styles.btnSign}>
                  <Text style={styles.txtSign}>SIGN IN</Text>
                </Button>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      </View>
    )
  }
}