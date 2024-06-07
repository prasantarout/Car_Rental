import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import css from '../../themes/Css';
import Colors from '../../themes/Colors';
import normalize from '../../utils/helpers/dimen';
import Icons from '../../themes/Icons';

const TimeDropdown = (props) => {

    const [isFocus, setIsFocus] = useState(false);

    const { data, value, placeholder, onChange } = props;

    return (
        <Dropdown
            style={[styles.dropdownStyle, css.w100, css.pl6]}
            placeholderStyle={[styles.placeholderStyle, css.textLight, css.fs12]}
            selectedTextStyle={[css.textLight, css.fs12]}
            itemTextStyle={[css.textLight, css.fs12]}
            data={data}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={onChange}
            // onChange={item => {
            //     setValue(item.value);
            //     setIsFocus(false);
            // }}
            renderRightIcon={() =>
            (
                <Image source={Icons.down} style={[styles.dropdownIcon, css.mr8]} />
            )
            }

        />
    )
}

export default TimeDropdown

const styles = StyleSheet.create({
    dropdownStyle: {
        backgroundColor: Colors.white,
        height: normalize(40),
        borderRadius: 6
    },
    dropdownIcon: {
        width: normalize(11),
        height: normalize(11),
        resizeMode: 'contain'
    },

})