//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import icons from '../../constants/icons';
import {COLORS, SIZES} from '../../constants/theme';

//import components
import Card from './Card/Card';
//import data set
import data from '../../shirts.json';
import {TouchableOpacity} from 'react-native-gesture-handler';

// create a component
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          flex: 0.2,
          //   backgroundColor: 'pink',
          //   paddingBottom: 3,
          padding: SIZES.padding,
        }}>
        <View
          style={{
            flex: 1.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{padding: 2, justifyContent: 'center'}}>
            <Text style={{fontSize: SIZES.h1, fontWeight: 'bold'}}>
              Do your shopping online
            </Text>
            <Text style={{fontSize: SIZES.body3, marginBottom: 2}}>
              find the best choices for you
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckOut')}
            style={{
              marginLeft: SIZES.padding,
              alignItems: 'center',
              borderWidth: 1,
              padding: 2,
              borderRadius: 35,
              backgroundColor: COLORS.black,
            }}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{width: 30, height: 30, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        {/* Search */}
        <View style={{flex: 0.1}}></View>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <View
            style={{
              paddingLeft: 5,
              flexDirection: 'row',
              alignItems: 'center',
              //   borderWidth: 0.5,
              backgroundColor: '#f5f5f5',
              height: SIZES.height / 19.2,
              width: SIZES.width * 0.92,
              borderRadius: 7,
            }}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{height: 25, width: 25, paddingRight: 4}}
            />
            <TextInput
              placeholder="Search"
              style={{
                // height: SIZES.height / 19.2,
                width: SIZES.width * 0.92,
                // borderWidth: 0.5,
              }}
            />
          </View>
        </View>
      </View>
      {/* List of Clothes */}
      <View
        style={{
          flex: 0.8,
          //   backgroundColor: 'yellow',
          padding: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          //   width: '80%,
        }}>
        <FlatList
          style={{margin: 5, width: '100%'}}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Item', {...item})}>
              <Card
                image={item.item.uri}
                name={item.item.name}
                price={item.item.price}
                id={item.item.id}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

//make this component available to the app
export default Home;
