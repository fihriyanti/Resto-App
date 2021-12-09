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
  lineCard: {
    paddingBottom: 10
  },
  card: {
    borderRadius: 10,
  },
  cardItem: {
    backgroundColor: '#e0f2f1'
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
  btnJumlah: {
    backgroundColor: 'grey',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  PM : {
    fontSize: 10,
    color: 'white'
  },
  total: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 20,
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
    backgroundColor: 'white', 
    padding: 20, 
    flex: 1, 
    marginHorizontal: 20, 
    marginVertical: 280, 
    borderRadius: 30 
  },
  btnOK: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 10,
    paddingHorizontal: 30,
    backgroundColor: '#1565c0'
  },
  txtBtnOK: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
})