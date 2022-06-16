import React, { useEffect } from 'react'
import { SafeAreaView, TextInput, View } from 'react-native'

import ActionButton from '../../common/ActionButton'
import { AsyncStorageWrapper } from '../../../logic/AsyncStorage'
import { MainNavigatorRoutes } from '../../../navigation/MainNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import { styles as s } from './index.styles'
import { useGlobalContext } from '../../../logic/GlobalContext/GlobalContext'

export type StartUpScreenProp = StackScreenProps<MainNavigatorRoutes, 'StartUpScreen'>

const StartUpScreen = <T extends StartUpScreenProp>(props: T) => {
  const { navigation } = props
  const { store } = useGlobalContext()


  const [apiHost, setApiHostState] = React.useState('')

  useEffect(() => {
    (async () => {
      setApiHostState(await AsyncStorageWrapper.getApiHost())
      console.log('apiHost', apiHost)
    })()
    
  }, [])

  const onPress = () => {
    AsyncStorageWrapper.setApiHost(apiHost)
    store.updateAxiosApiHost(apiHost)
    navigation.navigate('MainTab')
  }

  return (
    <SafeAreaView style={s.container}>
      <TextInput
        autoFocus
        style={s.input}
        value={apiHost}
        onChangeText={(text) => setApiHostState(text)}
      />
      <View style={s.btn}>
        <ActionButton icon='action' onPress={onPress} />
      </View>

    </SafeAreaView>
  )
}

export default StartUpScreen

function AxiosConfigWrapper() {
  throw new Error('Function not implemented.')
}
