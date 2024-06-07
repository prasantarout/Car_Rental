import React, {useState} from 'react';
import css from '../../../themes/Css';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../../components/general/Header';
import Colors from '../../../themes/Colors';
import SafeView from '../../../components/general/SafeView';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';
import {Dropdown} from 'react-native-element-dropdown';
import Icons from '../../../themes/Icons';
import CustomButton from '../../../components/micro/CustomButton';

function Cancelride(props) {
  const data = [
    {label: 'a', value: 'A'},
    {label: 'b', value: 'B'},
    {label: 'c', value: 'C'},
  ];
  const [value, setValue] = useState('');
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Cancel Rides'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView marginHorizontal={normalize(10)}>
        <Text style={style.cancelText}>Are You Sure Want to Cancel?</Text>
        <Text style={style.description}>
          Lorem ipsum dolor sit amet consectetur Odio ac pretium.
        </Text>
        <Text style={[style.cancelText, {marginTop: normalize(20)}]}>
          Cancellation policy
        </Text>
        <Text style={style.description}>
          Lorem ipsum dolor sit amet consectetur. Fermentum mi sed turpis
          adipiscing pellentesque ut odio mauris praesent. Neque adipiscing ut
          at est id tortor feugiat. Non enim blandit tincidunt molestie commodo
          diam arcu fermentum. Eget felis urna placerat lobortis volutpat sed
          lorem sit.
        </Text>
        <Text style={style.description}>
          Nullam elit amet tortor gravida odio enim. Mauris ut at mattis gravida
          sed neque mattis at. Dui nascetur velit non et felis. Lectus ornare
          mauris adipiscing et et faucibus pellentesque nulla. Id aliquam elit
          fermentum tincidunt risus.
        </Text>
        <Text style={style.reason}>Select reason</Text>
        <Dropdown
          style={[style.dropdownStyle, css.w100, css.pl6]}
          placeholderStyle={[style.placeholderStyle, css.textLight, css.fs12]}
          selectedTextStyle={[css.textLight, css.fs12]}
          itemTextStyle={[css.textLight, css.fs12]}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Select'}
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderRightIcon={() => (
            <Image source={Icons.down} style={[style.dropdownIcon, css.mr8]} />
          )}
        />
        <CustomButton
          width={'100%'}
          height={normalize(45)}
          // alignSelf={'center'}
          marginTop={normalize(20)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Cancel'}
          textColor={Colors.white}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          onPress={() => {
            // navigation.navigate('Cancelride');
          }}
        />
      </SafeView>
    </View>
  );
}

export default Cancelride;
const style = StyleSheet.create({
  dropdownStyle: {
    backgroundColor: '#F2F2F2',
    height: normalize(40),
    borderRadius: 6,
    marginTop: normalize(10),
  },
  dropdownIcon: {
    width: normalize(11),
    height: normalize(11),
    resizeMode: 'contain',
  },
  placeholderStyle: {
    color: '#B1B1B1',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
  },
  reason: {
    color: '#575757',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginTop: normalize(20),
  },
  cancelText: {
    color: '#0B0B0B',
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
    textTransform: 'capitalize',
    marginTop: normalize(15),
  },
  description: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginTop: normalize(12),
  },
});
