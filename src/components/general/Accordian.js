import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import css from '../../themes/Css';
import Txt from '../micro/Txt';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';

const Accordian = props => {
  const {title, isOpen, info, onPress, style} = props;

  return (
    <View style={[styles.accordianCard, style]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[css.rowBetween, css.aic, css.px16, css.py8]}>
        <Txt style={[props.titleStyle]}>{title}</Txt>
        {isOpen ? (
          <Image source={Icons.minus} style={[styles.iconStyle]} />
        ) : (
          <Image source={Icons.add} style={[styles.iconStyle]} />
        )}
      </TouchableOpacity>
      {isOpen ? (
        <View style={[css.px16]}>
          <Txt>{info}</Txt>
        </View>
      ) : null}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  iconStyle: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
  },
  accordianCard: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: normalize(6),
    paddingVertical: normalize(8),
  },
});
