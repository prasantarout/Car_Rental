import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import css from '../../themes/Css';
import Txt from '../micro/Txt';
import normalize from '../../utils/helpers/dimen';

const MultilineTextInput = ({
  title,
  value,
  setValue = () => {},
  placeholder,
  titleStyle,
  containerStyle,
  textInputContainerStyle,
  textInputStyle,
}) => {
  return (
    <View style={[containerStyle]}>
      {title && <Txt style={[styles.titleStyle, titleStyle]}>{title}</Txt>}
      <View
        style={[
          css.bgInput,
          css.row,
          css.aic,
          css.px8,
          css.mt6,
          styles.sprInputOuter,
          css.br6,
          textInputContainerStyle,
        ]}>
        <TextInput
          multiline={true}
          placeholder={placeholder}
          placeholderTextColor={'#B1B1B1'}
          style={[styles.textInputStyle, textInputStyle]}
          value={value}
          onChangeText={setValue}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

export default MultilineTextInput;

const styles = StyleSheet.create({
  textInputStyle: {
    height: normalize(100),
    paddingVertical: normalize(10),
    lineHeight: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    color: '#575757',
  },
  titleStyle: {
    color: '#575757',
    fontSize: normalize(13),
    marginBottom: normalize(6),
    textTransform: 'capitalize',
  },
});
