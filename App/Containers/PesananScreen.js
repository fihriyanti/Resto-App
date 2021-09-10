import React, { Component } from 'react'
import { View, Text, FlatList, Modal } from 'react-native'
import { Button, Icon, Input, List, ListItem, Item } from 'native-base'
import firebase from 'firebase'

// Styles
import styles from './Styles/PesananScreenStyles'

export default class PesananScreen extends Component {
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
              <Icon style={styles.back} type='AntDesign' name='arrowleft'
                onPress={() => this.props.navigation.navigate('KeranjangScreen')}
              />
              <Text style={styles.txtHeader}>Pesanan</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.lineCard}>
              <Text style={styles.judul}>Jumlah Pesanan</Text>
              <FlatList
                data={this.state.cart}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <List style={styles.card}>
                    <ListItem>
                      <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.namaMenu}>{item.nama}</Text>
                          <Text style={styles.jumlah}>x {item.banyak}</Text>
                        </View>
                        <Text style={styles.hargaMenu}>Rp. {item.harga}</Text>
                      </View>
                    </ListItem>
                  </List>
                )}
              />
            </View>
            <Text style={styles.judul}>No. Meja</Text>
            <Item>
              <Input placeholder="Input No Meja" />
            </Item>
            <Text style={styles.judul}>Metode Pembayaran</Text>
            <View style={{ flexDirection: 'column' }}>
              <Button full style={styles.btnPesan}
                onPress={() => this.setState({ show: true })}
              >
                <Text style={styles.txtBtnPesan}>TRANSFER BANK</Text>
              </Button>
              <Button full style={styles.btnPesan}
                onPress={() => this.setState({ show: true })}
              >
                <Text style={styles.txtBtnPesan}>CASH</Text>
              </Button>
            </View>
          </View>
          <View style={styles.total}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txtTotal}>Total Pembayaran : </Text>
              <Text style={styles.txtTotal}>Rp. {this.state.total}</Text>
            </View>
          </View>
        </View>
        <Modal transparent={true} visible={this.state.show}>
          <View style={styles.bgModal}>
            <View style={styles.modal}>
              <Text style={styles.judul}>Transfer Bank</Text>
              <Text>Silahkan Transfer Ke Rekening BSI : a/n FIHRIYANTI</Text>
              <List>
                <ListItem>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.noRek}>7134256596</Text>
                    {/* <Text style={styles.hargaMenu}>a/n FIHRIYANTI</Text> */}
                    <Text style={styles.hargaMenu}>total pembayaran sebesar :</Text>
                    <Text style={styles.noRek1}>Rp. {this.state.total}</Text>
                  </View>
                </ListItem>
              </List>
              <Button full
                style={styles.btnPesan}
                onPress={() => {
                  this.setState({ show: false });
                  this.props.navigation.navigate('PembayaranScreen');
                }}
              >
                <Text style={styles.txtBtnPesan}>BAYAR</Text>
              </Button>
              <Text style={{color: 'red'}}>Silahkan mengklik tombol bayar setelah melakukan pembayaran</Text>
            </View>
          </View>
        </Modal>
        <Modal transparent={true} visible={this.state.show2}>
          <View style={styles.bgModal}>
            <View style={styles.modal}>
              <Text style={styles.judul}>Cash</Text>
              <Text>Silahkan lakukan pembayaran di kasir</Text>
              <List>
                <ListItem>
                  <View style={{ flexDirection: 'column' }}>
                    {/* <Text style={styles.noRek}>7134256596</Text> */}
                    {/* <Text style={styles.hargaMenu}>a/n FIHRIYANTI</Text> */}
                    <Text style={styles.hargaMenu}>total pembayaran sebesar :</Text>
                    <Text style={styles.noRek1}>Rp. {this.state.total}</Text>
                  </View>
                </ListItem>
              </List>
              <Button full
                style={styles.btnPesan}
                onPress={() => {
                  this.setState({ show: false });
                  this.props.navigation.navigate('PembayaranScreen');
                }}
              >
                <Text style={styles.txtBtnPesan}>BAYAR</Text>
              </Button>
              <Text style={{color: 'red'}}>Silahkan mengklik tombol bayar setelah melakukan pembayaran</Text>
            </View>
          </View>
        </Modal>
      </View >
    )
  }
}