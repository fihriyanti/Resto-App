import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    height: Metrics.images.profile,
    width: Metrics.images.profile,
    resizeMode: 'stretch',
  },
  header: {
    backgroundColor: '#1565c0',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  back: {
    color: 'white',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  txtHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'serif',
    marginLeft: 10,
  },
  judul:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  lineCard: {
    paddingBottom: 10
  },
  card: {
    backgroundColor: '#dbdbdb'
  },
  namaMenu: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  hargaMenu: {
    marginTop: 10,
    fontSize: 15,
  },
  jumlah: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 8,
    fontWeight:'bold'
  },
  total: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  txtTotal: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnPesan: {
    backgroundColor: '#1565c0',
    marginTop: 10
  },
  txtBtnPesan: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  modal: {
      // justifyContent: 'center',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 50,
      paddingHorizontal: 20,
  },
  bgModal: {
      backgroundColor: '#9e9e9eaa',
      flex: 1,
      justifyContent: 'flex-end'
  },
  noRek: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  noRek1: {
    // padding: 8,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
})