import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import css from '../../themes/Css';
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';

const ServiceProviderCard = ({style, image, title, info, respondtime}) => {
  return (
    <View style={[style, css.row, css.bgGray, css.p16, css.br6, css.aic]}>
      <Image source={image} style={[styles.imageStyle]} />
      <View style={[css.px16, css.jcc]}>
        <Text style={[styles.titleStyle, css.mb6, css.fs14]}>{title}</Text>
        <Text style={[styles.infoStyle, css.mb6, css.fs12]}>{info}</Text>
        <Text style={[styles.respondtimeStyle, css.fs10, css.roboto_Medium]}>
          {respondtime}
        </Text>
      </View>
    </View>
  );
};

export default ServiceProviderCard;

const styles = StyleSheet.create({
  imageStyle: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(100),
    overflow: 'hidden',
  },
  titleStyle: {
    color: Colors.mobycolor,
    fontFamily: Fonts.Roboto_Bold,
  },
  infoStyle: {
    color: Colors.txtcolor,
  },
  respondtimeStyle: {
    color: Colors.green,
  },
});
