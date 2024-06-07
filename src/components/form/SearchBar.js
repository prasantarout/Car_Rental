import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import css from '../../themes/Css'
import Icons from '../../themes/Icons'
import Colors from '../../themes/Colors'
import normalize from '../../utils/helpers/dimen'

const SearchBar = (props) => {

    const { style, placeholder } = props

    return (
        <View style={[css.row, css.aic, styles.wrapper, style]} >
            <Image source={Icons.search} style={[styles.iconStyle]} />
            <TextInput
                style={[styles.inputStyle]}
                placeholder={placeholder}
                placeholderTextColor="#C0C0C0"
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.white,
        borderRadius: 100,
        paddingLeft: 10,
        shadowColor: "#969595",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    iconStyle: {
        width: normalize(15),
        height: normalize(15),
        resizeMode: 'contain'
    },
    inputStyle: {
        height: normalize(38),
        paddingLeft: 8,
        color: Colors.black
    }
})