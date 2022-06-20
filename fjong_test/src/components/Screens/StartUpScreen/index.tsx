import React, { useEffect } from 'react'
import { SafeAreaView, TextInput, View } from 'react-native'

import ActionButton from '../../common/ActionButton'
import { AsyncStorageWrapper } from '../../../logic/AsyncStorage'
import { MainNavigatorRoutes } from '../../../navigation/MainNavigation'
import { StackScreenProps } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'
import { styles as s } from './index.styles'
import { useGlobalContext } from '../../../logic/GlobalContext/GlobalContext'

export type StartUpScreenNavProp = StackScreenProps<MainNavigatorRoutes, 'StartUpScreen'>
type StartUpScreenProp = StartUpScreenNavProp

const StartUpScreen: React.FC<StartUpScreenProp> = observer((props) => {
  const { navigation } = props
  const { store } = useGlobalContext()

  useEffect(() => {
    (async () => {
      store.setApiHost(await AsyncStorageWrapper.getApiHost())
      console.log('apiHost', store.apiHost)
    })()

  }, [])

  const onPress = () => {
    store.updateAxiosApiHost()
    navigation.navigate('MainTab')
  }

  return (
    <SafeAreaView style={s.container}>
      <TextInput
        autoFocus
        style={s.input}
        value={store.apiHost}
        onChangeText={(text) => store.setApiHost(text)}
      />
      <View style={s.btn}>
        <ActionButton icon='action' onPress={onPress} />
      </View>

    </SafeAreaView>
  )
})

export default StartUpScreen
