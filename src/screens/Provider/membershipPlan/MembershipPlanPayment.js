import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import css from '../../../themes/Css';
import Colors from '../../../themes/Colors';
import Header from '../../../components/general/Header';
import SafeView from '../../../components/general/SafeView';
import Input from '../../../components/form/Input';
import CustomButton from '../../../components/micro/CustomButton';
import normalize from '../../../utils/helpers/dimen';
import Fonts from '../../../themes/Fonts';

const MembershipPlanPayment = props => {
  const [name, setname] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [expdate, setexpdate] = useState('');
  const [cvv, setcvv] = useState('');
  const navigation = useNavigation();
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Payment'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView>
        <View style={[css.br10, css.p15, styles.mainContainer]}>
          <Text style={styles.titleText}>Card Information</Text>
          <Input
            title="Card Holder Name"
            placeholder="Enter name"
            titleStyle={styles.inputTitleStyle}
            style={styles.inputStyle}
            containerStyle={[css.mb10]}
            value={name}
            onChangeText={text => setname(text)}
          />
          <Input
            title="Card Number"
            placeholder="Enter card number"
            titleStyle={styles.inputTitleStyle}
            style={styles.inputStyle}
            containerStyle={[css.mb10]}
            keyboardType={'number-pad'}
            value={cardNumber}
            onChangeText={text => setcardNumber(text)}
          />

          <View style={styles.inputContainer}>
            <Input
              title="Expiry Date"
              placeholder="--/--"
              titleStyle={styles.inputTitleStyle}
              style={styles.inputStyle}
              containerStyle={css.w48}
              value={expdate}
              onChangeText={text => setexpdate(text)}
            />
            <Input
              title="CVV"
              placeholder="Enter CVV number"
              titleStyle={styles.inputTitleStyle}
              style={styles.inputStyle}
              containerStyle={css.w48}
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
              navigation.navigate('ProviderTabNavigator');
            }}
          />
          <CustomButton
            width={'100%'}
            height={normalize(45)}
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
            onPress={() => {}}
          />
        </View>
      </SafeView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitleStyle: {
    color: '#575757',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    marginTop: normalize(10),
  },
  mainContainer: {
    backgroundColor: Colors.white,
    borderWidth: normalize(1),
    borderColor: Colors.cardBg,
    width: '100%',
    marginBottom: normalize(10),
    shadowColor: 'red',
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {height: 4, width: 4},
  },
  titleText: {
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
    textTransform: 'capitalize',
    color: Colors.txtblack,
    lineHeight: normalize(36),
    alignSelf: 'center',
  },
  inputStyle: {
    backgroundColor: '#F2F2F2',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default MembershipPlanPayment;
