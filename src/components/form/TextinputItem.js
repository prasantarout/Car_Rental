import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import normalize from '../../utils/helpers/dimen';
import PropTypes from 'prop-types';
import {Colors, Fonts} from '../../themes/Theme';

export default function TextInputItem(props) {
  function onChangeText(text) {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }

  function rightimagepress() {
    if (props.rightimagepress) {
      props.rightimagepress();
    }
  }

  function onFocus() {
    if (props.onFocus) {
      props.onFocus();
    }
  }

  function onBlur() {
    if (props.onBlur) {
      props.onBlur();
    }
  }

  return (
    <View
      style={{
        height: props?.height,
        width: props.width ? props.width : '100%',
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        borderColor: Colors.bordercolor,
        borderWidth: props.borderWidth,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginVertical: props.marginVertical,
        // padding: normalize(11),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: normalize(15),
        shadowColor: '#949494',
        shadowOffset: {width: 2, height: 6},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 6,
      }}>
      {props.isleftimage && (
        <TouchableOpacity
          style={{marginRight: normalize(10)}}
          onPress={() => rightimagepress()}>
          <Image
            source={props?.leftimageicon}
            style={{
              width: normalize(15),
              height: normalize(15),
              resizeMode: 'contain',
              //   tintColor: Colors.textinputtext,
            }}
          />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}>
        <TextInput
          style={{
            color: Colors.black,
            fontSize: normalize(11),
            fontFamily: Fonts.Roboto_Regular,
            height: '100%',
            marginRight: normalize(10),
          }}
          selectionColor={props.selectionColor}
          secureTextEntry={props.isSecure}
          multiline={props.multiline}
          placeholder={props.placeholder}
          editable={props.editable}
          placeholderTextColor={Colors.placeholder}
          keyboardType={props.keyboardType}
          value={props.value}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          maxLength={props.maxLength}
          onChangeText={text => {
            onChangeText(text);
          }}
          scrollEnabled={props.multiline ? false : true}
        />
      </View>
      {props.isrightimage && (
        <TouchableOpacity
          style={{marginRight: normalize(15)}}
          onPress={() => rightimagepress()}>
          <Image
            source={props?.leftimageicon}
            style={{
              width: normalize(15),
              height: normalize(15),
              resizeMode: 'contain',
              //   tintColor: Colors.textinputtext,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

TextInputItem.propTypes = {
  height: PropTypes.number,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginVertical: PropTypes.number,
  toptext: PropTypes.string,
  placeholder: PropTypes.string,
  isSecure: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  editable: PropTypes.bool,
  onChangeText: PropTypes.func,
  isrightimage: PropTypes.bool,
  rightimagepress: PropTypes.func,
  showhide: PropTypes.bool,
  maxLength: PropTypes.number,
  isleftimage: PropTypes.bool,
  leftimageicon: PropTypes.any,
};

TextInputItem.defaultProps = {
  height: normalize(50),
  width: '100%',
  borderRadius: normalize(6),
  borderWidth: normalize(1),
  borderColor: Colors.bordercolor,
  marginTop: normalize(15),
  isSecure: false,
  placeholderTextColor: Colors.placeholder,
  keyboardType: 'default',
  value: '',
  multiline: false,
  editable: true,
  onChangeText: null,
  toptext: '',
  isrightimage: false,
  rightimagepress: null,
  showhide: false,
  maxLength: 300,
  backgroundColor: Colors.white,
  isleftimage: false,
};
