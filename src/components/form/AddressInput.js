import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Txt from '../micro/Txt';
import css from '../../themes/Css';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';
import Colors from '../../themes/Colors';

const AddressInput = props => {
  const {title, value, onChangeText, style, placeholder} = props;

  return (
    <View style={[style]}>
      <Txt style={[css.mb6]}>{title}</Txt>
      <View
        style={[
          styles.inputWrap,
          css.bgWhite,
          css.br6,
          css.ofh,
          css.row,
          css.aic,
          css.px8,
        ]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholderDark}
          value={value}
          onChangeText={onChangeText}
          style={[styles.inputStyle, css.f1, css.p0]}
        />
        <Image source={Icons.down} style={[styles.arrowIconStyle]} />
      </View>
    </View>
  );
};

export default AddressInput;

const styles = StyleSheet.create({
  inputWrap: {
    height: normalize(40),
  },
  inputStyle: {
    color: '#000',
  },
  arrowIconStyle: {
    width: normalize(10),
    height: normalize(10),
    resizeMode: 'contain',
    tintColor: '#310440',
  },
});
