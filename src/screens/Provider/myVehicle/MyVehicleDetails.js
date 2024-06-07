import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../themes/Colors';
import SafeView from '../../../components/general/SafeView';
import css, {width} from '../../../themes/Css';
import Header from '../../../components/general/Header';
import Images from '../../../themes/Images';
import Fonts from '../../../themes/Fonts';
import Input from '../../../components/form/Input';
import Button from '../../../components/micro/Button';
import normalize from '../../../utils/helpers/dimen';
import {useNavigation} from '@react-navigation/native';

const specification = [
  {
    title: 'Year',
    value: '2023',
  },
  {
    title: 'Colour',
    value: 'Blue',
  },
  {
    title: '0-100KM/H',
    value: '8.4 SEC',
  },
  {
    title: 'Transmission',
    value: 'Automatic',
  },
  {
    title: 'Motor',
    value: '2.4L 4 cylinder',
  },
  {
    title: 'Max. speed',
    value: '232',
  },
  {
    title: 'Horsepower',
    value: '340',
  },
  {
    title: 'Type of fuel',
    value: 'Gas',
  },
  {
    title: 'Body type',
    value: 'Sedan',
  },
];

const vehicleDetails = [
  {
    label: 'Vehicle Number',
    value: '8D22A1245',
  },
  {
    label: 'Model Number:',
    value: 'D12345652H89',
  },
  {
    label: 'Registration Number:',
    value: '123456789',
  },
  {
    label: 'Manufacturing Brand Name:',
    value: 'Audi',
  },
  {
    label: 'Manufacturing Year:',
    value: '2024',
  },
  {
    label: 'Vehicle Category:',
    value: 'Sports',
  },
  {
    label: 'kilometres covered/day:',
    value: '250',
  },
  {
    label: 'Insurance Details:',
    value: 'Personal',
  },
];

const MyVehicleDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={[styles.mainContainer]}>
        <Header
          enableLightTheme
          enableBackButton
          enableNotificationButton
          enableMenuButton
        />
        <SafeView>
          <View
            style={[
              css.f1,
              css.z1,
              {
                paddingBottom: normalize(20),
              },
            ]}>
            <View style={[styles.thumbnailWrapper, css.centerPanel]}>
              <Image source={Images.car1} style={styles.thumbnail} />
            </View>

            <View style={[styles.titleWrapper, css.centerPanel, css.mb10]}>
              <Text style={styles.carTitle}>Rent Audi A6 (Blue), 2024</Text>
              <Text style={styles.amountText}>
                {'£' + 153 + '/'}
                <Text
                  style={{
                    fontSize: normalize(10),
                  }}>
                  Day
                </Text>
              </Text>
            </View>

            <ScrollView
              style={[styles.infoWrapper, css.centerPanel]}
              showsHorizontalScrollIndicator={false}
              horizontal>
              <View style={styles.innerInfoWrapper}>
                <Image source={Images.calendarImage} style={styles.infoImage} />
                <Text style={styles.infoText}>Available now</Text>
              </View>
            </ScrollView>

            <Text style={[styles.commonTitle, css.centerPanel]}>
              Vehicle Condition
            </Text>

            <Text style={[styles.description, css.centerPanel]}>
              Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam
              pretium. Imperdiet faucibus feugiat vitae id at nullam vitae etiam
              venenatis. Tortor rhoncus elementum.
            </Text>

            <View style={styles.cardContainer}>
              <Text style={styles.vehicleDetailsHeader}>Vehicle Details</Text>
              {vehicleDetails.map((item, index) => {
                return (
                  <VehicleDetailsRow
                    label={item?.label}
                    value={item?.value}
                    showLine={index < vehicleDetails.length - 1}
                  />
                );
              })}
            </View>

            <View style={[css.centerPanel]}>
              <Text style={[styles.commonTitle]}>Specification</Text>
              <FlatList
                numColumns={3}
                data={specification}
                renderItem={SpecificationItem}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
                removeClippedSubviews={true}
                contentContainerStyle={css.mt10}
              />
            </View>
            <View style={styles.cardContainer}>
              <Input
                title="Pick-up Location"
                placeholder="Enter pick up location"
                containerStyle={[css.mb10]}
                style={css.bgWhite}
              />
              <Input
                title="Drop Off Location"
                placeholder="Enter drop off location"
                containerStyle={[css.mb10]}
                style={css.bgWhite}
              />
            </View>
            <View style={css.p10}>
              <Button
                onPress={() => {
                  navigation.navigate('ProviderTabNavigator', {
                    screen: 'MyVehicleDetails',
                  });
                }}
                title="Remove Vehicle"
              />
            </View>
          </View>
        </SafeView>
      </View>
    </>
  );
};

const SpecificationItem = ({item, index}) => {
  return (
    <View style={[styles.contentWrapper, css.w35]}>
      <Text style={styles.contentTitle}>{item?.title}</Text>
      <Text style={styles.contentValue}>{item?.value}</Text>
    </View>
  );
};

const VehicleDetailsRow = ({label, value, showLine = true}) => {
  return (
    <>
      <View style={styles.vehicleDetailsRow}>
        <View style={styles.vehicleDetailsRowLeft}>
          <Text style={styles.vehicleDetailsLabel}>{label}</Text>
        </View>
        <View style={styles.vehicleDetailsRowRight}>
          <Text style={styles.vehicleDetailsText}>{value}</Text>
        </View>
      </View>
      {showLine && <View style={styles.line} />}
    </>
  );
};

export default MyVehicleDetails;

const styles = StyleSheet.create({
  checkCircleStyle: {
    width: normalize(70),
    height: normalize(70),
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#00000008',
    marginVertical: normalize(10),
  },
  vehicleDetailsHeader: {
    fontSize: normalize(16),
    fontFamily: Fonts.Roboto_Bold,
    color: Colors.black,
    paddingBottom: normalize(20),
  },
  vehicleDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleDetailsRowLeft: {
    width: '50%',
  },
  vehicleDetailsRowRight: {
    width: '40%',
  },
  vehicleDetailsLabel: {
    fontSize: normalize(11),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.steperGray,
  },
  vehicleDetailsText: {
    fontSize: normalize(11),
    fontFamily: Fonts.Roboto_Medium,
    color: Colors.black,
  },
  cardContainer: {
    marginVertical: normalize(20),
    paddingVertical: normalize(20),
    marginHorizontal: normalize(10),
    padding: normalize(10),
    backgroundColor: Colors.bgGray,
    borderRadius: normalize(10),
  },
  providerLabel: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
  },
  providerNameLabel: {
    color: '#310040',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
    lineHeight: normalize(18),
  },
  multilineTextInputStyle: {
    color: 'black',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Regular,
  },
  thumbnailWrapper: {
    height: normalize(200),
    width: Dimensions.get('screen').width - normalize(20),
    borderRadius: normalize(10),
  },
  phoneInput: {
    height: 45,
    borderRadius: 6,
  },
  codeDropdown: {
    width: 85,
  },
  sprInputStyle: {
    minHeight: normalize(90),
    color: 'black',
  },
  phoneInputStyle: {
    color: '#000',
    flex: 1,
  },
  thumbnail: {
    height: '100%',
    width: '100%',
    borderRadius: normalize(10),
    resizeMode: 'stretch',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
  contactStyle: {
    width: normalize(70),
    height: normalize(70),
    resizeMode: 'contain',
  },
  metaInfo: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: normalize(10),
    alignItems: 'center',
  },
  heartImage: {
    height: normalize(26),
    width: normalize(26),
  },
  yearTextWrapper: {
    backgroundColor: 'rgba(49, 0, 64, 0.3)',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(3),
    borderRadius: normalize(8),
  },
  yearText: {
    fontSize: normalize(10),
    color: '#FFFFFF',
    fontFamily: Fonts.Roboto_Medium,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(13),
  },
  carTitle: {
    fontSize: normalize(14),
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
  },
  dropdownItemStyle: {
    width: normalize(80),
  },
  dropdownMenuStyle: {
    backgroundColor: 'red',
  },
  infoWrapper: {},
  innerInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6EEF8',
    borderRadius: 100,
    padding: normalize(5),
    paddingHorizontal: normalize(8),
    marginHorizontal: normalize(3),
  },
  infoImage: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
  },

  infoText: {
    fontSize: normalize(9),
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Medium,
    marginLeft: normalize(5),
    textTransform: 'capitalize',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    padding: normalize(5),
    paddingHorizontal: normalize(8),
    marginHorizontal: normalize(3),
    backgroundColor: Colors.lightYellow,
  },
  starImage: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    tintColor: Colors.darkYellow,
  },
  starText: {
    fontFamily: Fonts.Roboto_Medium,
    marginLeft: normalize(5),
    textTransform: 'capitalize',
    fontSize: normalize(11),
    color: Colors.darkYellow,
  },
  commonTitle: {
    marginTop: normalize(15),
    marginBottom: normalize(5),
    fontSize: normalize(15),
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Medium,
  },
  description: {
    fontSize: normalize(11),
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    lineHeight: normalize(14),
  },
  contactWrapper: {
    // height: normalize(100),
    paddingVertical: normalize(15),
    backgroundColor: '#F6F6F6',
    marginTop: normalize(20),
    borderRadius: normalize(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(15),
  },
  leftInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: normalize(50),
    height: normalize(50),
    marginRight: normalize(10),
    borderRadius: normalize(25),
  },
  commonBtn: {
    backgroundColor: '#9E4DB6',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(8),
    borderRadius: normalize(8),
  },
  commonBtnText: {
    fontSize: normalize(12),
    color: '#FFF',
    fontFamily: Fonts.Roboto_Medium,
  },
  contentWrapper: {
    marginBottom: normalize(20),
  },
  contentTitle: {
    fontSize: normalize(12),
    color: '#919191',
    fontFamily: Fonts.Roboto_Regular,
    marginBottom: normalize(3),
  },
  contentValue: {
    fontSize: normalize(12),
    color: '#060606',
    fontFamily: Fonts.Roboto_Medium,
  },
  reviewWrapper: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: normalize(10),
    padding: normalize(10),
    marginRight: normalize(10),
    width: Dimensions.get('screen').width - normalize(90),
  },

  reviewTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: normalize(14),
    color: '#060606',
    fontFamily: Fonts.Roboto_Medium,
  },
  address: {
    fontSize: normalize(12),
    color: '#B5B5B5',
    fontFamily: Fonts.Roboto_Medium,
  },
  review: {
    fontSize: normalize(11),
    color: '#B5B5B5',
    fontFamily: Fonts.Roboto_Medium,
    marginTop: normalize(5),
    lineHeight: normalize(14),
  },
  reserveBlock: {
    position: 'absolute',
    width: width,
    zIndex: 999,
    bottom: 10,
    backgroundColor: '#310040',
    borderTopRightRadius: normalize(10),
    borderTopLeftRadius: normalize(10),
  },
  reserve_BlockText1: {
    color: '#fff',
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Medium,
  },
  reserve_BlockText2: {
    color: '#fff',
    fontSize: normalize(18),
    fontFamily: Fonts.Roboto_Black,
  },
  reserve_BlockText3: {
    color: '#9e4db6',
    textDecorationLine: 'underline',
  },
  summaryBlockTitle: {
    color: '#919191',
  },
  dropDownButtonArrowStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  dropUpButtonArrowStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  amountText: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(16),
  },
});
