//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icons from '../../constants/icons';
import {SIZES} from '../../constants/theme';

// create a component
const Item = ({navigation, route}) => {
  const Grrr = route.params;
  //   const {item} =
  const [url, setUrl] = useState('');
  useEffect(() => {
    // alert(JSON.stringify(Grrr.item.uri));
    setUrl(Grrr.item.uri);
    // alert(url);
  }, []);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          flex: 0.05,
          //   backgroundColor: 'gray',
          flexDirection: 'row',
          padding: SIZES.radius,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginRight: 'auto'}}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.back}
            style={{width: 30, height: 30, tintColor: 'white'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}>
          <Image
            source={icons.cart}
            style={{width: 30, height: 30, tintColor: 'white'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* Middle */}
      <View
        style={{flex: 0.45, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: url}}
          style={{width: SIZES.width * 0.7, height: SIZES.height * 0.4}}
        />
      </View>
      {/* Desc */}
      <View
        style={{
          flex: 0.5,
          backgroundColor: 'white',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          padding: SIZES.radius,
        }}>
        {/* S M L $20 */}
        <View
          style={{
            flex: 0.1,
            // backgroundColor: 'red',
            flexDirection: 'row',
            padding: SIZES.radius,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 'auto',
              //   justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#9EA7AD',
                padding: 5,
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <Text
                style={{fontSize: 15, color: '#9EA7AD', fontWeight: 'bold'}}>
                S
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#9EA7AD',
                padding: 5,
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <Text
                style={{fontSize: 15, color: '#9EA7AD', fontWeight: 'bold'}}>
                M
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 10,
                borderColor: '#9EA7AD',
                padding: 5,
                height: 25,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 15, color: '#9EA7AD', fontWeight: 'bold'}}>
                L
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            $ {Grrr.item.price}
          </Text>
        </View>
        {/* Description */}
        <View
          style={{
            flex: 0.7,
            // backgroundColor: 'yellow',
            padding: SIZES.radius,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'gray'}}>
            Organic Cotton Sweater to Celebrate the beauty of marine ecosystems.
          </Text>
        </View>
        {/* Buttons */}
        <View
          style={{
            flex: 0.2,
            // backgroundColor: 'red',
            padding: SIZES.padding,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1.5,
              borderRadius: 15,
              borderColor: '#9EA7AD',
              width: SIZES.width * 0.15,
              height: SIZES.height / 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.bookmark}
              style={{height: 30, width: 30, tintColor: '#9EA7AD'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              //   borderWidth: 1.5,
              backgroundColor: '#9EA7AD',
              borderRadius: 15,
              width: SIZES.width * 0.75,
              height: SIZES.height / 12,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 8,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EA7AD',
  },
});

//make this component available to the app
export default Item;
