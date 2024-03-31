import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View,Platform } from 'react-native';
import{WebView} from 'react-native-webview'
import MapView, { Marker } from 'react-native-maps';
import{ Button
} from 'react-native';
import AppHeader from './AppHeader'


import Tts from 'react-native-tts';



const MapScreen = ({ navigation }) => {
     const latitudeI = 53 + (58 / 60) + (56.30 / 3600);
  const longitudeI = -(6 + (23 / 60) + (31.96 / 3600)); 

  const [text, setText] = useState('');

  const speakText = () => {
    setText('There are 3 spaces available'); // Update the text state
    Tts.speak(text);
  };


  return (
    <>
        <AppHeader title="Details"   imageUrl={require("../assets/images/carpark.jpg")} />
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  latitudeI,
          longitude: longitudeI,
          latitudeDelta: 0.000522,
          longitudeDelta: 0.000221,
        }}
      >
        <Marker
          coordinate={{ latitude: latitudeI, longitude: longitudeI }}
          title="Marker Title"
          description="Marker Description"
        />

      </MapView>
   
      <Button title="Find Space" onPress={speakText} />
   
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#3452',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#fff', // Add a background color to see the shadow
    borderRadius: 10, // Optional: Add border radius for rounded corners
  },
  map: {
    flex: 1,
  },
});


export default MapScreen;