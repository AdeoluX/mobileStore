//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SIZES} from '../../../constants/theme';

// create a component
let colors = ['#ffcdd2', '#d1c4e9', '#c3fdff', '#efebe9', '#fff9c4'];
const CartCard = ({image, name, price}) => {
  const [color, setColor] = useState(null);

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  useEffect(() => {
    // alert(id);
    // if (id % 2 == 0) {
    //   return setColor(colors[0]);
    // }
    // return setColor(colors[1]);

    const index = randomNumber(0, 5);
    // alert(index);
    return setColor(colors[Math.floor(index)]);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          //   flex: 0.35,
          backgroundColor: color,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: SIZES.width * 0.3,
          height: SIZES.height / 5,
          marginRight: 10,
          //   padding: SIZES.padding,
        }}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={{width: SIZES.width * 0.3, height: SIZES.height / 6}}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{marginBottom: 15, fontSize: 18, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{fontSize: 13, color: 'gray', fontWeight: 'bold'}}>
          $ {price}
        </Text>
      </View>
      <View style={{marginLeft: 'auto', marginRight: 10, alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 0.5,
            padding: 2,
            borderRadius: 12.5,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
          }}>
          <Text style={{fontWeight: 'bold'}}>1x</Text>
        </View>
        <View
          style={{
            backgroundColor: 'gray',
            borderWidth: 0.5,
            padding: 2,
            borderRadius: 12.5,
            width: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>M</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: SIZES.height / 5,
    width: SIZES.width * 0.9,
    marginBottom: 8,
    alignItems: 'center',
  },
});

//make this component available to the app
export default CartCard;
