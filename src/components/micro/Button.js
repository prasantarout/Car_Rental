import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Txt from './Txt';
import Colors from '../../themes/Colors';
import normalize from '../../utils/helpers/dimen';
import css from '../../themes/Css';
import Fonts from '../../themes/Fonts';

const Button = ({title, type, style, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        type === 'outline' ? styles.outlineStyle : styles.solidStyle,
        style,
        css.center,
      ]}>
      <Txt
        style={
          type === 'outline' ? styles.outlineTextStyle : styles.solidTextStyle
        }>
        {title}
      </Txt>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  outlineStyle: {
    borderWidth: 1,
    borderColor: Colors.pink,
    borderRadius: 6,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(30),
  },
  outlineTextStyle: {
    color: Colors.pink,
    fontFamily: Fonts.Roboto_Medium,
  },
  solidStyle: {
    borderWidth: 1,
    backgroundColor: Colors.pink,
    borderColor: Colors.pink,
    borderRadius: 6,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(30),
  },
  solidTextStyle: {
    color: Colors.white,
    fontFamily: Fonts.Roboto_Medium,
  },
});
