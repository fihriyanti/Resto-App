import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Icon, Input, List, ListItem, Left, } from 'native-base'
import { Images } from '../Themes'
import firebase from 'firebase'

// Styles
import styles from './Styles/EditAkunScreenStyles'
import { ScrollView } from 'react-native'

export default class EditAkunScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nohp: '',
    };
  }
  signoutuser = () =>{
    // auth().signOut().then(this.props.navigation.navigate('LoginScreen'))
    firebase.auth().signOut().then(this.props.navigation.navigate('LoginScreen'))
    console.log('logout berhasil')
  }

  edituser = () =>{
    const user = firebase.auth().currentUser
    var nohp_user = this.state.nohp;
    var update_user = firebase.database().ref("User/" + user.uid);
    update_user.update(
        {
            no_hp: nohp_user
        });
    
    console.log(nohp_user);

    this.props.navigation.navigate('Akun');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon type='Ionicons' name='ios-arrow-back'
                style={styles.set}
                onPress={() => this.props.navigation.navigate('Akun')}
              />
              <Text style={styles.set1}>Pengaturan Akun</Text>
            </View>
            <Icon type='Ionicons' name='ios-checkmark-sharp'
              style={styles.set}
              onPress={this.edituser}
            />
          </View>
          <View style={styles.centered}>
            {/* <Thumbnail source={Images.profile} style={styles.logo} /> */}
            {/* <Button style={styles.btnGantiProfile}>
              <Text style={styles.txtGantiProfile}>Ganti Foto Profile</Text>
            </Button> */}
            <Text style={styles.nama}>Akun Saya</Text>
            {/* <Text style={styles.username}>@username</Text> */}
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
                    <Text style={styles.txtLeft}>Email</Text>
                  </Left>
                  <Text style={styles.txtRight}>{firebase.auth().currentUser.email}</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>No. HP</Text>
                  </Left>
                  <Input onChangeText={nohp => this.setState({ nohp })} placeholder='Masukkan No. Telp'/>
                </ListItem>
              </List>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}