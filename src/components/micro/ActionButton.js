import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import css from '../../themes/Css'
import normalize from '../../utils/helpers/dimen'
import Colors from '../../themes/Colors'

const ActionButton = (props) => {

    const { icon, style, title, onPress } = props


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[css.row, css.center, styles.containerStyle, css.br6, css.py8, css.px10, style]}
            onPress={onPress}
        >
            <Image source={icon} style={[styles.iconStyle]} />
            <Text style={[css.textTheme, css.ml10, css.roboto_Medium, css.fs13]} >{title}</Text>
        </TouchableOpacity>
    )
}

export default ActionButton

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderColor: Colors.pink
    },
    iconStyle: {
        width: normalize(20),
        height: normalize(20),
        resizeMode: 'contain',
    },
})