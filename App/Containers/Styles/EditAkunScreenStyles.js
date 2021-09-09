import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#1565c0',
  },
  logo: {
    height: Metrics.images.profile,
    width: Metrics.images.profile,
    borderRadius: 70
  },
  set: {
    color: 'white',
    fontSize: 32,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },
  set1: {
    color: 'white',
    fontSize: 22,
    marginTop: 10,
    marginRight: 10,
  },
  centered: {
    backgroundColor: '#1565c0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  btnGantiProfile: {
    alignSelf: 'center', 
    marginTop: 10, 
    backgroundColor: 'white', 
    padding: 10,
    borderColor: '#757575'
  },
  txtGantiProfile : {
    color: '#1565c0',
    fontSize: 15
  },
  nama: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  username: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold'
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  txtLeft: {
    fontSize: 15,
    color: 'grey'
  },
  txtRight: {
    fontSize: 18,
  }
})