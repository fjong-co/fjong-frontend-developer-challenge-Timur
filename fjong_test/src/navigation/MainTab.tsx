import { View, ViewStyle } from 'react-native';

import Catalog from '../components/Tabs/Catalog';
import { Icon } from '../../assets/Icon';
import React from 'react';
import { Theme } from '../../assets/global.styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export type TabNavigationRoutes = {
    CatalogTab: undefined
    SettingsTab: undefined
  }

const TabStyle: ViewStyle = {
    backgroundColor: Theme.dominant[500],
    height: 55,
    paddingBottom: 5,
}

export const MainTab = () => {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({

                initialRouteName: 'HomeTab',
                tabBarStyle: TabStyle,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'CatalogTab') {
                        return <Icon icon={'catalog'} width={size} height={size} fill={color} />;
                    } else if (route.name === 'SettingsTab') {
                        return <Icon width={size} height={size} fill={color} />;
                    }
                },
                tabBarActiveTintColor: Theme.accent[500],
                tabBarInactiveTintColor: Theme.text[100],

            })}
        >
            <Tab.Screen
                name="CatalogTab"
                component={Catalog}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Catalog'
                }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={View}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings'
                }}
            />
        </Tab.Navigator>
    );
}