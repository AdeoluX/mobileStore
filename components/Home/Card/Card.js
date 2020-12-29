//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SIZES} from '../../../constants/theme';

import icons from '../../../constants/icons';
let colors = ['#ffcdd2', '#d1c4e9', '#c3fdff', '#efebe9', '#fff9c4'];
// create a component
const Card = ({name, image, price, id}) => {
  //   alert(name);
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
    <View
      style={{
        height: SIZES.height * 0.35,
        width: SIZES.width * 0.45,
        margin: 5,
        borderRadius: 15,
        padding: 10,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: color,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: 'gray'}}>
        $ {price}
      </Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={{width: SIZES.width * 0.4, height: SIZES.height * 0.25}}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.35,
    width: SIZES.width * 0.45,
    margin: 5,
    borderRadius: 15,
    padding: 10,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: colors[id],
  },
});

//make this component available to the app
export default Card;
