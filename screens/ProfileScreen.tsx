import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AppHeader from './AppHeader';
import Footer from './Footer';

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

  return (
    <>
      <AppHeader title="Details" imageUrl={require("../assets/images/gradient.png")} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.settingItem} onPress={handleGoBack}>
          <FontAwesome5 name="arrow-left" size={24} style={styles.icon} />
          <Text style={styles.settingText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={handleEditName}>
          <FontAwesome5 name="user" size={24} style={styles.icon} />
            <View style={styles.underline} />
          <Text style={styles.settingText}>Name</Text>
          <FontAwesome5 name="plus" size={16} style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={handleEditEmail}>
          <FontAwesome5 name="at" size={24} style={styles.icon} />
          <Text style={styles.settingText}>Email</Text>
          <FontAwesome5 name="plus" size={16} style={styles.plusIcon} />
            <View style={styles.underline} />
        </TouchableOpacity>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#003923',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 10,
    color: 'white',
  },
  settingText: {
    fontSize: 20,
    color: 'white',
    flex: 1, // Take up remaining space
  },
  plusIcon: {
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

export default ProfileScreen;
