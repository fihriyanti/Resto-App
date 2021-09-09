import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import SignUpScreen from './SignUpScreen';
import VerifyCodeScreen from './VerifyCodeScreen';
import Authenticated from './BerandaTabNav';

export default function PhoneAuth() {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      var phone = '+62' + phoneNumber;
      console.log(phone);
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    console.log(code);
    try {
      await confirm.confirm(code);
      setConfirm(null);
      // this.props.navigation.navigate('BerandaTabNav')
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated) return <Authenticated />;

  if (confirm) return <VerifyCodeScreen onSubmit={confirmVerificationCode} />;

  return <SignUpScreen onSubmit={signIn} />;
}