import React, { Component } from 'react'
import { Image, View, Text, FlatList } from 'react-native'
import { Card, CardItem, Icon, Left, Right } from 'native-base'
import { TouchableHighlight } from 'react-native-gesture-handler'
import firebase from 'firebase'

// Styles
import styles from './Styles/MenuMakananScreenStyles'


export default class MenuMakananScreen extends Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      harga: '',
      img: '',
      list: []
    }
  }

  componentDidMount() {

    firebase.database().ref('Menu/Makanan').on('value', (snapshot) => {
      var li = []
      snapshot.forEach((child) => {
        li.push({
          key: child.key,
          nama: child.val().Nama,
          harga: child.val().Harga,
          img: child.val().Img
        })
      })
      this.setState({ list: li })
    })
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Icon style={styles.back} type='AntDesign' name='arrowleft'
                onPress={() => this.props.navigation.navigate('BerandaTabNav')}
              />
              <Text style={styles.txtHeader}>D'Fas To</Text>
              <Icon style={styles.back} type='FontAwesome5' name='shopping-cart'
                onPress={() => this.props.navigation.navigate('KeranjangScreen')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.list}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => {
                    console.log(item.key, item.nama, item.harga, item.img)
                    this.props.navigation.navigate('DetailsMenuScreen', {
                      paramkey: item.key,
                      paramnama: item.nama,
                      paramharga: item.harga,
                      paramimg: item.img,
                      paramkey : item.key
                    })
                  }
                  }
                >
                  <Card style={styles.card}>
                    <CardItem cardBody>
                      <Image source={{ uri: item.img }} style={styles.logo} />
                    </CardItem>
                    <CardItem style={styles.cardItem}>
                      <Left>
                        <View>
                          <Text style={styles.namaMenu}>{item.nama}</Text>
                          <Text style={styles.hargaMenu}>Rp. {item.harga}</Text>
                        </View>
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableHighlight>
              )}
            />
          </View>
        </View>
      </View>
    )
  }
}