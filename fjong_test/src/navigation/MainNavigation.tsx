import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack'

import FilterScreen from '../components/Screens/FilterScreen'
import { MainTab } from './MainTab'
import { NavigationContainer } from '@react-navigation/native'
import { NavigatorTheme } from '../../assets/global.styles'
import React from 'react'
import StartUpScreen from '../components/Screens/StartUpScreen'
import { useGlobalContext } from '../logic/GlobalContext/GlobalContext'

export type MainNavigatorRoutes = {
    MainTab: undefined
    FilterScreen: undefined
    StartUpScreen: undefined
}

export const MainNavigation = () => {
    const {store} = useGlobalContext()
    const Stack = createStackNavigator()
    const defaultOptions: StackNavigationOptions = {
        headerShown: false,
    }
    return <NavigationContainer
        theme={NavigatorTheme}
        ref={store.navigatorRef}
    >
        <Stack.Navigator
        initialRouteName='StartUpScreen'
        >
            <Stack.Screen options={defaultOptions} name="MainTab" component={MainTab} />
            <Stack.Screen options={{
                title: 'Search',
                headerTitleAlign: 'center',
            }} name="FilterScreen" component={FilterScreen} />
            <Stack.Screen options={{
                title: 'Enter Api Host',
                headerTitleAlign: 'center',
            }} name="StartUpScreen" component={StartUpScreen} />
            {/* <Stack.Screen options={defaultOptions} name="StartUp" component={View} /> */}
        </Stack.Navigator>
    </NavigationContainer>
}