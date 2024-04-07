import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader'
import Footer from './Footer'
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

  return (
    <>

      <AppHeader title="Details" imageUrl={require("../assets/images/gradient.png")} />
    <View style={styles.container}>
          <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
        <FontAwesome5 name="arrow-left" size={24}  style={styles.icon} />
        <Text style={styles.settingText}>Back  </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleThemeChange}>
        <FontAwesome5 name="palette" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleClearParkingHistory}>
        <FontAwesome5 name="history" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Clear Parking History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleAddHomeLocation}>
        <FontAwesome5 name="parking" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text style={styles.settingText}>Add New Car Park</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={handleAboutApp}>
        <FontAwesome5 name="info" size={24}  style={styles.icon} />
         <View style={styles.underline} />
        <Text  style={styles.settingText}>About App</Text>
      </TouchableOpacity>
   <Footer/>
    </View>
 


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#003923', // Updated background color
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
    color:'white'
  },
 settingText: {
    fontSize: 20, // Increased font size
    marginLeft: 10,
    color: 'white',
  },
    underline: {
  backgroundColor: 'green',
    height: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -5,
  },
});

export default SettingsScreen;
