import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Txt from '../micro/Txt';
import normalize from '../../utils/helpers/dimen';
import css from '../../themes/Css';
import Icons from '../../themes/Icons';
const SecureInput = (props) => {

    const { containerStyle, title, placeholder, value, onChangeText, style, inputMode, keyboardType, isSecure, onPressIcon, onFocus, onBlur } = props

    return (
        <View style={[containerStyle]} >
            <Txt style={[styles.titleStyle]} >{title}</Txt>
            <View style={[css.row, css.aic, styles.inputWrap]} >
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#b1b1b1"
                    value={value}
                    onChangeText={onChangeText}
                    inputMode={inputMode}
                    secureTextEntry={isSecure}
                    keyboardType={keyboardType}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={[styles.inputStyle, style]}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={onPressIcon} >
                    <Image source={isSecure ? Icons.eyeClose : Icons.eyeOpen} style={[styles.iconStyle]} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

// inputMode = 'decimal', 'email', 'none', 'numeric', 'search', 'tel', 'text', 'url'
// keyboardType ='default', 'email-address', 'numeric', 'phone-pad', 'url', 'number-pad', 'decimal-pad'

export default SecureInput;

const styles = StyleSheet.create({
    inputWrap: {
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        paddingHorizontal: normalize(10)
    },
    inputStyle: {
        color: '#575757',
        height: normalize(40),
        flex: 1
    },
    titleStyle: {
        color: '#575757',
        fontSize: normalize(13),
        marginBottom: normalize(6),
        textTransform: 'capitalize',
    },
    iconStyle: {
        width: normalize(15),
        height: normalize(15),
        resizeMode: 'contain'
    }
})
