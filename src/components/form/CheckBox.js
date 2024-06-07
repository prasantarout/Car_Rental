import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../../themes/Icons'
import css from '../../themes/Css'
import normalize from '../../utils/helpers/dimen'
import Colors from '../../themes/Colors'

const CheckBox = (props) => {

    const { isChecked, onCheck } = props

    const borderColor = { borderColor: isChecked ? Colors.pink : '#b1b1b1' }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onCheck} style={[styles.checkBoxStyle, borderColor]} >
            {
                isChecked ? <Image source={Icons.check} style={[css.imgFull, styles.tickStyle]} /> : null
            }
        </TouchableOpacity>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    checkBoxStyle: {
        borderWidth: 1,
        height: normalize(20),
        width: normalize(20),
        borderRadius: 6,
        overflow: 'hidden',
        padding: normalize(4)
    },
    tickStyle: {
        tintColor: Colors.pink
    }
})