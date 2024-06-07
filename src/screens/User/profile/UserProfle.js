import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeView from '../../../components/general/SafeView';
import Header from '../../../components/general/Header';
import Colors from '../../../themes/Colors';
import Images from '../../../themes/Images';
import normalize from '../../../utils/helpers/dimen';
import Icons from '../../../themes/Icons';
import css from '../../../themes/Css';
import Fonts from '../../../themes/Fonts';
import CustomButton from '../../../components/micro/CustomButton';
import BottomSheet from '../../../components/general/BottomSheet';
import {useDispatch, useSelector} from 'react-redux';
import {updateAuthUserType} from '../../../redux/reducer/AuthReducer';
import {useNavigation} from '@react-navigation/native';

function UserProfle(props) {
  const navigation = useNavigation();
  const [LogoutModal, setLogoutModal] = useState(false);
  const dispatch = useDispatch();
  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const handleUserType = () => {
    setLogoutModal(false);
    dispatch(updateAuthUserType(authType === 'user' ? 'provider' : 'user'));
    navigation.navigate('Signin');
  };

  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'My profile'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView width={'90%'} alignSelf={'center'}>
        <View style={style.profileImageMainContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            style={[style.profileImageContainer, css.asc, css.br10]}>
            <Image
              source={Images.Profile}
              style={[style.profileImage, css.asc, css.br10]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            style={style.editbtnContainer}>
            <Image source={Icons.Edit} style={style.editbtn} />
          </TouchableOpacity>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>John Doe</Text>
          <Text style={style.userEmail}>john@yopmail.com</Text>
        </View>
        <View style={style.mainViewContainer}>
          <View style={style.View}>
            <Text style={style.Text1}>Name</Text>
            <Text style={[style.Text2]}>John Morison</Text>
          </View>
          <View style={[style.bordeColor]} />
          <View style={[style.View]}>
            <Text style={style.Text1}>Email Address</Text>
            <Text style={style.Text2}>john@yopmail.com</Text>
          </View>
          <View style={style.bordeColor} />
          <View style={style.View}>
            <Text style={style.Text1}>Phone Number</Text>
            <Text style={[style.Text2]}>65987456982</Text>
          </View>

          <View style={style.bordeColor} />

          <View style={[style.View]}>
            <Text style={style.Text1}>Address</Text>
            <Text style={[style.Text2]}>
              1484 Rhea Overpass, Vancouver 19644-1379
            </Text>
          </View>
          {authType === 'user' ? null : (
            <>
              <View style={[style.View]}>
                <Text style={style.Text1}>Business Name</Text>
                <Text style={[style.Text2]}>Lorem ipsum pvt. ltd</Text>
              </View>
              <View style={[style.View]}>
                <Text style={style.Text1}>Business Reg. Number</Text>
                <Text style={[style.Text2]}>1236548BD45</Text>
              </View>
            </>
          )}
        </View>

        <TouchableOpacity
          style={[
            css.rowBetween,
            css.aic,
            css.p15,
            css.w100,
            css.asc,
            css.mt15,
            style.actionContainer,
          ]}
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}>
          <View style={[css.row, css.aic]}>
            <Image
              source={Icons.password}
              style={style.LogoIcon}
              resizeMode="contain"
            />
            <Text style={style.TiltleText}>Change Password</Text>
          </View>

          <Image
            source={Icons.next}
            style={style.nextArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            css.rowBetween,
            css.aic,
            css.p15,
            css.w100,
            css.asc,
            css.my15,
            style.actionContainer,
          ]}
          onPress={() => {
            setLogoutModal(!LogoutModal);
          }}>
          <View style={[css.row, css.aic]}>
            <Image
              source={Icons.logout}
              style={style.LogoIcon}
              resizeMode="contain"
            />
            <Text style={style.TiltleText}>Logout</Text>
          </View>

          <Image
            source={Icons.next}
            style={style.nextArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <CustomButton
          width={'100%'}
          height={normalize(45)}
          alignSelf={'center'}
          marginTop={normalize(10)}
          marginBottom={normalize(10)}
          backgroundColor={'#9E4DB6'}
          title={'Edit Profile'}
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
        <CustomButton
          width={'100%'}
          height={normalize(45)}
          alignSelf={'center'}
          marginTop={normalize(5)}
          marginBottom={Platform.OS === 'ios' ? normalize(10) : normalize(50)}
          Ï
          title={
            authType === 'user'
              ? 'Become a service provider'
              : 'Become a Consumer'
          }
          textColor={'#9E4DB6'}
          borderRadius={normalize(5)}
          textAlign={'center'}
          fontSize={normalize(13)}
          justifyContent={'center'}
          fontFamily={Fonts.Roboto_Medium}
          titlesingle
          borderWidth={normalize(1)}
          borderColor={'#9E4DB6'}
          onPress={() => {
            handleUserType();
          }}
          activeOpacity={0.6}
        />
      </SafeView>
      <BottomSheet
        isVisible={LogoutModal}
        titleStyle={style.bottomSheetStyle}
        closebtn={{height: normalize(12), width: normalize(12)}}
        onClose={() => {
          setLogoutModal(!LogoutModal);
        }}>
        <Image source={Icons.ConfirmLogout} style={style.bottomSheetIcon} />
        <Text style={style.ShareTripText}>
          Are you sure you want to logout?
        </Text>
        <Text style={style.reviewDes}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <View style={[css.row, css.jcsb, css.mt10]}>
          <CustomButton
            width={'48%'}
            height={normalize(45)}
            marginTop={normalize(20)}
            marginBottom={normalize(50)}
            backgroundColor={'#9E4DB6'}
            title={'Yes'}
            textColor={Colors.white}
            borderRadius={normalize(5)}
            textAlign={'center'}
            fontSize={normalize(13)}
            justifyContent={'center'}
            fontFamily={Fonts.Roboto_Medium}
            titlesingle
            onPress={() => handleUserType()}
          />
          <CustomButton
            width={'48%'}
            height={normalize(45)}
            marginTop={normalize(20)}
            marginBottom={normalize(50)}
            title={'Cancel'}
            textColor={'#9E4DB6'}
            borderWidth={normalize(1)}
            borderColor={'#9E4DB6'}
            borderRadius={normalize(5)}
            textAlign={'center'}
            fontSize={normalize(13)}
            justifyContent={'center'}
            fontFamily={Fonts.Roboto_Medium}
            titlesingle
            onPress={() => {
              setLogoutModal(false);
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

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
  reviewDes: {
    color: '#5F5F5F',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    textAlign: 'center',
    marginTop: normalize(5),
  },
  ShareTripText: {
    color: '#0B0B0B',
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
    textAlign: 'center',
    marginTop: normalize(15),
    textTransform: 'capitalize',
  },
  TiltleText: {
    color: '#2F3240',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(12),
    marginLeft: normalize(12),
  },
  LogoIcon: {height: normalize(17), width: normalize(17)},
  nextArrow: {height: normalize(12), width: normalize(12)},
  mainViewContainer: {
    marginHorizontal: normalize(15),
    width: '100%',
    borderRadius: normalize(10),
    alignSelf: 'center',
    backgroundColor: '#F3F3F3',
    padding: normalize(5),
    marginTop: normalize(15),
  },
  Text1: {
    color: '#919191',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
  Text2: {
    color: '#2F3240',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
    width: normalize(130),
    textAlign: 'right',
  },
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: normalize(13),
    paddingHorizontal: normalize(10),
    alignItems: 'center',
  },
  bordeColor: {
    borderBottomWidth: normalize(1),
    borderBottomColor: '#E8E8E8',
    width: '100%',
    alignSelf: 'center',
  },
  userName: {
    color: '#1C222C',
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
  },
  userEmail: {
    color: '#4F4F4F',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
  },
  userNameContainer: {
    alignItems: 'center',
    marginTop: normalize(24),
  },
  actionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  bottomSheetStyle: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: normalize(35),
  },
  bottomSheetIcon: {
    height: normalize(70),
    width: normalize(70),
    alignSelf: 'center',
    marginTop: normalize(25),
  },
});

export default UserProfle;
