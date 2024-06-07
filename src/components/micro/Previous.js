import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../../themes/Icons'
import Colors from '../../themes/Colors'
import normalize from '../../utils/helpers/dimen'

const Previous = (props) => {

    const { onPress } = props

    return (
        <TouchableOpacity style={[styles.arrowWrap]} onPress={onPress} >
            <Image source={Icons.leftArrow} style={[styles.arrowStyle]} />
        </TouchableOpacity>
    )
}

export default Previous

const styles = StyleSheet.create({
    arrowStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        marginRight: 2
    },
    arrowWrap: {
        width: normalize(25),
        height: normalize(25),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.pink,
        borderRadius: 100,
        padding: 8,

    }
})