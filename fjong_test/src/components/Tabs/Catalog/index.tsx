import { FlatList, View } from 'react-native'
import React, { useState } from 'react'

import ActionButton from '../../common/ActionButton'
import CatalogItem from '../../common/CatalogItem/Index'
import LCEOverlay from '../../common/LCEOverlay'
import { LCETypes } from '../../../logic/Types/LCETypes'
import { LinearGradient } from 'expo-linear-gradient'
import { OutfitsEntity } from '../../../logic/Entity/Outfits/Outfit'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../common/SearchBar'
import { StackScreenProps } from '@react-navigation/stack'
import { TabNavigationRoutes } from '../../../navigation/MainTab'
import { Theme } from '../../../../assets/global.styles'
import axios from 'axios'
import { styles as s } from './index.styles'
import { useFocusEffect } from '@react-navigation/native'
import { useGlobalContext } from '../../../logic/GlobalContext/GlobalContext'

export type CatalogNavigationProp = StackScreenProps<TabNavigationRoutes, 'CatalogTab'>

const Catalog = <T extends CatalogNavigationProp>(props: T) => {
    const [outfitsList, setoutfitsList] = useState<OutfitsEntity[]>([])
    const { store } = useGlobalContext()
    const [LCE, setLCE] = useState<LCETypes>('loading')
    const [search, setSearch] = useState(store.search)


    const update = async () => {
        setLCE('loading')
        try {
            const result: OutfitsEntity[] = (await axios('outfits')).data
            store.setRawData(result)
            setoutfitsList(store.getOutfitData)
            setLCE('content')
        }
        catch (e) {
            setLCE('error')
            console.log(e)
        }

    }
    const searchOutfits = (text: string) => {
        setSearch(text)
        store.setSearch(text)
        setoutfitsList(store.getOutfitData)
    }
    const clearSearch = () => {
        setSearch('')
        store.setSearch('')
        setoutfitsList(store.getOutfitData)
    }

    useFocusEffect(
        React.useCallback(() => {
            update()
            setSearch(store.search)
        }, [])
    )

    return (
        <SafeAreaView style={s.container}>
            <LCEOverlay LCE={LCE} onPress={update} />
            <FlatList
                data={outfitsList}
                renderItem={({ item, index }) => <CatalogItem item={item} index={index} />}
                ListFooterComponent={() => <View style={s.footer} />}
            />
            <LinearGradient
                colors={[`#00000000`, Theme.dominant[500]]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.85 }}
                style={s.actionBar}
            >

                <ActionButton onPress={() => { store.navigatorRef.current.navigate('FilterScreen') }} />
                <View style={s.spliter} />
                <SearchBar
                    state={search}
                    setState={(newText) => searchOutfits(newText)}
                    onPress={clearSearch} 
                    isEmpty={search === ''}
                    />
            </LinearGradient>
        </SafeAreaView >
    )
}

export default Catalog