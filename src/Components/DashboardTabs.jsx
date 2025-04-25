import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {colors, fontFamily, typography} from '../Assets/theme';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const PADDING = 4;
const TAB_COUNT = 2;
const TOTAL_WIDTH = SCREEN_WIDTH - 48;
const TAB_WIDTH = (TOTAL_WIDTH - PADDING * 2) / TAB_COUNT;

export default function DashboardTabs({activeIndex, onChange}) {
  const translateX = useSharedValue(activeIndex * TAB_WIDTH);

  React.useEffect(() => {
    translateX.value = withTiming(activeIndex * TAB_WIDTH, {duration: 200});
  }, [activeIndex]);

  const animatedTabStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value + PADDING}],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.activeBg, animatedTabStyle]} />
      {['Dashboard', 'Settings'].map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={styles.tab}
          onPress={() => onChange(index)}>
          <Text
            style={[
              typography.heading3,
              styles.tabText,
              activeIndex === index ? styles.activeText : styles.inactiveText,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background_gray,
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
    height: 56,
    padding: PADDING,
  },
  activeBg: {
    position: 'absolute',
    top: PADDING,
    left: PADDING - 4,
    width: TAB_WIDTH,
    height: 56 - PADDING * 2,
    backgroundColor: '#1E1F20',
    borderRadius: 36,
    zIndex: 0,
  },
  tab: {
    width: TAB_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  tabText: {
    fontFamily: `${fontFamily}-Medium`,
  },
  activeText: {
    color: colors.primary_light,
  },
  inactiveText: {
    color: colors.text_inactive,
  },
});
