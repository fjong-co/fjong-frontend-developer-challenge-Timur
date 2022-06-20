import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Svg, { Ellipse } from 'react-native-svg';
import { styles as s, width } from './index.styles'

import Chip from '../Chip'
import { LinearGradient } from 'expo-linear-gradient';
import { OutfitsEntity } from '../../../logic/Entity/Outfits/Outfit'
import axios from 'axios';

type CatalogItemProps = {
    item: OutfitsEntity
    index?: number
}

const CatalogItem: React.FC<CatalogItemProps> = ({ item, index }) => {
    const [currentActivePicture, setCurrentActivePicture] = useState(0)
    const mounted = useSharedValue(0)

    useEffect(() => {
        const onMount = (isOn: boolean) => {
            if (isOn) {
                mounted.value = withDelay(50 * index, withTiming(1, { duration: 500 }))
            } else {
                mounted.value = withDelay(50 * index, withTiming(0, { duration: 500 }))
            }
        }
        onMount(true)
        return () => { onMount(false) }
    }, [])


    const rstyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            mounted.value,
            [0, 1],
            [0, 1]),
        transform: [
            {
                scaleX: interpolate(
                    mounted.value,
                    [0, 1],
                    [0, 1])
            },
            {
                scaleY: interpolate(
                    mounted.value,
                    [0, 1],
                    [0, 1])
            },
        ]
    }))

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const pageNumber = Math.min(Math.max(Math.floor(event.nativeEvent.contentOffset.x / width + 0.5), 0));
        setCurrentActivePicture(pageNumber)
    }

    return (
        <Animated.View key={index + item.id} style={[s.element, rstyle]}>

            <View style={s.imageDotWrapper}>
                {
                    item.images.map((image, index) => {
                        const active = currentActivePicture === index
                        if (item.images.length > 1) {
                            return <Animated.View key={index} style={[s.imageDot, active && s.imageDotActive]} />
                        }
                    })}
            </View>
            <FlatList
                onScroll={onScroll}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={s.container}
                data={item.images}
                renderItem={
                    ({ item, index }) => (
                        <Image
                            key={index}
                            style={s.img}

                            source={{
                                uri: `${axios.defaults.baseURL}${item}`,
                            }} />
                    )
                } />
            <LinearGradient
                colors={[`#00000000`, `#000000B3`, `#000000FF`]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.95 }}
                style={s.bottomBackgroud}
            >
                <Text style={s.title}>{item.name}</Text>
                {item.brands.length > 0 && <View style={s.brandsList}>
                    <Text style={s.brand}>Brands:</Text>
                    {item.brands.map((brand, index) => <Chip key={index} text={brand} />)}
                </View>}
                {item.description && <Text ellipsizeMode='tail' numberOfLines={5} style={s.description}>{item.description}</Text>}
            </LinearGradient>
        </ Animated.View>
    )
}


export default CatalogItem