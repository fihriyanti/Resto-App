import React, { Component } from 'react'
import { Image, View, Text, Modal } from 'react-native'
import { Button, Card, CardItem, Right, Icon, Left, Body, List, ListItem, Textarea, Input } from 'native-base'
import { Images } from '../Themes'
import { Calendar } from 'react-native-calendars'
import TimePicker from "react-native-24h-timepicker"
import moment from "moment"
import firebase from 'firebase'

// Styles
import styles from './Styles/ReservasiScreenStyles'
import { ScrollView } from 'react-native'

export default class ReservasiScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show1: false,
            show3: false,
            jumlah: 1,
            showDatePicker: true,

            nama: "",

            hari: "",
            bulan: "",
            tahun: "",

            time: "",

            jmlpelanggan: 0,

            keterangan: "",

            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    showDatePicker = () => {
        setDatePickerVisibility(false)
    }

    hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    tambahJumlah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 })
    }
    kurangJumlah = () => {
        if (this.state.jumlah <= 0) {
            this.state.jumlah = 1
        }
        this.setState({ jumlah: this.state.jumlah - 1 })
    }

    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        if (hour < 8) {
            alert("Jam Buka hanya antara 08 - 16 WITA")
        } else {
            if (hour <= 9) {
                hour = "0" + hour;
            }
            this.setState({ time: `${hour}:${minute}` });
        }
        this.TimePicker.close();
    }

    btnReservasi = () => {
        var waktu = this.state.time;
        var tanggal = this.state.hari + "-" + this.state.bulan + "-" + this.state.tahun;
        var nama = this.state.nama;
        var jumlah = this.state.jmlpelanggan;

        var date_now = moment().utcOffset('+08:00').format(' YYYY-MM-DD HH:mm:ss');
        var date_exp = moment().add(2, 'hours').utcOffset('+08:00').format(' YYYY-MM-DD HH:mm:ss');

        var differ = moment
            .duration(moment(date_exp)
                .diff(moment(date_now)));
        // Difference of the expiry date-time
        var hours = parseInt(differ.asHours());
        var minutes = parseInt(differ.minutes());
        var seconds = parseInt(differ.seconds());

        // Converting in seconds
        var d = hours * 60 * 60 + minutes * 60 + seconds;

        console.log(nama + ", " + jumlah + ", " + tanggal + ", " + waktu)
        console.log(date_now)
        console.log(date_exp)
        // console.log(jam_ini)

        // console.log(jumlah)
        const user = firebase.auth().currentUser;
        const Reservasi = firebase.database().ref("Reservasi/" + user.uid);
        Reservasi.push({
            waktu: waktu,
            tanggal: tanggal,
            waktu_pesan: date_now,
            waktu_bayar: date_exp,
            nama: nama,
            jumlah: jumlah,
            waktu_pesan: date_now,
            waktu_bayar: date_exp,
            duration: d,
            email: user.email,
            userid: user.uid,
            keterangan: this.state.keterangan,
            status: "Belum Bayar"
        })
        this.props.navigation.navigate('CountDownScreen')
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
                    <ScrollView>
                        <View
                            style={styles.centered}>
                            <Image source={Images.logoApp} style={styles.logo} />
                            <Text style={styles.txtTitle}>RESERVASI</Text>
                        </View>
                        <View style={styles.footer}>
                            <Card style={styles.card}>
                                <List>
                                    <ListItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Nama</Text>
                                        </Left>
                                        <Body>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                <Text style={styles.txtCard2}>: </Text>
                                                <Input style={{ borderColor: 'grey', fontSize: 12 }} onChangeText={nama => this.setState({ nama })} placeholder='Nama Pelanggan' />
                                            </View>
                                        </Body>
                                        <Right />
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Tanggal</Text>
                                        </Left>
                                        <Body>
                                            <Text style={styles.txtCard2}>: {this.state.hari}-{this.state.bulan}-{this.state.tahun}</Text>
                                        </Body>
                                        <Right>
                                            <Icon
                                                onPress={() => this.setState({ show: true })}
                                                style={styles.icon} type='Feather' name='calendar' />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Waktu</Text>
                                        </Left>
                                        <Body>
                                            <Text style={styles.txtCard2}>: {this.state.time}</Text>
                                        </Body>
                                        <Right>
                                            <Icon
                                                onPress={() => this.TimePicker.open()}
                                                style={styles.icon} type='AntDesign' name='clockcircleo' />
                                            <TimePicker
                                                ref={ref => {
                                                    this.TimePicker = ref;
                                                }}
                                                maxHour={16}
                                                selectedHour="8"
                                                onCancel={() => this.onCancel()}
                                                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                                            />
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Pelanggan</Text>
                                        </Left>
                                        <Body>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                <Text style={styles.txtCard2}>: </Text>
                                                <Input style={{ borderColor: 'grey', fontSize: 12 }} onChangeText={jmlpelanggan => this.setState({ jmlpelanggan })} placeholder='Jumlah Pelanggan' keyboardType='number-pad' />
                                            </View>
                                        </Body>
                                        <Right />
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Keterangan </Text>
                                        </Left>
                                        <Body>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                <Text style={styles.txtCard2}>: </Text>
                                                <Input style={{ borderColor: 'grey', fontSize: 12 }} onChangeText={keterangan => this.setState({ keterangan })} placeholder='Keterangan' />
                                            </View>
                                        </Body>
                                        <Right />
                                    </ListItem>
                                </List>
                            </Card>
                        </View>
                    </ScrollView>
                    <Button full
                        style={styles.btnSign}
                        onPress={this.btnReservasi}>
                        <Text style={styles.txtSign}>RESERVASI</Text>
                    </Button>
                </View>
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <Calendar
                                todayBackgroundColor="#e6ffe6"
                                selectedDayColor="#66ff33"
                                onDayPress={(startDate) => {
                                    this.setState({ show: false })
                                    {
                                        console.log(startDate.month + startDate.day, startDate)
                                        this.setState({ hari: startDate.day });
                                        this.setState({ bulan: startDate.month });
                                        this.setState({ tahun: startDate.year });
                                    }
                                }}
                                theme={
                                    {
                                        todayTextColor: '#ffffff',
                                        todayBackgroundColor: '#1565c0',
                                    }
                                }
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}