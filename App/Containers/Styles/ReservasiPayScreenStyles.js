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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  txtHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'serif',
    marginLeft: 10,
  },
  judul: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  card: {
    borderRadius: 10,
  },
  txtCard: {
    fontWeight: 'bold',
    fontSize: 12
  },
  txtCard1: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5
  },
  txtCard2: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 13
  },
})