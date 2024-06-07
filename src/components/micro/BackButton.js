import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from '../../themes/Icons';
import normalize from '../../utils/helpers/dimen';

const BackButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.navigation.goBack()}
      style={{
        marginTop: props?.marginTop,
        marginBottom: props?.marginBottom,
      }}>
      <Image source={Icons.backIcon} style={[styles.btn]} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btn: {
    width: normalize(35),
    height: normalize(35),
    resizeMode: 'contain',
  },
});
