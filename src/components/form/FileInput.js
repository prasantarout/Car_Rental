import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Txt from '../micro/Txt';
import normalize from '../../utils/helpers/dimen';
import css from '../../themes/Css';
import Colors from '../../themes/Colors';

const FileInput = ({
  containerStyle,
  title,
  placeholder,
  value = '',
  style,
  icon,
  onIconPress,
}) => {
  const textColor = {color: value ? '#000' : '#b1b1b1'};

  return (
    <View style={[containerStyle]}>
      <Txt style={[styles.titleStyle]}>{title}</Txt>
      <View style={[styles.inputStyle, css.px10, css.rowBetween, css.aic]}>
        <Txt style={[style, textColor]}>{value ? value : placeholder}</Txt>
        <TouchableOpacity activeOpacity={0.5} onPress={onIconPress}>
          <View style={[styles.iconWrapStyle, css.bgWhite, css.p6, css.br6]}>
            <Image source={icon} style={[styles.iconStyle]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const FileInputList = ({
  containerStyle,
  title,
  placeholder,
  list = [],
  style,
  icon,
  onIconPress,
}) => {
  return (
    <View style={[containerStyle]}>
      <Txt style={[styles.titleStyle]}>{title}</Txt>
      {list?.map((item, index) => {
        return (
          <View
            style={[
              styles.inputStyle,
              css.px10,
              css.rowBetween,
              css.aic,
              index !== 0 && css.mt10,
            ]}>
            <Txt style={[style, styles.selectedText]}>
              {item.value ? item.value : placeholder}
            </Txt>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => onIconPress(index)}>
              <View
                style={[styles.iconWrapStyle, css.bgWhite, css.p6, css.br6]}>
                <Image source={icon} style={[styles.iconStyle]} />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default FileInput;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
    color: '#575757',
    paddingLeft: normalize(10),
    height: normalize(40),
  },
  titleStyle: {
    color: '#575757',
    fontSize: normalize(13),
    marginBottom: normalize(6),
  },
  iconWrapStyle: {
    width: normalize(25),
    height: normalize(25),
    backgroundColor: '#fff',
    padding: normalize(6),
  },
  iconStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: Colors.pink,
  },
  selectedText: {
    color: '#b1b1b1',
  },
});
