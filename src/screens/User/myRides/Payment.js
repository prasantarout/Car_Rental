import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../../components/general/Header';
import Colors from '../../../themes/Colors';
import normalize from '../../../utils/helpers/dimen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../../../components/form/Input';
import Fonts from '../../../themes/Fonts';
import css from '../../../themes/Css';
import CustomButton from '../../../components/micro/CustomButton';
function Payment(props) {
  const [name, setname] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [expdate, setexpdate] = useState('');
  const [cvv, setcvv] = useState('');
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Payment'}
        enableNotificationButton
        enableMenuButton
      />
      <KeyboardAwareScrollView style={{marginHorizontal: normalize(10)}}>
        <Input
          title="Card Holder Name"
          placeholder="Enter name"
          titleStyle={{
            color: '#575757',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
            marginTop: normalize(10),
          }}
          style={{backgroundColor: '#F2F2F2'}}
          containerStyle={[css.mb10]}
          value={name}
          onChangeText={text => setname(text)}
        />
        <Input
          title="Card Number"
          placeholder="Enter card number"
          titleStyle={{
            color: '#575757',
            fontFamily: Fonts.Roboto_Regular,
            fontSize: normalize(12),
            marginTop: normalize(10),
          }}
          style={{backgroundColor: '#F2F2F2'}}
          containerStyle={[css.mb10]}
          keyboardType={'number-pad'}
          value={cardNumber}
          onChangeText={text => setcardNumber(text)}
        />

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Input
            title="Expiry Date"
            placeholder="--/--"
            titleStyle={{
              color: '#575757',
              fontFamily: Fonts.Roboto_Regular,
              fontSize: normalize(12),
              marginTop: normalize(10),
            }}
            style={{backgroundColor: '#F2F2F2'}}
            containerStyle={{width: '48%'}}
            value={expdate}
            onChangeText={text => setexpdate(text)}
          />
          <Input
            title="CVV"
            placeholder="Enter CVV number"
            titleStyle={{
              color: '#575757',
              fontFamily: Fonts.Roboto_Regular,
              fontSize: normalize(12),
              marginTop: normalize(10),
            }}
            style={{backgroundColor: '#F2F2F2'}}
            containerStyle={{width: '48%'}}
            keyboardType={'number-pad'}
            secureTextEntry={true}
            value={cvv}
            onChangeText={text => setcvv(text)}
          />
        </View>
        <CustomButton
          width={'100%'}
          height={normalize(45)}
          marginTop={normalize(30)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Pay £241.50'}
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
        <CustomButton
          width={'100%'}
          height={normalize(45)}
          // alignSelf={'center'}
          borderWidth={normalize(1)}
          borderColor={'#9E4DB6'}
          marginBottom={normalize(10)}
          title={'Cancel'}
          textColor={'#9E4DB6'}
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
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Payment;
