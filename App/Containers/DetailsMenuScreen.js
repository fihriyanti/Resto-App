import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Body, Button, Card, CardItem, Icon, Left, Right } from 'native-base'
import firebase from 'firebase';

// Styles
import styles from './Styles/DetailsMenuScreenStyles'

export default class DetailsMenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            img: '',
            nama: '',
            harga: '',
        }
    }
    tambahJumlah = () => {
        this.setState({ count: this.state.count + 1 })
    }
    kurangJumlah = () => {
        if (this.state.count <= 0) {
            this.state.count = 1
        }
        this.setState({ count: this.state.count - 1 })
    }

    jumlahkan = () => {
    }

    updateMenu = () => {
    }

    updateHarga(id, jml) {

    }

    tambaMenu = () => {
        const user = firebase.auth().currentUser;
        firebase.database()
            .ref("Keranjang/" + user.uid)
            .orderByChild("keymenu")
            .equalTo(this.props.navigation.getParam('paramkey'))
            .once("value")
            .then(snapshot => {
                if (snapshot.val()) {
                    var jumlah = this.state.count * this.props.navigation.getParam('paramharga');
                    var banyak = this.state.count;
                    // console.log(snapshot)
                    // const obj = JSON.parse(snapshot.val());
                    // console.log(obj.nama)
                    console.log("ada data")

                    // console.log(snapshot.child("Keranjang/" + user.uid + "/").key)

                    snapshot.forEach(function (childSnapshot) {
                        // key will be "ada" the first time and "alan" the second time
                        var key = childSnapshot.key;
                        // childData will be the actual contents of the child
                        console.log(key)
                        var update_keranjang = firebase.database().ref("Keranjang/" + user.uid + "/" + key);
                        update_keranjang.update(
                            {
                                banyak: banyak,
                                perjumlah: jumlah
                            });

                        // var banyak_now = childSnapshot.val().banyak;   
                    });
                    console.log("Updated !!!")
                    // this.updateHarga(key, banyak_now);
                    this.props.navigation.navigate('MenuTabNav')
                } else {
                    var jumlah = this.state.count * this.props.navigation.getParam('paramharga');
                    // console.log(jumlah)
                    const Keranjang = firebase.database().ref("Keranjang/" + user.uid);
                    Keranjang.push({
                        keymenu: this.props.navigation.getParam('paramkey'),
                        img: this.props.navigation.getParam('paramimg'),
                        nama: this.props.navigation.getParam('paramnama'),
                        harga: this.props.navigation.getParam('paramharga'),
                        banyak: this.state.count,
                        perjumlah: jumlah,
                    })
                    this.props.navigation.navigate('MenuTabNav')
                }
            })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Left>
                            <Icon style={styles.back} type='AntDesign' name='arrowleft'
                                onPress={() => this.props.navigation.navigate('MenuTabNav')}
                            />
                        </Left>
                        <Body>
                            <Text style={styles.txtHeader}>Menu's Detail</Text>
                        </Body>
                        <Right />
                    </View>
                    <View>
                        <Image source={{ uri: this.props.navigation.getParam('paramimg') }} style={styles.logo} />
                        <Card style={styles.btn}>
                            <CardItem style={{ backgroundColor: 'green' }}>
                                <Body>
                                    <Text style={styles.txtBtn}>TERSEDIA</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={styles.body}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text style={styles.namaMenu}>{this.props.navigation.getParam('paramnama')}</Text>
                                    <Text style={styles.hargaMenu}>Rp. {this.props.navigation.getParam('paramharga')}</Text>
                                </View>
                                <View style={styles.tambah}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Button bordered style={styles.btnPM}
                                            onPress={this.kurangJumlah}
                                        >
                                            <Icon style={styles.PM} type='FontAwesome5' name='minus' />
                                        </Button>
                                        <Button transparent>
                                            <Text style={styles.jml}>{this.state.count}</Text>
                                        </Button>
                                        <Button bordered style={styles.btnPM}
                                            onPress={this.tambahJumlah}
                                        >
                                            <Icon style={styles.PM} type='FontAwesome5' name='plus' />
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Button full style={styles.btnCart}
                    onPress={this.tambaMenu}
                >
                    <Icon style={styles.back} type='FontAwesome5' name='cart-plus' />
                </Button>
            </View>
        )
    }
}