import React, { Component } from 'react'
import { View, Text, FlatList, Modal } from 'react-native'
import { Body, Icon, Button, Input, Left, List, ListItem, Right, Card } from 'native-base'
import firebase from 'firebase'

// Styles
import styles from './Styles/ReservasiPayScreenStyles'

export default class ReservasiPayScreen extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      jumlah: 0,
      cart: [],
      total: 0,
      show: false,
      show2: false,

      nama: "",

      hari: "",
      bulan: "",
      tahun: "",

      time: "",

      jmlpelanggan: 0,

      keterangan: "",
    }
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;
    firebase.database().ref('Reservasi/' + user.uid).on('value', (snapshot) => {
      var li = []
      snapshot.forEach((child) => {
        li.push({
          key: child.key,
          nama: child.val().nama,
          waktu_bayar: child.val().waktu_bayar,
          waktu_pesan: child.val().waktu_pesan,
          duration: child.val().duration,
          tanggal: child.val().tanggal,
          waktu: child.val().waktu,
          jumlah: child.val().jumlah,
          status: child.val().status
        })
      })
      this.setState({ list: li })
    })
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Icon style={styles.back} type='AntDesign' name='arrowleft'
                onPress={() => this.props.navigation.navigate('BerandaTabNav')}
              />
              <Text style={styles.txtHeader}>Pembayaran</Text>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.list}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View style={styles.body}>
                <List>
                  <ListItem>
                    <Left>
                      <Text style={styles.judul}>Status Pembayaran</Text>
                    </Left>
                    <Body>
                      <Text>: {item.status}</Text>
                    </Body>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <Text style={styles.judul}>Detail Reservasi</Text>
                  </ListItem>
                  <Card style={styles.card}>
                    <ListItem>
                      <Left>
                        <Text style={styles.txtCard}>Nama</Text>
                      </Left>
                      <Body>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                          <Text style={styles.txtCard2}>: </Text>
                          <Input style={{ borderColor: 'grey', fontSize: 15, fontWeight: 'bold' }} value={item.nama} />
                        </View>
                      </Body>
                      <Right />
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text style={styles.txtCard}>Tanggal</Text>
                      </Left>
                      <Body>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                          <Text style={styles.txtCard2}>: </Text>
                          <Input style={{ borderColor: 'grey', fontSize: 15, fontWeight: 'bold' }} value={item.tanggal} />
                        </View>
                      </Body>
                      <Right />
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text style={styles.txtCard}>Waktu</Text>
                      </Left>
                      <Body>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                          <Text style={styles.txtCard2}>: </Text>
                          <Input style={{ borderColor: 'grey', fontSize: 15, fontWeight: 'bold' }} value={item.waktu} />
                        </View>
                      </Body>
                      <Right />
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text style={styles.txtCard}>Jumlah</Text>
                      </Left>
                      <Body>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                          <Text style={styles.txtCard2}>: </Text>
                          <Input style={{ borderColor: 'grey', fontSize: 15, fontWeight: 'bold' }} value={item.jumlah} />
                        </View>
                      </Body>
                      <Right />
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text style={styles.txtCard}>Bayar Sebelum </Text>
                      </Left>
                      <Body>
                        <Text style={styles.txtCard2}>: {item.waktu_bayar}</Text>
                      </Body>
                      <Right />
                    </ListItem>
                  </Card>
                </List>
                {/* <List>
              <ListItem>
                <Left>
                  <Text style={styles.judul}>Status Pesanan</Text>
                </Left>
                <Body>
                  <Text>: Sedang diproses</Text>
                </Body>
              </ListItem>
            </List> */}
              </View>
            )}
          />
        </View>
      </View >
    )
  }
}