import { NativeSyntheticEvent, Text, TextInput, TextInputSubmitEditingEventData, TouchableOpacity, View } from 'react-native'

import { Icon } from '../../../../assets/Icon'
import React from 'react'
import { Theme } from '../../../../assets/global.styles'
import { styles as s } from './index.styles'

const iconSize = 24

type SearchbarProps = {
  state: string;
  setState: (newText: string) => void;
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
  onPress?: () => void
  isEmpty?: boolean
}

const SearchBar: React.FC<SearchbarProps> = ({ state = "",
  setState = () => { }, ...props }) => {

  const icon = !props.isEmpty ? 'trash' : 'search'
  const onPress = () => {
    if (props.isEmpty){
      return
    }
    props.onPress()
  }

  return (
    <View style={s.container}>
      <TextInput style={s.input}
        onSubmitEditing={props.onSubmitEditing}
        value={state}
        onChangeText={setState}
      />
      <TouchableOpacity style={s.searchWrap} onPress={onPress}>
        <Icon icon={icon} fill={Theme.dominant[500]} width={iconSize} height={iconSize} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar