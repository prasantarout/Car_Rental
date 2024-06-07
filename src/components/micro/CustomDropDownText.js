import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Fonts from '../../themes/Fonts';
import normalize from '../../utils/helpers/dimen';
import css from '../../themes/Css';
import Icons from '../../themes/Icons';
import Txt from './Txt';

const CustomDropDownText = ({
  data,
  mainContainerStyle,
  label,
  labelStyle,
  placeholder,
  textPlaceholder,
  placeholderStyle,
  onChange,
  value,
  inputStyle,
}) => {
  const styles = customStyles();
  return (
    <View style={[styles.mainContainerStyle, mainContainerStyle]}>
      <Txt style={[styles.labelStyle, labelStyle]}>{label}</Txt>
      <View style={styles.containerStyle}>
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder={placeholder || 'Select'}
          value={value}
          onChange={onChange}
          renderRightIcon={() => (
            <Image source={Icons.down} style={[styles.dropdownIcon, css.mr8]} />
          )}
          style={[styles.dropdownStyle, css.pl6]}
          placeholderStyle={[
            styles.placeholderStyle,
            css.fs12,
            placeholderStyle,
          ]}
          selectedTextStyle={[css.textLight, css.fs12]}
          itemTextStyle={[css.textLight, css.fs12]}
        />
        <View style={styles.line} />
        <TextInput
          style={[styles.inputStyle, inputStyle]}
          placeholder={textPlaceholder}
          placeholderTextColor={'#b1b1b1'}
        />
      </View>
    </View>
  );
};

const customStyles = () =>
  StyleSheet.create({
    mainContainerStyle: {
      width: '100%',
    },
    containerStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    labelStyle: {
      color: '#575757',
      fontSize: normalize(13),
      marginBottom: normalize(6),
    },
    dropdownStyle: {
      backgroundColor: '#F2F2F2',
      height: normalize(40),
      borderRadius: normalize(6),
      width: normalize(100),
    },
    dropdownIcon: {
      width: normalize(11),
      height: normalize(11),
      resizeMode: 'contain',
    },
    placeholderStyle: {
      color: '#b1b1b1',
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Regular,
    },
    inputStyle: {
      backgroundColor: '#f2f2f2',
      color: '#575757',
      paddingLeft: normalize(10),
      flex: 1,
      height: normalize(40),
    },
    line: {
      height: '80%',
      borderWidth: 1,
      width: 1,
      borderColor: '#DFDFDF',
    },
  });

export default CustomDropDownText;
