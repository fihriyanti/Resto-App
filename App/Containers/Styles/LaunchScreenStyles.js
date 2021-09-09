import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: '#1565c0',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.ikon,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})