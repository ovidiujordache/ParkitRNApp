import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const AppHeader = ({ title, imageUrl }) => {
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(Dimensions.get('window').width > Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => {
    subscription?.remove();
    };
  }, []);

  // Define styles here dynamically based on the current orientation
  const dynamicStyles = StyleSheet.create({
    header: {
      height: isLandscape ? Dimensions.get('window').height * 0.3 : Dimensions.get('window').height * 0.2,
      backgroundColor: '#032370', // Dark blue
      padding: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    logo: {
      height: isLandscape ? Dimensions.get('window').height * 0.4 : Dimensions.get('window').height * 0.5,
      width: isLandscape ? Dimensions.get('window').width * 0.4 : Dimensions.get('window').width * 0.5,
      resizeMode: 'contain',
     marginTop: 40,
      padding: 10
    },
    title: {
      color: 'green',
      fontSize: isLandscape ? 14 : 10,
      fontWeight: 'bold'
    },
  });

  return (
    <View style={dynamicStyles.header}>
      <Image source={imageUrl} style={dynamicStyles.logo} />
      <Text style={dynamicStyles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;
