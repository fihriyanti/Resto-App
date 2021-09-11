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
  },
  namaMenu: {
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#1565c0',
    marginVertical: 20
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})