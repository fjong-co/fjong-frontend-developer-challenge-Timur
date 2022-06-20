import { MainNavigation } from './src/navigation/MainNavigation';
import React from 'react';
import { StatusBar } from 'react-native';
import { Store } from './src/logic/GlobalContext/GlobalContextStore'
import { GlobalContext } from './src/logic/GlobalContext/GlobalContext';

export default function App() {
  return (
    <GlobalContext.Provider value={{ store: new Store }}>
      <StatusBar
        barStyle='light-content'
        translucent={true}
        backgroundColor='transparent' />
      <MainNavigation />
    </GlobalContext.Provider>

  );
}
