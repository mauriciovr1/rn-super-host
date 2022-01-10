import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeLibProvider} from '@rpc_1910/ui';

import MainScreen from './src/screens/MainScreen';
import ClipboardExample from '@super-home-module';
import HomeModule from '@rpc_1910/home-module';

const MainRoutes = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeLibProvider>
      <NavigationContainer>
        <MainRoutes.Navigator initialRouteName="Main">
          <MainRoutes.Screen name="Main" component={MainScreen} />
          <MainRoutes.Screen name="Clipboard" component={ClipboardExample} />
          <MainRoutes.Screen name="Home" component={HomeModule} />
        </MainRoutes.Navigator>
      </NavigationContainer>
    </ThemeLibProvider>
  );
}
