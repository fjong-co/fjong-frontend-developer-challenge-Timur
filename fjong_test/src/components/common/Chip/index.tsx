import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import React, { useEffect } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import { Theme } from '../../../../assets/global.styles'
import { styles as s } from './index.styles'

type ChipProps = {
  text: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  getActive?: string[]
}
const Chip: React.FC<ChipProps> = (props) => {
  const isActive = useSharedValue(0)

  useEffect(() => {
    if (!props.getActive) {
      return
    }
    if (props.getActive.includes(props.text)) {
      isActive.value = withTiming(1, { duration: 300 })
    } else {
      isActive.value = withTiming(0, { duration: 300 })
    }
  }, [props.getActive])

  const rstyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(isActive.value, [0, 1], [Theme.dominant[400], '#000']),
  }))

  return (
    <Animated.View style={[s.container, props.style, rstyle]}>
      <Text style={s.text}>{props.text}</Text>
    </Animated.View>
  )
}

export default Chip