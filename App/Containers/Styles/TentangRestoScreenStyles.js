import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dotView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  dot: {
    color: '#757575',
    margin: 3,
    fontSize: 18,
  },
  Activedot: {
    color: 'white',
    margin: 3,
    fontSize: 18,
  },
  nama: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  txtPop: {
      marginLeft: 20,
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'serif'
  },
  card: {
    borderRadius: 20,
    marginRight: 10,
  },
  namaMenu: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 12
  },
})