import React, {useState} from 'react';
import css from '../../../themes/Css';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../../../themes/Colors';
import Header from '../../../components/general/Header';
import SafeView from '../../../components/general/SafeView';
import normalize from '../../../utils/helpers/dimen';
import Images from '../../../themes/Images';
import Icons from '../../../themes/Icons';
import Input from '../../../components/form/Input';
import CustomButton from '../../../components/micro/CustomButton';
import Fonts from '../../../themes/Fonts';
import {formatPhoneNumber} from '../../../utils/helpers/validators';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function EditProfile(props) {
  const navigation = useNavigation();
  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [buisnessname, setbuisnessname] = useState('');
  const [buisnessno, setbuisnessno] = useState('');

  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Edit Profile'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView width={'90%'} alignSelf={'center'}>
        <View style={style.profileImageMainContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={[style.profileImageContainer, css.asc, css.br10]}>
            <Image
              source={Images.Profile}
              style={[style.profileImage, css.asc, css.br10]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={style.editbtnContainer}>
            <Image source={Icons.Camera} style={style.editbtn} />
          </TouchableOpacity>
        </View>

        <View style={[css.mt16, style.containerStyle]}>
          <View style={[css.row, css.mb16]}>
            <Input
              title="First Name"
              containerStyle={[css.f1, css.mr8, css.mt10]}
              titleStyle={style.inputTitleStyle}
              placeholder="Enter first name"
              value={firstName}
              onChangeText={val => setFirstName(val)}
            />

            <Input
              title="Last Name"
              containerStyle={[css.f1, css.ml8, css.mt10]}
              titleStyle={style.inputTitleStyle}
              placeholder="Enter last name"
              value={lastName}
              onChangeText={val => setLastName(val)}
            />
          </View>
          <Input
            title="Email Address"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter email"
            titleStyle={style.inputTitleStyle}
            value={email}
            onChangeText={val => setEmail(val)}
            inputMode="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            title="Phone Number"
            containerStyle={[css.f1, css.mb16]}
            titleStyle={style.inputTitleStyle}
            inputMode="tel"
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            value={phone}
            onChangeText={val => setPhone(formatPhoneNumber(phone, val))}
          />
          <Input
            title="Address"
            containerStyle={[css.f1, css.mb16]}
            titleStyle={style.inputTitleStyle}
            placeholder="Enter address"
            value={address}
            onChangeText={val => setAddress(val)}
          />
          {authType === 'user' ? null : (
            <>
              <Input
                title="Business Name"
                containerStyle={[css.f1, css.mb16]}
                titleStyle={style.inputTitleStyle}
                placeholder="Lorem ipsum pvt. ltd"
                value={buisnessname}
                onChangeText={val => setbuisnessname(val)}
              />

              <Input
                title="Business reg. Number"
                containerStyle={[css.f1, css.mb16]}
                titleStyle={style.inputTitleStyle}
                placeholder="123659874"
                value={buisnessno}
                onChangeText={val => setbuisnessno(val)}
              />
            </>
          )}
        </View>

        <CustomButton
          width={'100%'}
          height={normalize(45)}
          alignSelf={'center'}
          marginTop={normalize(20)}
          marginBottom={normalize(50)}
          backgroundColor={'#9E4DB6'}
          title={'Save'}
          textColor={Colors.white}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        />
      </SafeView>
    </View>
  );
}

export default EditProfile;
const style = StyleSheet.create({
  profileImageMainContainer: {
    height: normalize(167),
    width: normalize(150),
    alignSelf: 'center',
    marginTop: normalize(20),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  editbtn: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  editbtnContainer: {
    height: normalize(34),
    width: normalize(34),
    position: 'absolute',
    bottom: normalize(0),
    borderRadius: normalize(34),
  },
  profileImageContainer: {
    height: normalize(150),
    width: normalize(150),
  },
  profileImage: {
    height: normalize(150),
    width: normalize(150),
  },
  inputTitleStyle: {
    color: '#575757',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
  containerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: normalize(10),
  },
});
