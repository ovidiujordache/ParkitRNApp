import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View,Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import{ Button
} from 'react-native';
import AppHeader from './AppHeader'
const MapScreen = ({ navigation }) => {
     const latitudeI = 53 + (58 / 60) + (56.30 / 3600);
  const longitudeI = -(6 + (23 / 60) + (31.96 / 3600)); 
  return (
    <>
        <AppHeader title="Details"   imageUrl={require("../assets/images/carpark.jpg")} />
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  latitudeI,
          longitude: longitudeI,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />

      </MapView>
             <Button
        title="Start Parking"
        onPress={() => navigation.navigate('Home')}
      />
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