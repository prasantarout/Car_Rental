import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Fonts from '../../themes/Fonts';
import normalize from '../../utils/helpers/dimen';
import css from '../../themes/Css';
import Icons from '../../themes/Icons';
import Txt from './Txt';

const CustomDropDown = ({
  data,
  containerStyle,
  label,
  labelStyle,
  placeholder,
  placeholderStyle,
  onChange,
  value,
  renderComponent = () => {},
  renderLeftIcon,
}) => {
  const styles = customStyles();
  const renderItem = item => {
    return (
      <View style={[styles.dropdownStyle, css.w100, css.pl6]}>
        <Text style={[css.textLight, css.fs12]}>{item.value}</Text>
      </View>
    );
  };
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Txt style={[styles.labelStyle, labelStyle]}>{label}</Txt>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        maxHeight={200}
        placeholder={placeholder || 'Select'}
        value={value.value}
        onChange={onChange}
        renderLeftIcon={() =>
          renderLeftIcon ? (
            <Image
              source={Icons.colorIcon}
              style={[
                styles.leftIcon,
                css.mr8,
                {tintColor: value?.color || '#b1b1b1'},
              ]}
            />
          ) : null
        }
        renderRightIcon={() => (
          <Image source={Icons.down} style={[styles.dropdownIcon, css.mr8]} />
        )}
        renderItem={item => renderComponent(item) || renderItem(item)}
        style={[styles.dropdownStyle, css.w100, css.pl6]}
        placeholderStyle={[styles.placeholderStyle, css.fs12, placeholderStyle]}
        selectedTextStyle={[css.textLight, css.fs12]}
      />
    </View>
  );
};

const customStyles = () =>
  StyleSheet.create({
    container: {
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
      borderRadius: 6,
    },
    leftIcon: {
      width: normalize(20),
      height: normalize(20),
      resizeMode: 'contain',
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
  });

export default CustomDropDown;
