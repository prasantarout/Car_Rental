import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Colors from '../../../themes/Colors';
import SafeView from '../../../components/general/SafeView';
import Txt from '../../../components/micro/Txt';
import css, {mg, width} from '../../../themes/Css';
import Header from '../../../components/general/Header';
import Images from '../../../themes/Images';
import Fonts from '../../../themes/Fonts';
import Heading from '../../../components/micro/Heading';
import TimeDropdown from '../../../components/micro/TimeDropdown';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import Previous from '../../../components/micro/Previous';
import Next from '../../../components/micro/Next';
import HomeOffer from '../../../components/general/HomeOffer';
import timeDropdownData from '../../../utils/LocalAPI/TimeDropdownData';
import Input from '../../../components/form/Input';
import Button from '../../../components/micro/Button';
import Accordian from '../../../components/general/Accordian';
import {faqData} from '../../../FakeAPI';
import BottomSheet from '../../../components/general/BottomSheet';
import normalize from '../../../utils/helpers/dimen';
import countryCode from '../../../utils/LocalAPI/CountryCode';
import Icons from '../../../themes/Icons';
import ActionButton from '../../../components/micro/ActionButton';
import MultilineTextInput from '../../../components/form/MultilineTextInput';
import PhoneNumberTextInput from '../../../components/form/PhoneNumberText';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const CarDetails = props => {
  const authType = useSelector(state => state?.AuthReducer?.authUserType);
  const navigation = useNavigation();
  const [pickUpDates, setPickUpDates] = useState([]);
  const [selectedPickupDate, setSelectedPickupDate] = useState(null);
  const [dropOffDates, setDropOffDates] = useState([]);
  const [bottomSheetScreen, setBottomSheetScreen] = useState('summary');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [accordianStates, setAccordianStates] = useState(
    Array(faqData?.length).fill(false),
  );
  const [vehicleDetails, setVehicleDetails] = useState([
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
  ]);
  const toggleAccordian = index => {
    const newAccordianStates = [...accordianStates];
    newAccordianStates[index] = !newAccordianStates[index];
    setAccordianStates(newAccordianStates);
  };

  const [specification, setSpecification] = useState([
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
  ]);

  const [reviewData, setReviewData] = useState([
    {
      name: 'Chance Bergson',
      address: 'Warsaw, Poland',
      review:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
      star: '4.5',
    },
    {
      name: 'Chance Bergson',
      address: 'Warsaw, Poland',
      review:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
      star: '4.5',
    },
    {
      name: 'Chance Bergson',
      address: 'Warsaw, Poland',
      review:
        'Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan.',
      star: '4.5',
    },
  ]);

  const [offerdata, setofferdata] = useState([
    {
      icon: Images.homeoffer1,
      isavaible: true,
      offer: '25%',
      name: 'Lexus nX - 300',
      insurence: true,
      milage: '250 Km/Day',
      price: '72.00',
    },
    {
      icon: Images.homeoffer2,
      isavaible: true,
      offer: '25%',
      name: 'Lexus nX - 300',
      insurence: true,
      milage: '250 Km/Day',
      price: '72.00',
    },
  ]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getPickUpDates();
  }, []);

  const onDateChange = (date, type) => {
    setSelectedPickupDate(date);
    if (type === 'START_DATE') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  function getPickUpDates() {
    let pickupDateList = [];
    let dropOffDateList = [];
    let today = moment();
    let dropIntialDate = moment().add(7, 'days');
    for (let i = 0; i < 7; i++) {
      let nextDay = moment(today).add(i, 'days');
      let formattedDate = {
        label: nextDay.format('DD MMM YYYY'),
        value: nextDay.format('DD MMM YYYY'),
      };
      pickupDateList.push(formattedDate);
    }
    for (let i = 0; i < 7; i++) {
      let nextDay = moment(dropIntialDate).add(i, 'days');
      let formattedDate = {
        label: nextDay.format('DD MMM YYYY'),
        value: nextDay.format('DD MMM YYYY'),
      };
      dropOffDateList.push(formattedDate);
    }
    setPickUpDates(pickupDateList);
    setDropOffDates(dropOffDateList);
  }

  const calendarRef = useRef(null);

  const handleNextMonth = () => {
    calendarRef.current.handleOnPressNext();
  };

  const handlePrevMonth = () => {
    calendarRef.current.handleOnPressPrevious();
  };

  const renderAccordian = ({item, index}) => {
    return (
      <Accordian
        title={item?.question}
        info={item?.answer}
        onPress={() => toggleAccordian(index)}
        isOpen={accordianStates[index]}
        style={[css.mb10]}
      />
    );
  };

  const handleReserve = () => {
    switch (bottomSheetScreen) {
      case 'summary': {
        setBottomSheetScreen('details');
        break;
      }
      case 'details': {
        setBottomSheetScreen('thankyou');
        break;
      }
      case 'thankyou': {
        setIsBookingModalOpen(false);
        navigation.navigate('ReservationConfirmation');
        break;
      }
    }
  };

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
                paddingBottom:
                  authType === 'user'
                    ? Platform.OS === 'ios'
                      ? normalize(80)
                      : normalize(50)
                    : normalize(20),
              },
            ]}>
            <View style={[styles.thumbnailWrapper, css.centerPanel]}>
              <Image source={Images.car1} style={styles.thumbnail} />
              <View style={styles.metaInfo}>
                <View style={styles.yearTextWrapper}>
                  <Text style={styles.yearText}>2015</Text>
                </View>

                <TouchableOpacity>
                  <Image source={Images.heartImage} style={styles.heartImage} />
                </TouchableOpacity>
              </View>
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
              <View style={styles.innerInfoWrapper}>
                <Image source={Images.meterImage} style={styles.infoImage} />
                <Text style={styles.infoText}>250 km/day</Text>
              </View>
              <View style={styles.innerInfoWrapper}>
                <Image
                  source={Images.insuranceImage}
                  style={styles.infoImage}
                />
                <Text style={styles.infoText}>Insurance included</Text>
              </View>
            </ScrollView>

            <Text style={[styles.commonTitle, css.centerPanel]}>
              Description
            </Text>

            <Text style={[styles.description, css.centerPanel]}>
              Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam
              pretium. Imperdiet faucibus feugiat vitae id at nullam vitae etiam
              venenatis. Tortor rhoncus elementum.
            </Text>

            <View style={[styles.contactWrapper, css.centerPanel]}>
              <View style={styles.leftInfoWrapper}>
                <Image source={Images.user52} style={styles.userImage} />
                <View>
                  <Text style={styles.providerLabel}>Provider</Text>
                  <Text style={styles.providerNameLabel}>Esther Howard</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.commonBtn}
                onPress={() => {
                  setIsBookingModalOpen(true);
                  setBottomSheetScreen('contact');
                }}>
                <Text style={styles.commonBtnText}>Contact</Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                css.mt10,
                css.mb10,
                css.bgGray,
                css.px10,
                css.py16,
                css.br10,
                css.centerPanel,
              ]}>
              <Heading title="Choose A Rental Date" />
              <View style={[css.row, css.aic, css.jcsb, css.mt16]}>
                <View style={[css.w50, css.pr4]}>
                  <Txt style={[css.mb5, styles.subTitle]}>Pick-up Date</Txt>

                  <View style={[css.bgWhite, css.p10, css.br6]}>
                    <Txt>
                      {startDate
                        ? moment(startDate).format('DD-MMM-YYYY')
                        : moment().format('DD-MMM-YYYY')}
                    </Txt>
                  </View>
                </View>

                <View style={[css.w50, css.pl4]}>
                  <Txt style={[css.mb5, styles.subTitle]}>Drop-off Date</Txt>
                  <View style={[css.bgWhite, css.p10, css.br6]}>
                    <Txt>
                      {endDate
                        ? moment(endDate).format('DD-MMM-YYYY')
                        : moment().format('DD-MMM-YYYY')}
                    </Txt>
                  </View>
                </View>
              </View>
              <View style={[css.w50, css.pl4, css.mt10]}>
                <Txt style={[css.mb5, styles.subTitle]}>Starting Time</Txt>
                <TimeDropdown
                  data={timeDropdownData}
                  placeholder={'00:00'}
                  value={selectedPickupDate}
                  onChange={item => setSelectedPickupDate(item?.value)}
                />
              </View>
              <View style={[css.mt10, css.bgWhite, css.br10, css.p3, css.py10]}>
                <CalendarPicker
                  headerWrapperStyle={[css.w100]}
                  width={width - normalize(50)}
                  ref={calendarRef}
                  dayLabelsWrapper={[css.w100, css.bct]}
                  monthTitleStyle={[styles.monthTitleStyle]}
                  yearTitleStyle={[styles.monthTitleStyle]}
                  onDateChange={onDateChange}
                  onMonthChange={date => setSelectedMonth(date)}
                  minDate={moment()}
                  previousComponent={<Previous onPress={handlePrevMonth} />}
                  nextComponent={<Next onPress={handleNextMonth} />}
                  todayBackgroundColor="transparent"
                  selectedDayColor="#F6EFF8"
                  allowRangeSelection={true}
                  selectedDayTextColor="#9E4DB6"
                />
              </View>
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
            <View style={[styles.thumbnailWrapper, css.centerPanel]}>
              <Image source={Images.map} style={[styles.thumbnail]} />
            </View>
            <View style={[css.centerPanel]}>
              <Text style={[styles.commonTitle]}>Reviews</Text>
              <View style={[styles.innerInfoWrapper]}>
                <Image source={Images.starIcon} style={styles.infoImage} />
                <Text
                  style={[
                    styles.infoText,
                    {
                      fontSize: normalize(11),
                    },
                  ]}>
                  4.5 ( 54 Reviews)
                </Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={reviewData}
                renderItem={RenderReview}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
                removeClippedSubviews={true}
                contentContainerStyle={{
                  marginTop: normalize(10),
                }}
              />
            </View>
            <View style={[css.mt5, css.centerPanel]}>
              <HomeOffer
                topsection={true}
                toplefttxt={'Similar Vehicle'}
                data={offerdata}
                margintopview={normalize(5)}
                marginbottomview={normalize(5)}
                onPress={data => {
                  navigation.navigate('CarDetails');
                }}
                width={'100%'}
                flatlistbottom={normalize(0)}
              />
              <HomeOffer
                topsection={true}
                toplefttxt={'More From Provider'}
                data={offerdata}
                margintopview={normalize(5)}
                marginbottomview={normalize(5)}
                onPress={data => {
                  navigation.navigate('CarDetails');
                }}
                width={'100%'}
                flatlistbottom={normalize(0)}
              />
            </View>

            <View
              style={[
                styles.formWrapper,
                css.bgWhite,
                css.shadow1,
                css.p10,
                css.br10,
                css.centerPanel,
                css.mb16,
              ]}>
              <Text style={styles.commonTitle}>Report</Text>
              <Input
                title="Full name"
                placeholder="Enter name"
                containerStyle={[css.mb10]}
              />
              <Input
                title="Booking ID"
                placeholder="Enter booking ID"
                containerStyle={[css.mb10]}
              />
              <Input
                title="Description"
                placeholder="Type here..."
                containerStyle={[css.mb10]}
                multiline={true}
              />
              <Button title="Submit" style={[css.ass, css.mb16]} />
            </View>

            <View style={[css.bgWhite, css.br10, css.centerPanel, css.mb16]}>
              <Txt style={[css.roboto_Medium, css.fs17, css.mb16]}>
                Frequently Asked Questions
              </Txt>
              <View style={[styles.faqSection]}>
                <FlatList
                  data={faqData}
                  keyExtractor={item => item._id}
                  renderItem={renderAccordian}
                />
              </View>
            </View>
          </View>
        </SafeView>
      </View>

      <View
        style={[
          styles.reserveBlock,
          css.rowBetween,
          css.aic,
          css.px16,
          css.py10,
        ]}>
        <View>
          <Text style={[styles.reserve_BlockText1]}>Price for 5 Days</Text>
          <Text style={[styles.reserve_BlockText2]}>£155</Text>
          <Text style={[styles.reserve_BlockText3]}>View Price Details</Text>
        </View>
        <View>
          <Button
            title="Reserve"
            onPress={() => setIsBookingModalOpen(!isBookingModalOpen)}
          />
        </View>
      </View>

      <BottomSheet
        isVisible={isBookingModalOpen}
        title={
          bottomSheetScreen === 'summary'
            ? 'Booking Summary'
            : bottomSheetScreen === 'details'
            ? 'Enter Your Booking Details'
            : null
        }
        onClose={() => {
          setIsBookingModalOpen(!isBookingModalOpen);
          setBottomSheetScreen('summary');
        }}>
        <View style={[mg.mt16]}>
          {bottomSheetScreen === 'contact' && <BookingContact />}
          {bottomSheetScreen === 'summary' && <BookingSummery />}
          {bottomSheetScreen === 'details' && <BookingDetails />}
          {bottomSheetScreen === 'thankyou' && <BookingThanks />}
          {bottomSheetScreen !== 'contact' && (
            <>
              {bottomSheetScreen === 'thankyou' ? (
                <View style={[css.my16]}>
                  <Button title={'View Details'} onPress={handleReserve} />
                </View>
              ) : (
                <View style={[css.my16]}>
                  <Button title={'Reserve'} onPress={handleReserve} />
                </View>
              )}
            </>
          )}
        </View>
      </BottomSheet>
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

const BookingDetails = () => {
  const [specialRequest, setSpecialRequest] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCode[0],
  );
  return (
    <View style={[css.f1]}>
      <PhoneNumberTextInput
        value={phoneNumber}
        setValue={setPhoneNumber}
        selectedCountryCode={selectedCountryCode}
        onCountryCodeChange={val => setSelectedCountryCode(val)}
      />
      <MultilineTextInput
        setValue={setSpecialRequest}
        value={specialRequest}
        title={'Special Request'}
        textInputStyle={styles.multilineTextInputStyle}
        placeholder={'Share your special request with us'}
      />
    </View>
  );
};

const BookingContact = () => {
  return (
    <View style={[css.f1]}>
      <View style={[css.center]}>
        <Image source={Icons.contact} style={[styles.contactStyle]} />
        <Txt style={[css.mt16, css.roboto_Bold, css.fs16]}>
          How do you like to contact?
        </Txt>
        <Txt style={[css.mt8]}>Lorem ipsum dolor sit amet consectetur.</Txt>
      </View>
      <View style={[css.mt16]}>
        <ActionButton
          title="Make A Call"
          icon={Icons.call}
          style={[css.mb16]}
          onPress={() => {}}
        />
        <View style={[css.rowBetween]}>
          <ActionButton
            title="Whatsapp"
            icon={Icons.whatsapp}
            style={[css.w45]}
            onPress={() => {}}
          />
          <ActionButton
            title="Telegram"
            icon={Icons.telegram}
            style={[css.w45]}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const BookingSummery = () => {
  return (
    <>
      <SummaryBlock title="From" value="15 Feb 2024 - 12:00" />
      <SummaryBlock title="To" value="16 Feb 2024 - 01:00" />
      <SummaryBlock title="Rental (5 day)" value="£765" />
      <SummaryBlock title="Insurance" value="Free" />
      <View style={[css.divider]} />
      <SummaryBlock title="Subtotal" value="£765" />
      <SummaryBlock title="VAT Tax (5%)" value="£40" />
      <View style={[css.divider]} />
      <View style={[css.rowBetween]}>
        <Txt style={[css.fs14, css.roboto_Bold]}>Total</Txt>
        <Txt style={[css.roboto_Bold, css.fs14]}>£805</Txt>
      </View>
    </>
  );
};

const SummaryBlock = ({title, value}) => {
  return (
    <View style={[css.rowBetween, css.aic, css.py8]}>
      <Text style={[styles.summaryBlockTitle]}>{title}</Text>
      <Txt style={[css.roboto_Bold]}>{value}</Txt>
    </View>
  );
};

const RenderReview = ({item, index}) => {
  return (
    <View style={[styles.reviewWrapper]}>
      <View style={styles.reviewTopSection}>
        <View>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.address}>{item?.address}</Text>
        </View>
        <View style={[styles.starContainer]}>
          <Image source={Images.starIcon} style={[styles.starImage]} />
          <Text style={[styles.infoText, {}]}>{item?.star}</Text>
        </View>
      </View>
      <View style={styles.reviewTextWrapper}>
        <Text style={styles.review}>{`"${item?.review}"`}</Text>
      </View>
    </View>
  );
};

const BookingThanks = ({setIsBottomSheetOpen}) => {
  return (
    <View style={[css.center, css.py10]}>
      <Image style={[styles.checkCircleStyle]} source={Icons.checkCircle} />
      <Txt style={[css.fs15, css.roboto_Bold, css.mt16]}>{'Thank You!'}</Txt>
      <Txt style={[css.textLight, css.mt10, css.tac]}>
        {'Your request has been sent successfully'}
      </Txt>
    </View>
  );
};

export default CarDetails;

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
