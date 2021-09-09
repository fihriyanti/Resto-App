import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import styles from './Styles/NavigationStyles'

const PrimaryNav = createStackNavigator({

}, {
    headerMode: 'none',
    initialRouteName: '',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)