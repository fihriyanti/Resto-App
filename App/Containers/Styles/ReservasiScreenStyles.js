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
        resizeMode: 'contain'
    },
    centered: {
        backgroundColor: '#1565c0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    batas: {
        backgroundColor: 'yellow', 
        padding: 10, 
        margin: 10, 
        borderRadius: 20
    },
    set: {
      color: 'white',
      fontSize: 32,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10
    },
    txtTitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btnSign: {
        backgroundColor: '#1565c0',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    txtSign: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
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
        paddingVertical: 8
    },
    icon: {
        color: '#1565c0',
        fontSize: 25
    },
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10
    },
    bgModal: {
        backgroundColor: '#9e9e9eaa',
        flex: 1,
        justifyContent: 'center',
    },
    btnPilih: {
        borderColor: '#1565c0',
        padding: 10
    },
    txtBtnPilih: {
        textAlign: 'center', 
        color: '#1565c0', 
        fontWeight: 'bold'
    },
})