import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  logo: {
    height: 180,
    width: 420,
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
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  txtHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'serif'
  },
  card: {
    borderRadius: 10,
    marginBottom: 10,
  },
  cardItem: {
    backgroundColor: '#e0f2f1'
  },
  namaMenu: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  hargaMenu: {
    fontSize: 15,
    marginTop: 5,
  },
  review: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  star: { 
    fontSize: 20, 
    color: '#ffd600' 
  },
})