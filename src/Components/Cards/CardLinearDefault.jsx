import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Assets/theme';

export default function CardLinearDefault({children, style}) {
  return (
    <LinearGradient
      colors={[colors.card_linear_1, colors.card_linear_2]}
      style={[styles.linearGradient, style]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
