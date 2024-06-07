import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import Txt from '../micro/Txt';
import Icons from '../../themes/Icons';
import css from '../../themes/Css';
import countryCode from '../../utils/LocalAPI/CountryCode';
import normalize from '../../utils/helpers/dimen';
import SelectDropdown from 'react-native-select-dropdown';
import {formatPhoneNumber} from '../../utils/helpers/validators';

const PhoneNumberTextInput = ({
  selectedCountryCode,
  onCountryCodeChange = () => {},
  value,
  setValue,
  placeholder,
}) => {
  return (
    <View style={[styles.phoneInputWrap]}>
      <Txt>Phone number</Txt>
      <View
        style={[
          css.bgInput,
          css.row,
          css.aic,
          css.px8,
          css.mt6,
          styles.phoneInput,
        ]}>
        <View style={[styles.codeDropdown]}>
          <SelectDropdown
            data={countryCode}
            dropdownOverlayColor="transparent"
            disableAutoScroll={true}
            showsVerticalScrollIndicator={false}
            dropdownStyle={[styles.dropdownMenuStyle, css.px8]}
            onSelect={onCountryCodeChange}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={[css.rowBetween, css.aic]}>
                  <Txt style={[css.placeholderDark]}>
                    {selectedCountryCode.flag}
                  </Txt>
                  <Txt style={[css.placeholderDark, css.roboto_Medium]}>
                    {selectedCountryCode.dial_code}
                  </Txt>

                  {isOpened ? (
                    <Image
                      source={Icons.down}
                      style={[styles.dropUpButtonArrowStyle, css.ml8]}
                    />
                  ) : (
                    <Image
                      source={Icons.down}
                      style={[styles.dropDownButtonArrowStyle, css.ml8]}
                    />
                  )}
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={[styles.dropdownItemStyle, css.row, css.aic, css.p10]}>
                  <Txt>{item?.flag}</Txt>
                  <Txt style={[css.ml5]}>{item.dial_code}</Txt>
                </View>
              );
            }}
          />
        </View>
        <View style={[css.py6]}>
          <View style={[css.dividerV, css.mx10]} />
        </View>
        <TextInput
          style={[styles.phoneInputStyle]}
          value={value}
          onChangeText={txt => {
            setValue(formatPhoneNumber(value, txt));
          }}
          placeholder={placeholder || '0000 000 000'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: 100,
    paddingVertical: 10,
    lineHeight: 20,
  },
  phoneInputWrap: {
    height: 50,
    width: '100%',
  },
  dropdownIcon: {
    width: normalize(11),
    height: normalize(11),
    resizeMode: 'contain',
  },
  dropdownStyle: {
    width: normalize(70),
  },
  dropDownButtonArrowStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  dropUpButtonArrowStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  codeDropdown: {
    width: 85,
  },
  dropdownItemStyle: {
    width: normalize(80),
  },
  dropdownMenuStyle: {
    backgroundColor: 'red',
  },
  phoneInputStyle: {
    color: '#000',
    flex: 1,
  },
});

export default PhoneNumberTextInput;
