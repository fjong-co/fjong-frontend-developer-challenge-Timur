import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

import { LCETypes } from '../../../logic/Types/LCETypes'
import { styles as s } from './index.styles'

type LCEOverlayProps = {
  LCE: LCETypes
  onPress?: () => void
}
const LCEOverlay: React.FC<LCEOverlayProps> = (props) => {
  const { height } = Dimensions.get('screen')
  const loading = useSharedValue(1)
  const error = useSharedValue(0)
  const transform = useSharedValue(1)
  const loadingText = useSharedValue(0)

  useEffect(() => {
    if (props.LCE === 'loading') {
      loading.value = withTiming(1, { duration: 500 })
      loadingText.value = withRepeat(withSpring(1), -1, true)
      error.value = withTiming(0, { duration: 500 })
      transform.value = withDelay(500, withTiming(1, { duration: 100 }))
    } else if (props.LCE === 'error') {
      loading.value = withDelay(25, withTiming(0, { duration: 500 }))
      loadingText.value = withTiming(0, { duration: 500 })
      error.value = withDelay(25, withTiming(1, { duration: 500 }))
      transform.value = withDelay(500, withTiming(1, { duration: 100 }))
    } else {
      loading.value = withDelay(25, withTiming(0, { duration: 500 }))
      loadingText.value = withTiming(0, { duration: 500 })
      error.value = withDelay(25, withTiming(0, { duration: 500 }))
      transform.value = withDelay(500, withTiming(0, { duration: 100 }))
    }
  }, [props.LCE])

  const rstyleLoading = useAnimatedStyle(() => ({
    opacity: interpolate(
      loading.value,
      [0, 1],
      [0, 1]),
    // transform: interpolate(
    //   transform.value,
    //   [0, 1],
    //   [-20, 10]),
    transform: [
      {
        translateY: interpolate(
          transform.value,
          [0, 1],
          [height, 0])
      },
    ]

  }))
  const rstyleError = useAnimatedStyle(() => ({
    opacity: interpolate(
      error.value,
      [0, 1],
      [0, 1]),
    transform: [
      {
        translateY: interpolate(
          transform.value,
          [0, 1],
          [height, 0])
      },
    ]

  }))

  const rStyleLoadingText = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          loadingText.value,
          [0, 1],
          [0, -10]),

      }
    ]
  }))
  return (
    <>
      <Animated.View style={[rstyleLoading, s.container]}>
        <Animated.Text style={[rStyleLoadingText, s.Text]}>LOADING...</Animated.Text >
      </Animated.View>
      <Animated.View style={[rstyleError, s.container]}>
        <Text style={s.ErrorText}>ERROR</Text>
        <Text style={s.Text}>Something went wrong. Try again.</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={props.onPress}
          style={s.button}
        >
          <Text>Update</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  )
}

export default LCEOverlay