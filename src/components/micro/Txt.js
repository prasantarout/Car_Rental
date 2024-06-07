import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';

const Txt = props => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

export default Txt;

const styles = StyleSheet.create({
  defaultStyle: {
    color: Colors.black,
    fontFamily: Fonts.Roboto_Regular,
  },
});
