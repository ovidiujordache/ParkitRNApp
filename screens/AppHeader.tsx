import React from 'react';
import { View, Text, StyleSheet ,Dimensions,Image} from 'react-native';


const windowHeight = Dimensions.get('window').height;


const windowWidth = Dimensions.get('window').width;
const AppHeader = ({ title,imageUrl }) => {
  return (
    <View style={styles.header}>
   <Image source={imageUrl} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
 height: windowHeight * 0.3 ,
    backgroundColor: '#35495E', // Dark blue
    padding: 16,
    alignItems: 'center',
  },  logo: {
    width: windowWidth,
    height: windowHeight *0.3 ,
    marginRight: 10, // Adjust as needed
  },
  title: {
    color: '#FFFFFF', // White
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;