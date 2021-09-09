import React, { useState } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Images } from '../Themes'
import firebase from 'firebase'

import * as Animatable from 'react-native-animatable'

// Styles
import styles from './Styles/VerifyCodeScreenStyles'

export default function VerifyCodeScreen(props) {

  const [code, setCode] = useState('');

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
            <Text style={styles.header}>Verify OTP</Text>
            <View style={styles.form}>
              <Text style={styles.label}>Phone Number</Text>
              <Item inlineLabel style={styles.item1}>
                <Icon type='Fontisto' name='phone' />
                <Input placeholder='Your Phone Number' keyboardType='numeric'
                value={code}
                onChangeText={setCode}
                  style={styles.input} />
              </Item>
              <Button rounded
                onPress={() => props.onSubmit(code)}
                style={styles.btnSign}>
                <Text style={styles.txtSign}>SIGN UP</Text>
              </Button>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    </View>
  )
}
