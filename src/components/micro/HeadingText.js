import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Txt from './Txt'
import css from '../../themes/Css'

const HeadingText = (props) => {

    const { title, subTitle } = props

    return (
        <View>
            <Txt style={[css.fs16, css.roboto_Medium]} >{title}</Txt>
            <Txt style={[css.fs12, css.textMute, css.mt3]}>{subTitle}</Txt>
        </View>
    )
}

export default HeadingText

const styles = StyleSheet.create({})