/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, SIZES} from './constants/theme';
import icons from './constants/icons';

//import Screens
import Tabs from './components/Home/Tabs';
import CheckOut from './components/Cart/CheckOut';
import Item from './components/Item/Item';

const Stack = createStackNavigator();

// function Item() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text> Item Screen</Text>
//     </View>
//   );
// }

// function CheckOut() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text> Check Out Screen</Text>
//     </View>
//   );
// }

const onPress = () => {
  alert('Cart');
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={{title: null, headerShown: false}}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{title: null, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
