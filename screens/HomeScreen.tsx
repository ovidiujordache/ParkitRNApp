import React from 'react';
import type {PropsWithChildren} from 'react';
import Section from './Section'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ImageAssets} from '../assets';
import AppHeader from './AppHeader'
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

const HomeScreen = ({ navigation }) => {

    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <>
   <SafeAreaView style={backgroundStyle}>
     <AppHeader title="PARKIT "    imageUrl={require('../assets/images/carpark.jpg')}/>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
      
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Section title=".">
          
          <Button 
          
        title="Find Free Space "
        style={styles.button}
        onPress={() => navigation.navigate('Details')}

      />
   
              Qui ad aliquip excepteur sunt fugiat dolore sit dolor magna quis laborum magna minim ut adipisicing ut ea.]]]
          </Section>
     
            <Section title="."  >
        
              Qui ad aliquip excepteur sunt fugiat dolore sit dolor magna quis laborum magna minim ut adipisicing ut ea.]]]
          
          <Button 
          
        title="Find Free Space "
       
        onPress={() => navigation.navigate('Details')}

      />

          </Section>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});


export default HomeScreen;