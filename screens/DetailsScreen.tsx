import React from 'react';
import type {PropsWithChildren} from 'react';
import Section from './Section'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from './AppHeader'
import{ ImageAssets } from '../assets';
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
  DebugInstructions

} from 'react-native/Libraries/NewAppScreen';


const DetailsScreen=({ navigation })=> {
  return (
    <>
  <AppHeader title="Details"   imageUrl={require("../assets/carpark.jpg")} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <Section title="Details Screen Working">

         Lorem ipsum sint magna sit non aute ea enim fugiat proident dolore enim in consequat adipisicing.
          </Section>
      <Button
        title="Find Free Parking Space"
        onPress={() => navigation.navigate('Home')}
      />
          <Button
        title="New Button"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </>
  );
}

export default DetailsScreen;