import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: Metrics.images.ikon,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
  centered: {
    backgroundColor: '#1565c0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 120,
    paddingHorizontal: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  btnSign: {
    marginBottom: 20,
    backgroundColor: '#1565c0',
    alignSelf: 'center',
    paddingHorizontal: 50
  },
  txtSign: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnSignUp: {
    alignSelf: 'center',
    paddingHorizontal: 38,
    borderColor: '#1565c0'
  },
  txtSignUp: {
    color: '#1565c0',
    fontSize: 20,
    fontWeight: 'bold'
  },
})