import React from 'react';
import { SafeAreaView } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./src/navigation/Navigator";
// redux 
import { Provider } from 'react-redux';
import store from './src/redux/store/storeConfiguration'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {

  const persistor = persistStore(store);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <PersistGate persistor={persistor}>
            <Navigator />
          </PersistGate>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}


export default App;

