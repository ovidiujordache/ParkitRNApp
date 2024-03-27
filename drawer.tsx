  const navigateToScreen = (route) => () => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToScreen('Home')}>
        <Text style={styles.drawerItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen('Details')}>
        <Text style={styles.drawerItem}>Details</Text>
      </TouchableOpacity>
      {/* Add more items as needed */}
    </View>
  );