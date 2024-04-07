import React, { useState } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Tts from 'react-native-tts';
import AppHeader from './AppHeader';
import { Linking } from 'react-native';

const { width } = Dimensions.get('window');
const itemSize = (width / 4) * 0.6;

const MapScreen = ({ navigation }) => {
  const latitudeI = 53 + (58 / 60) + (56.30 / 3600);
  const longitudeI = -(6 + (23 / 60) + (31.96 / 3600));
  const [text, setText] = useState('');

  const speakText = () => {
    setText('There are NO spaces available at the moment. Application is under construction. Please come back later.');
    Tts.speak(text);
  };

  return (
    <>
      <AppHeader title="Details" imageUrl={require("../assets/images/gradient3.png")} />

      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitudeI,
            longitude: longitudeI,
            latitudeDelta: 0.000522,
            longitudeDelta: 0.000221,
          }}>
          <Marker
            coordinate={{ latitude: latitudeI, longitude: longitudeI }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../assets/images/home_50.png')}
              style={{ width: itemSize, height: itemSize, borderRadius: 10 }}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation(latitudeI, longitudeI)}>
            <Image
              source={require('../assets/images/parking_btn.png')}
              style={{ width: itemSize, height: itemSize, borderRadius: 10 }}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Park</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const handleNavigation = (latitude, longitude) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
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
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SeparatorLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#707070',
    marginTop: 10,
  },
  TextStyle: {
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default MapScreen;
