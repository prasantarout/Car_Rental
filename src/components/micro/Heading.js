import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Txt from './Txt'
import normalize from '../../utils/helpers/dimen';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';

const Heading = (props) => {
    return (
        <Txt style={[styles.headingStyle]} >{props.title}</Txt>
    )
}

export default Heading

const styles = StyleSheet.create({
    headingStyle:{
        fontSize: normalize(15),
        fontFamily: Fonts.Roboto_Medium,
        color: '#0B0B0B',
    }
})