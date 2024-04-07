import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Sound from 'react-native-sound';
import AppHeader from './AppHeader';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';




const StatusScreen = () => {
  const errorSound="error.wav"
  const parkedSound="parked.wav"
  const [status, setStatus] = useState('red'); // Default status is red
  const [findCarDisabled, setFindCarDisabled] = useState(true); // Button disabled by default
  const [redLightOpacity] = useState(new Animated.Value(status === 'red' ? 1 : 0));
  const [yellowLightOpacity] = useState(new Animated.Value(status === 'yellow' ? 1 : 0));
  const [greenLightOpacity] = useState(new Animated.Value(status === 'green' ? 1 : 0));
  const [message, setMessage] = useState('Not parked');
  const navigation = useNavigation();

  useEffect(() => {
    startSemaphoreAnimation();
    // Enable "Find my car" button when status is green
    setFindCarDisabled(status !== 'green');

    // Set message based on status
    if (status === 'green') {
      setMessage('Parked');
    } else if (status === 'red') {
      setMessage('Not Parked');
    } else {
      setMessage('Parking...');
    }
  }, [status]);

  const startSemaphoreAnimation = () => {
    Animated.timing(redLightOpacity, {
      toValue: status === 'red' ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(yellowLightOpacity, {
      toValue: status === 'yellow' ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(greenLightOpacity, {
      toValue: status === 'green' ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleStatus = () => {
    if (status === 'red') {
      playSound(errorSound); // Play error sound when toggling to red
      setStatus('yellow');
    } else if (status === 'yellow') {
      setStatus('green');
      playSound(parkedSound); // Play parked sound when toggling to green
    } else {
      playSound(errorSound); 
      setStatus('red');
    }
  };

  const playSound = (soundName) => {
    const sound = new Sound(soundName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Sound playback failed');
        }
        sound.release(); // Release the sound when done playing
      });
    });
  };

  const handGoBack = () => {
    navigation.navigate('Home');
  };

  const findMyCar = () => {
    navigation.navigate('GoogleMap');
  };

  return (
    <>
      <AppHeader title="Details" imageUrl={require('../assets/images/gradient.png')} />
      <View style={styles.container}>
        <TouchableOpacity style={[styles.settingItem, { marginBottom: 100 }]} onPress={handGoBack}>
          <FontAwesome5 name="arrow-left" size={24} style={styles.icon} />
          <Text style={styles.settingText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.animationContainer}>
          <Animated.View style={[styles.light, styles.redLight, { opacity: redLightOpacity }]} />
          <Animated.View style={[styles.light, styles.yellowLight, { opacity: yellowLightOpacity }]} />
          <Animated.View style={[styles.light, styles.greenLight, { opacity: greenLightOpacity }]} />
        </View>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleStatus}>
          <Text style={styles.toggleButtonText}>Test Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.findCarButton, { backgroundColor: findCarDisabled ? '#ccc' : '#007bff' }]}
          onPress={findMyCar}
          disabled={findCarDisabled}>
          <Text style={styles.findCarButtonText}>Find my car</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#003923',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  light: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  redLight: {
    backgroundColor: 'red',
  },
  yellowLight: {
    backgroundColor: 'yellow',
  },
  greenLight: {
    backgroundColor: 'green',
  },
  toggleButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 18,
  },
  findCarButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  findCarButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default StatusScreen
