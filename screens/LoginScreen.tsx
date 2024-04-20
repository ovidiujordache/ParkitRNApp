import React, { useState } from 'react';

import { View, TextInput, Button, StyleSheet, Alert,TouchableOpacity,Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppHeader from './AppHeader';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const navigation = useNavigation();
  const handleLogin = () => {
    // Here you would typically handle authentication.
    // This example just checks if the fields are not empty.
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter username and password!');
    } else {
      Alert.alert('Success', 'You are logged in');
      // Further processing like navigation or API calls.
          navigation.navigate("Home");

    }
  };

  return (
    <>
      <AppHeader title="" imageUrl={require('../assets/images/logor.png')} />
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
            <Text style={styles.buttonTextClose}>Login</Text>
          </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#50cf92', // Updated background color
  },
  input: {
    height: 40,
    width: '60%', 
    marginBottom: 12,
    borderWidth: 2,
    padding: 10,
    fontSize: 16, // Increased font size
    marginLeft: 10,
    color: '#060000',
     borderRadius: 10,
  },
  buttonContainer: {
    
    marginTop: 10,
  },
    button: {
    margin:20,
    marginTop: 20,


    padding: 10,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: '#2196F3',
  },
  buttonText: {
        color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
export default LoginScreen;
