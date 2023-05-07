import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './Auth/Auth';
import MainScreen from './MainScreen/MainScreen';

const Navigator = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='auth' component={Auth} options={{headerShown:false}}/>
        <Stack.Screen name="main" component={MainScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Navigator