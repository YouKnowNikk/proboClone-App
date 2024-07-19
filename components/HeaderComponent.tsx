import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderComponent = () => {
  const [hasNotifications, setHasNotifications] = useState(true); 

  const handleBellPress = () => {
   
    setHasNotifications(!hasNotifications);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={24} color="black" />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBellPress}>
          <Icon name="bell" size={24} color="black" />
          {hasNotifications && <View style={styles.badge} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical:10
  },
  iconContainer: {
    backgroundColor: '#eaecee', 
    borderRadius: 30,
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default HeaderComponent;
