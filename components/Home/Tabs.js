//import liraries
import React, {Component} from 'react';
import {Image} from 'react-native';
import {COLORS} from '../../constants/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import icons from '../../constants/icons';

//declare tabs
const Tabs = createBottomTabNavigator();

//import Screens
import Home from './Home';

const options = {
  showLabel: false,
  keyboardHidesTabBar: true,
  style: {
    height: 60,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.53,
    // shadowRadius: 13.97,
    // elevation: 21,
  },
};

// create a component
const Tab = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={options}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.black : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case 'Profile':
              return (
                <Image
                  source={icons.profile}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case 'Settings':
              return (
                <Image
                  source={icons.gear}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
          }
        },
      })}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Profile" component={Home} />
      <Tabs.Screen name="Settings" component={Home} />
    </Tabs.Navigator>
  );
};

//make this component available to the app
export default Tab;
