import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Icon } from '../../../../assets/Icon'
import React from 'react'
import { Theme } from '../../../../assets/global.styles'
import { styles as s } from './index.styles'

type FilterBtnProps = {
  onPress?: () => void
}
const FilterBtn: React.FC<FilterBtnProps> = (props) => {
  const iconSize = 24
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.btnWrap} onPress={props.onPress}>
        <Icon icon='filter' fill={Theme.dominant[500]} width={iconSize} height={iconSize} />
      </TouchableOpacity>
    </View>
  )
}

export default FilterBtn