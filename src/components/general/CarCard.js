import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import css from '../../themes/Css'
import normalize from '../../utils/helpers/dimen'
import Txt from '../micro/Txt'
import Icons from '../../themes/Icons'
import Colors from '../../themes/Colors'

const CarCard = (props) => {

    const { source, category, year, title, rating, topSpeed, insurance } = props

    return (
        <View style={[css.row, css.aic]} >
            <View style={[styles.carImageStyle]} >
                <Image source={source} style={[css.w100, css.h100, css.ofh, css.br8]} />
            </View>
            <View style={[css.ml8, css.f1]} >
                <View style={[css.row, css.aic]} >
                    <Txt style={[css.textTheme]} >{category}</Txt>
                    <Image source={Icons.rightarrow} style={[styles.arrowStyle, css.mx5]} />
                    <Txt style={[css.textTheme]} >{year}</Txt>
                </View>
                <View style={[css.row, css.aic]} >
                    <Txt style={[css.mt5, css.roboto_Bold]} >{title}</Txt>
                    <View style={[css.px10, css.py2, css.bgLightYellow, css.br20, css.row, css.ml16, css.aic]} >
                        <Image source={Icons.star} style={[styles.starIconStyle]} />
                        <Txt style={[css.textYellow, css.ml5, css.roboto_Medium]} >{rating}</Txt>
                    </View>
                </View>
                <View style={[css.row, css.aic, css.mt5]} >
                    <Image source={Icons.speedometer} style={[styles.iconStyle]} />
                    <Txt style={[css.textLight, css.ml5, css.roboto_Medium]} >{year}</Txt>
                </View>
                <View style={[css.row, css.aic, css.mt5]} >
                    <Image source={Icons.insurance} style={[styles.iconStyle]} />
                    <Txt style={[css.textLight, css.ml5, css.roboto_Medium]} >{insurance}</Txt>
                </View>
            </View>
        </View>
    )
}

export default CarCard

const styles = StyleSheet.create({
    carImageStyle: {
        width: normalize(100),
        height: normalize(100),
    },
    arrowStyle: {
        width: normalize(8),
        height: normalize(8),
        resizeMode: 'contain',
        tintColor: Colors.pink
    },
    iconStyle: {
        width: normalize(20),
        height: normalize(20),
        resizeMode: 'contain',
    },
    starIconStyle: {
        width: normalize(12),
        height: normalize(12),
        resizeMode: 'contain',
    }
})