import { action, computed, makeObservable, observable } from 'mobx'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper } from '../AsyncStorage'
import { MainNavigatorRoutes } from '../../navigation/MainNavigation'
import { NavigationContainerRef } from '@react-navigation/native'
import { OutfitsEntity } from '../Entity/Outfits/Outfit'
import React from 'react'
import axios from 'axios'

export class Store {
	apiHost = 'http://'
	navigatorRef =
		React.createRef<NavigationContainerRef<MainNavigatorRoutes>>()
	rawData: OutfitsEntity[] | undefined = undefined
	brands: string[] | undefined = undefined
	filterBrands: string[] = []
	search: string = ''
	constructor() {
		makeObservable(this, {
			apiHost: observable,
			rawData: observable,
			brands: observable,
			filterBrands: observable,
			search: observable,
			setApiHost: action,
			setRawData: action,
			setBrands: action,
			setFilterBrands: action,
			setSearch: action,
			getOutfitData: computed,
		})
	}
	setRawData = (rawData: OutfitsEntity[]) => {
		this.rawData = rawData
	}
	setBrands = (brands: string[]) => {
		this.brands = brands
	}
	setFilterBrands = (filterBrands: string[]) => {
		this.filterBrands = filterBrands
	}
	setSearch = (search: string) => {
		this.search = search
	}
	setApiHost = (apiHost: string) => {
		this.apiHost = apiHost
	}
	get getOutfitData() {
		let result = this.rawData
		if (this.filterBrands.length > 0) {
			result = result?.filter(item =>
				item.brands.some(brand => this.filterBrands.includes(brand)),
			)
		}
		if (this.search.length > 0) {
			result = result?.filter(item => {
				const name = item.name
					.toLowerCase()
					.includes(this.search.toLowerCase())
				const description =
					item.description &&
					item.description
						.toLowerCase()
						.includes(this.search.toLowerCase())
				return name || description
			})
		}
		return result
	}
	updateAxiosApiHost = (apiHost: string) => {
		axios.defaults.baseURL = apiHost
		this.setApiHost(apiHost)
		console.log('updateAxiosApiHost', apiHost, 'axios.defaults.baseURL', axios.defaults.baseURL)
	}
}
