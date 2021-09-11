import React, { Component } from 'react'
import { View, Text, FlatList, Modal } from 'react-native'
import { Body, Button, Icon, Left, List, ListItem, Right, CardItem, Card } from 'native-base'
import firebase from 'firebase'

// Styles
import styles from './Styles/PembayaranScreenStyles'

export default class PembayaranScreen extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      jumlah: 0,
      list: [],
      total: 0,
      show: false,
      show2: false,
    }
  }

  componentDidMount() {
    this.total();

    const user = firebase.auth().currentUser

    firebase.database().ref('Transaksi/' + user.uid).on('value', (snapshot) => {
      var li = []
      // var totalsemua = 0
      li.push({
        key: snapshot.key,
        noMeja: snapshot.val().noMeja,
        statusPesan: snapshot.val().statusPesan,
        status: snapshot.val().status
      })
      this.setState({ list: li })
      console.log(li)
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
            <FlatList
              data={this.state.list}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <Card style={styles.card}>
                  <CardItem>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Text style={styles.judul}>Status Pembayaran</Text>
                        <Text style={styles.namaMenu}> : {item.status}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Text style={styles.judul}>Status Pesanan</Text>
                        <Text style={styles.namaMenu}> : {item.statusPesan}</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              )}
            />
            <Button full style={styles.btn}
              onPress={() => this.props.navigation.navigate('MenuTabNav')}
            >
              <Text style={styles.txtBtn}>MENU</Text>
            </Button>
          </View>
        </View>
      </View >
    )
  }
}