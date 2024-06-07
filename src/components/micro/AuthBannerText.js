import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import css from '../../themes/Css'
import Txt from './Txt'

const AuthBannerText = (props) => {

    const { title, subTitle } = props

    return (
        <View style={[css.center]} >
            <Txt style={[css.fs22, css.roboto_Bold]} >{title}</Txt>
            <Text style={[css.mt10, css.w80, css.tac, css.fs12, styles.subTitleStyle]} >{subTitle}</Text>
        </View>
    )
}

export default AuthBannerText

const styles = StyleSheet.create({
    subTitleStyle: {
        color: '#949494',
        // lineHeight: 30
    }
})