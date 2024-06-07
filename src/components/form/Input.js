import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import normalize from '../../utils/helpers/dimen';
const Input = ({
  containerStyle,
  title,
  placeholder,
  value,
  onChangeText,
  multiline,
  style,
  inputMode,
  keyboardType,
  onFocus,
  onBlur,
  titleStyle,
  secureTextEntry,
  autoCapitalize = 'sentences',
}) => {
  return (
    <View style={[containerStyle]}>
      {title && (
        <Text numberOfLines={1} style={[styles.titleStyle, titleStyle]}>
          {title}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#b1b1b1"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        inputMode={inputMode}
        keyboardType={keyboardType}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        style={[
          styles.inputStyle,
          style,
          {
            minHeight: multiline ? normalize(100) : normalize(40),
          },
        ]}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    color: '#575757',
    paddingLeft: normalize(10),
  },
  titleStyle: {
    color: '#575757',
    fontSize: normalize(13),
    marginBottom: normalize(6),
    textTransform: 'capitalize',
  },
});

export default Input;
