import React from 'react';
import type {PropsWithChildren} from 'react';
import Section from './Section'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ImageAssets} from '../assets';
import GridLayout from './GridLayout'
import AppHeader from './AppHeader'
import Icon from 'react-native-vector-icons/FontAwesome'; //
import Footer from './Footer'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions

} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return ( 
    <>

   <SafeAreaView style={backgroundStyle}>
     <AppHeader title="PARKIT "    imageUrl={require('../assets/images/gradient.png')}/>
 
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" 
        contentContainerStyle={{ flexGrow: 1 }}
        style={backgroundStyle}>
      
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Section title="">
      
<GridLayout/>
          </Section>
     
          
     
        </View>
      </ScrollView>
         <Footer/>
    </SafeAreaView>
  
    </>
  );
}





export default HomeScreen;