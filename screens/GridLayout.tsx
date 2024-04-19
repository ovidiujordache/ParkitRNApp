import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';

const playAudioAcknowledgment = () => {
  const buttonPressSound = "btn_press.wav";
  const buttonSound = new Sound(buttonPressSound, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
    buttonSound.play((success) => {
      if (!success) {
        console.log('Failed to play the sound');
      }
      buttonSound.release();
    });
  });
};

const { width } = Dimensions.get('window');
const itemSize = (width / 3) * 0.4;  

const iconDataTop = [
  { name: "Home", image: require('../assets/images/feature_50.png'), label: 'WildCard ?' },
  { name: "Profile", image: require('../assets/images/profile_50.png'), label: 'Profile' },
  { name: "GoogleMap", image: require('../assets/images/iparkitprologo5.png'), label: 'iParkitPro' },
];

const iconDataBottom = [
  { name: "AboutUs", image: require('../assets/images/about_50.png'), label: 'About App' },
  { name: "Settings", image: require('../assets/images/settings_50.png'), label: 'Settings' },
  { name: "Status", image: require('../assets/images/status_50.png'), label: 'Status' },
];

const GridButton = ({ name, image, label }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    console.log(name);
    navigation.navigate(name);
  };

  return (
    <ScrollView>
      <TouchableOpacity style={{ alignItems: 'center', margin: 10 }} onPress={() => {
        playAudioAcknowledgment();
        setTimeout(navigateToScreen, 600);
      }}>
        <View style={{ borderRadius: 80, overflow: 'hidden', marginHorizontal: 20 }}>
          <Image source={image} style={{ width: itemSize, height: itemSize}} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const GridLayout = () => (
  <View style={styles.grid}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
      {iconDataTop.map((icon, index) => (
        <GridButton key={index} name={icon.name} image={icon.image} label={icon.label} />
      ))}
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 10 }}>
      {iconDataBottom.map((icon, index) => (
        <GridButton key={index} name={icon.name} image={icon.image} label={icon.label} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    backgroundColor: '#00763d',
  },
  label: {
    marginTop: 5,
    color: '#ffe3e3',
    fontSize: 20,  
    fontWeight: 'bold',  
  },
  delimiter: {
    padding: 10,
    height: 1,
    backgroundColor: '#00763d',
    marginVertical: 10,
  },
});

export default GridLayout;
