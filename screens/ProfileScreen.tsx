import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader';
import Footer from './Footer';
import Sound from 'react-native-sound';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleEditName = () => {
    // Implement logic for editing name
  };

  const handleEditEmail = () => {
    // Implement logic for editing email
  };

const playAudioAcknowledgment = () => {


  // Load the audio file
  
const buttonPressSound="btn_press.wav"
  const buttonSound = new Sound(buttonPressSound, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
    // Play the audio
    buttonSound.play((success) => {
      if (!success) {
        console.log('Failed to play the sound');
      }
      // Release the audio instance after playing
      buttonSound.release();
    });
  });
};

  return (
    <>   
    <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
          <FontAwesome5 name="arrow-left" size={60} style={styles.icon} />
          <Text style={styles.settingText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleEditName(); }, 600); }}>
          <FontAwesome5 name="user" size={24} style={styles.icon} />
            <View style={styles.underline} />
          <Text style={styles.settingText}>Name</Text>
          <FontAwesome5 name="plus" size={16} style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { handleEditEmail(); }, 600); }}>
          <FontAwesome5 name="at" size={24} style={styles.icon} />
          <Text style={styles.settingText}>Email</Text>
          <FontAwesome5 name="plus" size={16} style={styles.plusIcon} />
            <View style={styles.underline} />
        </TouchableOpacity>
      </View>
{/*      <Footer />*/}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
      backgroundColor: '#9eee58',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 10,
    color: '#440000',
  },
  settingText: {
    fontSize: 20,
    color: '#8a0000',
    flex: 1, 
  },
  plusIcon: {
    color: '#6c0000',
  },
    underline: {
  backgroundColor: '#060000',
    height: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,

  },
});

export default ProfileScreen;
