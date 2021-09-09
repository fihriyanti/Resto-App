import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: '#1565c0',
    flex: 1,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    paddingHorizontal: 20
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1565c0',
    textShadowColor: 'grey',
    textShadowRadius: 20,
    textShadowOffset: {width: 2, height: 2}
  },
  form:{
    paddingVertical: 20,
  },
  label: {
    color: '#1565c0',
    fontSize: 15,
    fontWeight: 'bold'
  },
  item1: {
    marginBottom: 20
  },
  input: {
    fontSize: 15,
  },
  btnSign: {
    marginVertical: 20,
    backgroundColor: '#1565c0',
    alignSelf: 'center',
    paddingHorizontal: 50
  },
  txtSign: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  txtAc: {
    color: '#1565c0',
    fontSize: 15,
    // paddingVertical: 20,
    textAlign: 'center'
  },
})