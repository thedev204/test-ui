import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {BlurView} from '@react-native-community/blur';
//Screens
import Dashboard from '../Screens/Dashboard';
import Notifications from '../Screens/Notifications';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
// Theme
import {colors} from '../Assets/theme';
import Scan from '../Screens/Scan';

// Bottom Navigation Bar
const Tab = createBottomTabNavigator();

// not used bcz of irrelevent UI response
// function tabBarBackground() {
//   return (
//     <BlurView
//       blurType="dark"
//       blurAmount={10}
//       style={{
//         ...StyleSheet.absoluteFillObject,
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         backgroundColor: 'trasparent',
//         overflow: 'hidden',
//       }}
//     />
//   );
// }

function tabBarBackground() {
  return (
    <ImageBackground
      source={require('../Assets/images/bottom-tab-bg.png')}
      resizeMode="cover"
      style={{...StyleSheet.absoluteFillObject}}
    />
  );
}

function CustomeScanButton({props}) {
  return (
    <TouchableOpacity {...props} style={styles.scanButtonWrapper}>
      <ImageBackground
        source={require('../Assets/images/scan-button-bg.png')}
        style={styles.scanButton}
        imageStyle={{resizeMode: 'cover', borderRadius: 999}}>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text_white,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 20,
          position: 'absolute',
        },
        tabBarBackground: tabBarBackground,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (rn === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          const icon = <Ionicons name={iconName} size={size} color={color} />;

          if (focused) {
            return (
              <ImageBackground
                source={require('../Assets/images/tab-bar-icon-focus.png')}
                style={{
                  width: size * 3.5,
                  height: size * 3.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                imageStyle={{
                  resizeMode: 'cover',
                }}>
                {icon}
              </ImageBackground>
            );
          }

          return icon;
        },
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarButton: props => <CustomeScanButton props={props} />,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scanButtonWrapper: {
    top: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#1E1F20',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5D6167',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 20,
  },
  scanButtonText: {
    color: '#FFD93D',
    fontSize: 16,
    fontWeight: '600',
  },
});
