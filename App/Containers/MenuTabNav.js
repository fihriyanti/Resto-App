import React from 'react'
import Food from './MenuMakananScreen'
import Drink from './MenuMinumanScreen'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Food: Food,
            Drink: Drink,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Food') {
                        iconName = focused ? 'restaurant' : 'restaurant-outline';
                    } else if (routeName === 'Drink') {
                        iconName = focused ? 'wine' : 'wine-outline';
                    }
                    return <Ionicons name={iconName} size={28} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: '#1565c0',
                inactiveTintColor: '#707070',
            },
        },

    )
)