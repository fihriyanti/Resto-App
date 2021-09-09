import React, { useState } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button, Label } from 'native-base'
import { Images } from '../Themes'
// import firebase from 'firebase'
// import firebase from 'react-native-firebase'

import * as Animatable from 'react-native-animatable'
// import Recaptcha from 'react-native-recaptcha-that-works'

// Styles
import styles from './Styles/SignUpScreenStyles'
// import loginScreen from './LoginScreen'
// const captchaUrl = './Captcha.html'
// import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen(props) {
  // const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(null);

  // render() {
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>SIGN UP</Text>
            <View style={styles.form}>
              <Text style={styles.label}>Phone Number</Text>
              <Item inlineLabel style={styles.item1}>
                <Icon type='Fontisto' name='phone' />
                <Label>+62</Label>
                <Input placeholder='Enter Your Phone Number' keyboardType='numeric' style={styles.input}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </Item>
              {/* <Text style={styles.label}>Username</Text>
              <Item inlineLabel style={styles.item1}>
                <Icon type='FontAwesome' name='user-o' />
                <Input placeholder='Your Username' style={styles.input} />
              </Item> */}
              {/* <Text style={styles.label}>Password</Text>
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
              </Item> */}
              <Button rounded
                onPress={() => props.onSubmit(phoneNumber)}
                style={styles.btnSign}>
                <Text style={styles.txtSign}>SIGN UP</Text>
              </Button>
              <Button rounded bordered
                // onPress={() => navigation.navigate('LoginScreen')}
                style={styles.btnSignIn}>
                <Text style={styles.txtSignIn}>SIGN IN</Text>
              </Button>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    </View>
  );
}