import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Icon, Thumbnail, List, ListItem, Left, } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/EditAkunScreenStyles'
import { ScrollView } from 'react-native'

export default class EditAkunScreen extends Component {
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
              onPress={() => this.props.navigation.navigate('Akun')}
            />
          </View>
          <View style={styles.centered}>
            <Thumbnail source={Images.profile} style={styles.logo} />
            <Button style={styles.btnGantiProfile}>
              <Text style={styles.txtGantiProfile}>Ganti Foto Profile</Text>
            </Button>
            <Text style={styles.nama}>Akun Saya</Text>
            <Text style={styles.username}>@username</Text>
          </View>
          <View style={styles.footer}>
            <ScrollView>
              <List>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>Nama</Text>
                  </Left>
                  <Text style={styles.txtRight}>Akun Saya</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>Username</Text>
                  </Left>
                  <Text style={styles.txtRight}>@username</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text style={styles.txtLeft}>No. HP</Text>
                  </Left>
                  <Text style={styles.txtRight}>081234567890</Text>
                </ListItem>
                <ListItem>
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
                </ListItem>
              </List>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}