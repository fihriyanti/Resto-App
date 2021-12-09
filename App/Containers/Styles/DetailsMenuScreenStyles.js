import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1565c0',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  back: {
    color: 'white',
  },
  btn: {
    backgroundColor: 'green',
    marginTop: 10,
    // marginHorizontal: 20,
    borderRadius: 20
  },
  txtBtn: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  txtHeader: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'serif'
  },
  namaMenu: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
  },
  hargaMenu: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  review: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  star: { 
    fontSize: 25, 
    color: '#ffd600' 
  },
  btnCart: {
    backgroundColor: '#1565c0',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  tambah: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
    // alignItems: 'center'
  },
  btnPM: {
    borderColor: 'black',
    borderRadius: 10
  },
  PM : {
    color: 'grey',
    fontSize: 15
  },
  jml: {
    fontSize: 25,
    paddingHorizontal: 10
  },
  note: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 3
  },
})