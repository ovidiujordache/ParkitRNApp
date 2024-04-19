import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button ,  SafeAreaView,
  ScrollView,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader'
import Footer from './Footer'

import useAudioPlayer from '../hooks/useAudioPlayer'; 







const SettingsScreen = () => {
   const navigation = useNavigation();

  const handleThemeChange = () => {
    // Implement theme change logic
  };

  const handleClearParkingHistory = () => {
    // Implement logic to clear parking history
  };

  const handleAddHomeLocation = () => {
    // Implement logic to add home location
  };

  const handleAboutApp = () => {
    // Implement logic to navigate to About App screen
  };
  const handleGoBack=()=>{
           navigation.navigate("Home");
  }
    const handleSoundSettings=()=>{
           navigation.navigate("Home");
  }

  const playSound = useAudioPlayer();
  const playAudioAcknowledgment = () => {


  // Load the audio file
  
const buttonPressSound="btn_press.wav"


   playSound(buttonPressSound); 
};




  return (
    <>
       <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />

      <ScrollView>
    <View style={styles.container}>
          <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
        <FontAwesome5 name="arrow-left" size={60}  style={styles.icon} />
        <Text style={styles.settingText}>Back  </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleThemeChange(); }, 600); }}>
        <FontAwesome5 name="wheelchair" size={24} style={{color:"blue" , padding:10,
    marginRight: 10,}}/>
         <View style={styles.underline} />
        <Text style={styles.settingText}>Disabled Spaces</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleThemeChange(); }, 600); }}>
        <FontAwesome5 name="plug" size={24}  style={{color:"red" , padding:10,
    marginRight: 10,}} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>EV Charging</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleClearParkingHistory(); }, 600); }}>
        <FontAwesome5 name="map" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Proximity Spaces [future feature->find ]</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleClearParkingHistory(); }, 600); }}>
        <FontAwesome5 name="history" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Parking History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleAddHomeLocation(); }, 600); }}>
        <FontAwesome5 name="parking" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Add New Car Park</Text>
      </TouchableOpacity>
             <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleThemeChange(); }, 600); }}>
        <FontAwesome5 name="music" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Audio </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => {  playAudioAcknowledgment();
        setTimeout(() => { handleThemeChange(); }, 600); }}>
        <FontAwesome5 name="palette" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleAboutApp(); }, 600); }}>
        <FontAwesome5 name="info" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text  style={styles.settingText}>About App</Text>
      </TouchableOpacity>

    </View>
 
</ScrollView>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#50cf92', // Updated background color
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

  },
  icon: {
    padding:10,
    marginRight: 10,
    color:'#3a0000'
  },
 settingText: {
    fontSize: 20, // Increased font size
    marginLeft: 10,
    color: '#060000',
  },
    underline: {
  backgroundColor: '#760000',
    height: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,
  },
});

export default SettingsScreen;
