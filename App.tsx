/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();




function App(): React.JSX.Element {


  return (
 
          <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
  <Stack.Screen name="Details" component={DetailsScreen}   options={{ headerShown: false }} />
</Stack.Navigator>
</NavigationContainer>

  );
}



export default App;
