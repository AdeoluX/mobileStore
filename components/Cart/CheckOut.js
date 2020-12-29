//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SIZES} from '../../constants/theme';
import Item from './Card/Card';

//dataset
import data from '../../cart.json';
// create a component
const Checkout = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          flex: 0.07,
          //   backgroundColor: 'yellow',
          padding: SIZES.padding,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: SIZES.h1, fontWeight: 'bold'}}>Your Bag</Text>
        <Text
          style={{fontSize: SIZES.body4, fontWeight: 'bold', color: 'gray'}}>
          4 ITEMS
        </Text>
      </View>
      {/* Body */}
      <View
        style={{
          flex: 0.86,
          //   backgroundColor: 'blue',
          paddingLeft: SIZES.padding,
          paddingRight: SIZES.padding,
        }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={(item) => (
            <Item
              image={item.item.uri}
              name={item.item.name}
              price={item.item.price}
            />
          )}
        />
      </View>
      {/* CheckOut Button */}
      <View style={{flex: 0.07, padding: SIZES.padding, alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            borderWidth: 1.5,
            width: SIZES.width * 0.9,
            height: SIZES.height / 16,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: SIZES.body3, fontWeight: 'bold'}}>
            CHECKOUT >
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Checkout;
