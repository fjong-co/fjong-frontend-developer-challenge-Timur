import { MainNavigation } from '../../navigation/MainNavigation'
import React from 'react'
import { Store } from './GlobalContextStore'

const store = new Store

export type GlobalContextType = {
 store: Store
}

export const GlobalContext = React.createContext<GlobalContextType>({
  store: store
})

export const useGlobalContext = () => React.useContext(GlobalContext)
