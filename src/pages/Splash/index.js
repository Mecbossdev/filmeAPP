import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Splash = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Splash</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Splash;