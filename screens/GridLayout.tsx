import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';
import { useLayout } from './LayoutContext';
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
 
  { name: "Profile", image: require('../assets/images/Ovi_pic.png'), label: 'Profile' },
    { name: "EVMap", image: require('../assets/images/ev_50.png'), label: 'EV Charge' },
  { name: "GoogleMap", image: require('../assets/images/iparkitprologo5.png'), label: 'iParkitPro' },
];

const iconDataBottom = [

  { name: "Settings", image: require('../assets/images/settings_50.png'), label: 'Settings' },

  { name: "DisabilityMap", image: require('../assets/images/disability3_50.png'), label: 'Disability Spaces' },
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


const GridLayout = () => {
 const { isFlipped,isDriving } = useLayout();


return(

   <View style={styles.grid}>
      <View style={{ flexDirection: isFlipped ? 'row-reverse' : 'row', justifyContent: 'space-around', flex: 1 }}>

        {iconDataTop.map((icon, index) => (
          (isDriving || (icon.name !== "Profile" && icon.name !== "Settings")) && (
            <GridButton 
              key={index} 
              name={icon.name} 
              image={icon.image} 
              label={icon.label}
            />
          )
        ))}
      </View>
      <View style={{ flexDirection: isFlipped ? 'row-reverse' : 'row', justifyContent: 'space-around', flex: 10 }}>
        {iconDataBottom.map((icon, index) => (
          (isDriving || (icon.name !== "Profile" && icon.name !== "Settings")) && (
            <GridButton 
              key={index} 
              name={icon.name} 
              image={icon.image} 
              label={icon.label}
            />
          )
        ))}
      </View>
    </View>
  )
};

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
