import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {colors} from '../Assets/theme';

export default function ScreenBG({children, style }) {
  return (
    <LinearGradient
      colors={[colors.background_linear_1, colors.background_linear_2]}
      style={styles.linearGradient}>
      <ImageBackground
        source={require('../Assets/images/bg.png')}
        resizeMode="cover"
        style={[styles.image, style]}>
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
