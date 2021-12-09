import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button, Icon, Thumbnail, List, ListItem, Left, Input, Label } from 'native-base'
import { Images } from '../Themes'
// import auth from '@react-native-firebase/auth'
import firebase from 'firebase'

// Styles
import styles from './Styles/AkunScreenStyles'
import { ScrollView } from 'react-native'

export default class AkunScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nohp: '',
      list: [],
    };
  }

  componentDidMount() {
    // this.setState({ nohp : firebase.database().ref("User/" + user.uid + "/" + "no_hp").once })
    firebase.database().ref('User/' + firebase.auth().currentUser.uid).on('value', (snapshot) => {
      var li = []
      // var totalsemua = 0
      li.push({
        key: snapshot.key,
        no_hp: snapshot.val().no_hp
      })
      this.setState({ list: li })
      console.log(li[0].no_hp)
      this.setState({nohp : li[0].no_hp})
    })
    console.log(this.state.nohp);
  }
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
            {/* <Thumbnail source={Images.profile} style={styles.logo} /> */}
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
                  <Text style={styles.txtRight}>{this.state.nohp}</Text>
                </ListItem>
                {/* <ListItem>
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
                </ListItem> */}
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