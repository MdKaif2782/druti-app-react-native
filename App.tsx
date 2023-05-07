import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';


import { useColorScheme } from 'react-native'

import {TamaguiProvider, Theme } from 'tamagui'
import config from './tamagui.config'
import Navigator from './screens/Navigator';
export default function App() {

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }
  return (

    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>

  )

}
