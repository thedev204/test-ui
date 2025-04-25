import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ScreenBG from '../Components/ScreenBG';

export default function Profile() {
  return (
    <ScreenBG style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </ScreenBG>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
