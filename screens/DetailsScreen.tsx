import React ,{useState}from 'react';
import type {PropsWithChildren} from 'react';
import Section from './Section'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from './AppHeader';
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

import Sound from 'react-native-sound';


const DetailsScreen=({ navigation })=> {

const welcomeSound = "hawkins.wav"; 
  // Define a function to play the sound and navigate after a delay
Sound.setCategory('Playback');
  const playWelcomeSound = () => {
    // Load the sound file
    const sound = new Sound(welcomeSound ,Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      // Play the sound
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
          // After a short delay (e.g., 1 second), navigate to another screen
          setTimeout(() => {
            navigation.navigate('Home'); // Navigate to the 'Home' screen
          }, 1000); // Adjust the delay as needed (1000 milliseconds = 1 second)
        } else {
          console.log('Sound playback failed');
        }
        // Release the sound when done playing
        sound.release();
      });
    });
  };


  return (
    <>
  <AppHeader title="Details"   imageUrl={require("../assets/images/carpark.jpg")} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <Section title="Details Screen Working">

         Lorem ipsum sint magna sit non aute ea enim fugiat proident dolore enim in consequat adipisicing.
          </Section>
    {/*Back Home button*/}

 <View style={styles.space} /> 
      <Button
        title="Back Home"
       onPress={() => navigation.navigate('Home')}
      />

          {/*Google Map Test button*/}

 <View style={styles.space} /> 

          <Button 
        title="Google Maps Test"
        onPress={() => navigation.navigate('GoogleMap')}
      />

      {/*Test sound button*/}

 <View style={styles.space} /> 
        <Button
        title="About US"
        onPress={playWelcomeSound}
 
      />
  
    </View>
  </>
  );
}

const styles = StyleSheet.create({
 
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})

export default DetailsScreen;