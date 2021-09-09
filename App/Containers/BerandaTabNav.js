import React from 'react'
import { createAppContainer } from 'react-navigation'
import Beranda from '../Containers/BerandaScreen'
import Akun from '../Containers/AkunScreen'
import Tentang from '../Containers/TentangRestoScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Beranda: Beranda,
            Akun: Akun,
            Tentang: Tentang
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Beranda') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (routeName === 'Akun') {
                        iconName = focused ? 'user-alt' : 'user-alt';
                    } else if (routeName === 'Tentang') {
                        iconName = focused ? 'info-circle' : 'info-circle';
                    }
                    return <FontAwesome5 name={iconName} size={28} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: '#1565c0',
                inactiveTintColor: '#707070',
            },
            showIcon: true,
        },

    )
)