import React, { Component } from 'react'
import { Image, View, Text, Modal, FlatList, ScrollView } from 'react-native'
import { Button, Card, CardItem, Icon, Textarea, } from 'native-base'
import { Images } from '../Themes'
import firebase from 'firebase'

// Styles
import styles from './Styles/KeranjangScreenStyles'

export default class KeranjangScreen extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      jumlah: 0,
      cart: [],
      total: 0,
      modal: false,
      value: '',
    }
  }

  componentDidMount() {
    this.total();

    const user = firebase.auth().currentUser

    // const tampil = firebase.database().ref('Keranjang/01')
    // tampil.on('value', datasnap=>{
    //   console.log(datasnap.val())
    // })
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
          perjumlah: child.val().perjumlah,
          note: child.val().note
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

  closemodal(){
    this.setState({modal : false})
  }

  tambahJumlah(key, hrg, jml) {
    const user = firebase.auth().currentUser;
    // console.log(this.state.count);
    var jumlah_brg = jml + 1;
    // this.setState({ count: jumlah_brg });
    // var harga_brg = hrg;

    var total = jumlah_brg * hrg;
    var update_keranjang = firebase.database().ref("Keranjang/" + user.uid + "/" + key);
    update_keranjang.update(
      {
        banyak: jumlah_brg,
        perjumlah: total
      });
    console.log(total);
  }

  kurangJumlah(key, hrg, jml) {
    const user = firebase.auth().currentUser;
    var jumlah_brg = jml - 1;
    if (jumlah_brg <= 0) {
      var update_keranjang = firebase.database().ref("Keranjang/" + user.uid + "/" + key);
      update_keranjang.remove().
        then(function () {
          console.log("Remove succeeded.")
        })
      console.log(total);
    } else {
      var total = jumlah_brg * hrg;
      var update_keranjang = firebase.database().ref("Keranjang/" + user.uid + "/" + key);
      update_keranjang.update(
        {
          banyak: jumlah_brg,
          perjumlah: total
        });
      console.log(total);

    }
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
                onPress={() => this.props.navigation.navigate('MenuTabNav')}
              />
              <Text style={styles.txtHeader}>Keranjang Saya</Text>
            </View>
          </View>
          {/* <ScrollView scrollEnabled={false}> */}
          <View style={styles.body}>
            <View style={styles.lineCard}>
              <FlatList
                data={this.state.cart}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <Card style={styles.card}>
                    <CardItem cardBody>
                      <Image source={{ uri: item.img }} style={styles.logo} />
                      <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                        <Text style={styles.namaMenu}>{item.nama}</Text>
                        <Text style={styles.hargaMenu}>Rp. {item.harga}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Button style={styles.btnJumlah}
                              onPress={() => this.kurangJumlah(item.key, item.harga, item.banyak)}
                            >
                              <Icon style={styles.PM} type='FontAwesome5' name='minus' />
                            </Button>

                            <Button transparent>
                              <Text style={styles.jumlah}>{item.banyak}</Text>
                            </Button>

                            <Button style={styles.btnJumlah}
                              onPress={() => this.tambahJumlah(item.key, item.harga, item.banyak)}
                            >
                              <Icon style={styles.PM} type='FontAwesome5' name='plus' />
                            </Button>
                            {/* <Button style={styles.btnJumlah}
                                onPress={()=>this.tambahJumlah(item.key, item.harga, item.banyak)}
                              > */}
                            <Icon style={{ margin: 10 }} type='SimpleLineIcons' name='note'
                              onPress={() => { this.setState({ modal: true }) }}
                            />
                            {/* </Button> */}
                          </View>
                        </View>
                      </View>
                      <Modal
                        transparent={true}
                        visible={this.state.modal}
                        animationType='slide'
                        onRequestClose={() => {this.setState({ modal: false })}}                        
                      >
                        <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                          <View style={styles.modal}>
                            <Text style={styles.namaMenu}>Catatan pesanan :</Text>
                            <ScrollView>
                              <Textarea rowSpan={7} bordered>{item.note}</Textarea>
                              
                            </ScrollView>
                            <Button rounded style={styles.btnOK}
                              onPress={() => { this.setState({ modal: false }) }}
                            >
                              <Text style={styles.txtBtnOK}>OK</Text>
                            </Button>
                          </View>
                        </View>
                      </Modal>
                    </CardItem>
                  </Card>
                  
                )}

              />
            </View>
          </View>
          {/* </ScrollView> */}
          <View style={styles.total}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txtTotal}>Total : </Text>
              <Text style={styles.txtTotal}>Rp. {this.state.total}</Text>
            </View>
            <Button full style={styles.btnPesan}
              onPress={() => this.props.navigation.navigate('PesananScreen')}
            >
              <Text style={styles.txtBtnPesan}>PESAN</Text>
            </Button>
          </View>
          
        </View>
      </View >
    )
  }
}