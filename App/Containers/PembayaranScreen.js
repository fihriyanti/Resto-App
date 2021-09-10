import React, { Component } from 'react'
import { View, Text, FlatList, Modal } from 'react-native'
import { Body, Button, Icon, Left, List, ListItem, Right } from 'native-base'
import firebase from 'firebase'

// Styles
import styles from './Styles/PembayaranScreenStyles'

export default class PembayaranScreen extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      jumlah: 0,
      cart: [],
      total: 0,
      show: false,
      show2: false,
    }
  }

  componentDidMount() {
    this.total();

    const user = firebase.auth().currentUser

    firebase.database().ref('Keranjang/' + user.uid).on('value', (snapshot) => {
      var li = []
      var totalsemua = 0
      snapshot.forEach((child) => {
        li.push({
          key: child.key,
          nama: child.val().nama,
          harga: child.val().harga,
          img: child.val().img,
          banyak: child.val().banyak,
          perjumlah: child.val().perjumlah
        })
        totalsemua += child.val().perjumlah
      })
      console.log(li)
      console.log(totalsemua)
      console.log(user.uid)
      this.setState({ total: totalsemua })
      this.setState({ cart: li })
    })
    // this.intervalID = setInterval(this.total.bind(this), 5000);
  }

  total = () => {
    this.setState({ count: this.props.navigation.getParam('banyak') });
    this.setState({ jumlah: this.props.navigation.getParam('banyak') * this.props.navigation.getParam('harga') });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={styles.txtHeader}>Pembayaran</Text>
            </View>
          </View>
          <View style={styles.body}>
            <List>
              <ListItem>
                <Left>
                  <Text style={styles.judul}>Status Pembayaran</Text>
                </Left>
                <Body>
                  <Text>: Dikonfirmasi</Text>
                </Body>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Left>
                  <Text style={styles.judul}>Status Pesanan</Text>
                </Left>
                <Body>
                  <Text>: Sedang diproses</Text>
                </Body>
              </ListItem>
            </List>
          </View>
        </View>
      </View >
    )
  }
}