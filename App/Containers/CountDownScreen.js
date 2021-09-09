import React, { Component } from 'react'
import { Image, View, Text, FlatList } from 'react-native'
import { Button, Card, CardItem, Right, Icon, Left, Body, List, ListItem, Textarea, Input } from 'native-base'
import { Images } from '../Themes'
import moment from "moment"
import firebase from 'firebase'
import CountDown from "react-native-countdown-component"

// Styles
import styles from './Styles/CountDownScreenStyles'
import { ScrollView } from 'react-native'

export default class ReservasiScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jumlah: 1,
            showDatePicker: true,

            nama: "",

            hari: "",
            bulan: "",
            tahun: "",

            time: "",

            jmlpelanggan: 0,

            list: [],

            selectedStartDate: null,
        };
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
                })
            })
            this.setState({ list: li })
        })
    }

    tambahJumlah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 })
    }

    batalReservasi = () => {
        const user = firebase.auth().currentUser;
        var reservasi = firebase.database().ref('Reservasi/' + user.uid);
        reservasi.remove().
        then(
            this.props.navigation.navigate('ReservasiScreen')
        )
    }

    btnReservasi = () => {
        // var waktu = this.state.time;
        // var tanggal = this.state.hari + "-" + this.state.bulan + "-" + this.state.tahun;
        // var nama  = this.state.nama;
        // var jumlah = this.state.jmlpelanggan;

        // var date_now = moment().utcOffset('+08:00').format(' YYYY-MM-DD HH:mm:ss');
        // var date_exp = moment().add(6, 'hours').utcOffset('+08:00').format(' YYYY-MM-DD HH:mm:ss');

        // // var hari_ini = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
        // // var jam_ini = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

        // console.log(nama + ", " + jumlah + ", " + tanggal + ", " + waktu)
        // console.log(date_now)
        // console.log(date_exp)
        // // console.log(jam_ini)

        // // console.log(jumlah)
        // const user = firebase.auth().currentUser;
        // const Reservasi = firebase.database().ref("Reservasi/" + user.uid);
        // Reservasi.push({
        //     waktu: waktu,
        //     tanggal: tanggal,
        //     waktu_pesan: date_now,
        //     waktu_bayar: date_exp,
        //     nama: nama,
        //     jumlah: jumlah,
        //     waktu_pesan: date_now,
        //     waktu_bayar: date_exp,
        //     status: "belum bayar"
        // })
        // this.props.navigation.navigate('MenuTabNav')
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#1565c0' }}>
                        <Icon type='Ionicons' name='ios-arrow-back'
                            style={styles.set}
                            onPress={() => this.props.navigation.navigate('Beranda')}
                        />
                    </View>
                    {/* <ScrollView> */}
                    <View
                        style={styles.centered}>
                        <Image source={Images.logoApp} style={styles.logo} />
                        <Text style={styles.txtTitle}>RESERVASI</Text>
                    </View>
                    <View style={styles.footer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.list}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
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
                                    <ListItem>
                                        <Body>
                                            <CountDown
                                                until={item.duration}
                                                //duration of countdown in seconds
                                                timetoShow={('H', 'M', 'S')}
                                                //formate to show
                                                onFinish={() => alert('finished')}
                                                //on Finish call
                                                onPress={() => alert('hello')}
                                                //on Press call
                                                size={20}
                                            />
                                        </Body>
                                    </ListItem>
                                    <Button
                                    style={styles.btnBatal}
                                    onPress={this.batalReservasi}
                                    >
                                        <Text style={styles.txtBatal}>BATALKAN</Text>
                                    </Button>
                                </Card>

                            )}
                        />
                    </View>
                    {/* </ScrollView> */}
                    <Button full
                        style={styles.btnSign}
                        onPress={this.btnReservasi}>
                        <Text style={styles.txtSign}>RESERVASI</Text>
                    </Button>
                </View>
            </View>
        )
    }
}