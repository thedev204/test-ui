import {View, Text, StyleSheet, Switch} from 'react-native';
import React from 'react';
import {colors, typography} from '../../Assets/theme';

export default function SettingsListOption({
  icon,
  title,
  subtitle,
  value,
  onChange,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <View>
          <Text style={[styles.title, typography.heading3]}>{title}</Text>
          <Text style={[styles.subtitle, typography.caption]}>{subtitle}</Text>
        </View>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        thumbColor={value ? colors.primary : '#888'}
        trackColor={{false: '#333', true: '#555'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  title: {
    color: colors.primary_light,
  },
  subtitle: {
    color: colors.text_inactive,
    marginTop: 2,
  },
});
