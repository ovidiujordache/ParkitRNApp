import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';
import {
 
  StyleSheet,

} from 'react-native';


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

const { width } = Dimensions.get('window');

const iconDataTop = [
    { name: "Home", image: require('../assets/images/feature_50.png'), label: ' New Feature ?' },
      
    { name: "Profile", image: require('../assets/images/profile_50.png'), label: 'Profile' },
 
     { name: "GoogleMap", image: require('../assets/images/parking_50.png'), label: 'Park IT' },
 
];

const iconDataBottom = [
          { name: "AboutUs", image: require('../assets/images/about_50.png'), label: 'About App' },

    { name: "Settings", image: require('../assets/images/settings_50.png'), label: 'Settings' },
        { name: "Status", image: require('../assets/images/status_50.png'), label: 'Status' },
     
 
 
];

const itemSize = (width / 4) * 0.5; // Assuming 4 icons per row

const GridButton = ({ name, image, label }) => {
    const navigation = useNavigation();

    const navigateToScreen = () => {
      console.log(name)
        navigation.navigate(name);
    };

    return (
      <ScrollView>
        <TouchableOpacity style={{ alignItems: 'center', margin: 10 }} onPress={() => { playAudioAcknowledgment();
        setTimeout(() => { navigateToScreen(); }, 600); }}>
            <View style={{ borderRadius: 10, overflow: 'hidden' , marginHorizontal: 20}}>
                <Image source={image} style={{ width: itemSize, height: itemSize, borderRadius: 10 }} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
        </ScrollView>
    );
};

const GridLayout = ({ iconData }) => (

    <View style={styles.grid}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
            {iconDataTop.map((icon, index) => (
                <GridButton key={index} name={icon.name} image={icon.image} label={icon.label} />
            ))}
        </View>
       <View style={styles.delimiter} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
            {iconDataBottom.map((icon, index) => (
                <GridButton key={index} name={icon.name} image={icon.image} label={icon.label} />
            ))}
        </View>
    </View>
);


const styles = StyleSheet.create({
 
  grid: {
  flex:1
  },
  label:{
    marginTop:5,
    color:'white'
  },
   delimiter: {
        padding:10,
        height: 1,
        backgroundColor: '#003923',
        marginVertical: 10, // Adjust the vertical margin as needed
    },
})


export default GridLayout;
