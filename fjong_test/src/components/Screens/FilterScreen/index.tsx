import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Chip from '../../common/Chip'
import { MainNavigatorRoutes } from '../../../navigation/MainNavigation'
import SearchBar from '../../common/SearchBar'
import { StackScreenProps } from '@react-navigation/stack'
import axios from 'axios'
import { styles as s } from './index.styles'
import { useGlobalContext } from '../../../logic/GlobalContext/GlobalContext'

export type FilterScreenProp = StackScreenProps<MainNavigatorRoutes, 'FilterScreen'>

const FilterScreen = <T extends FilterScreenProp>(props: T) => {
  const { store } = useGlobalContext()
  const [currentActive, setcurrentActive] = useState<string[]>(store.filterBrands)
  const [brands, setBrands] = useState<string[]>([])
  const [search, setSearch] = useState(store.search)

  const update = async () => {
    try {
      const result = (await axios('brands')).data
      store.setBrands(result)
      setBrands(store.brands)
    }
    catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {
    update()
  }, [])

  useEffect(() => {
    store.setFilterBrands(currentActive)
  }, [currentActive])
  const searchOutfits = (text: string) => {
    setSearch(text)
    store.setSearch(text)
  }

  const onSubmit = () => {
    props.navigation.navigate('MainTab')
  }

  const onChipPress = (brand: string) => {
    if (currentActive.includes(brand)) {
      setcurrentActive(currentActive.filter(item => item !== brand))
    } else {
      setcurrentActive([...currentActive, brand])
    }
  }

  const clearSearch = () => {
    setSearch('')
    store.setSearch('')
  }
  return (
    <SafeAreaView style={s.container}>
      <View style={s.searchBar}>
        <SearchBar
          state={search}
          setState={((newText) => searchOutfits(newText))}
          onSubmitEditing={onSubmit}
          onPress={clearSearch}
          isEmpty={search === ''}
        />
      </View>

      <Text style={s.textTitle}>Choose Brands:</Text><FlatList
        style={s.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={brands}
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={() => onChipPress(item)}>
            <Chip text={item} getActive={currentActive} style={s.chip} />
          </TouchableOpacity>}
      />



    </SafeAreaView>
  )
}

export default FilterScreen