import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import css, {width} from '../../../themes/Css';
import BackButton from '../../../components/micro/BackButton';
import SafeView from '../../../components/general/SafeView';
import Heading from '../../../components/micro/Heading';
import SearchBar from '../../../components/form/SearchBar';
import {dropdownData, locationList} from '../../../FakeAPI';
import normalize from '../../../utils/helpers/dimen';
import Txt from '../../../components/micro/Txt';
import TimeDropdown from '../../../components/micro/TimeDropdown';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../../themes/Colors';
import moment from 'moment';
import Previous from '../../../components/micro/Previous';
import Button from '../../../components/micro/Button';
import Next from '../../../components/micro/Next';
import Fonts from '../../../themes/Fonts';
import {useNavigation} from '@react-navigation/native';

const SearchPage = props => {
  const navigation = useNavigation();
  const [pickUpDates, setPickUpDates] = useState([]);
  const [selectedPickupDate, setSelectedPickupDate] = useState(null);
  const [dropOffDates, setDropOffDates] = useState([]);
  const [selectedDropOffDate, setSelectedDropOffDate] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getPickUpDates();
  }, []);

  const renderLocation = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.locationWrapper, css.p8, css.aic]}>
        <Image source={{uri: item?.image}} style={[styles.locationStyle]} />
        <Txt style={[css.fs8, css.mt5, styles.locationText]}>{item?.title}</Txt>
      </TouchableOpacity>
    );
  };

  const onDateChange = (date, type) => {
    setSelectedPickupDate(date);
    if (type === 'START_DATE') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const isDateBetween = (date, start, end) => {
    return moment(date).isBetween(start, end, 'day', '[]');
  };

  function getPickUpDates() {
    let pickupDates = [];
    let dropOffDates = [];
    let today = moment();
    let dropIntialDate = moment().add(7, 'days');
    for (let i = 0; i < 7; i++) {
      let nextDay = moment(today).add(i, 'days');
      let formattedDate = {
        label: nextDay.format('DD MMM YYYY'),
        value: nextDay.format('DD MMM YYYY'),
      };
      pickupDates.push(formattedDate);
    }
    for (let i = 0; i < 7; i++) {
      let nextDay = moment(dropIntialDate).add(i, 'days');
      let formattedDate = {
        label: nextDay.format('DD MMM YYYY'),
        value: nextDay.format('DD MMM YYYY'),
      };
      dropOffDates.push(formattedDate);
    }
    setPickUpDates(pickupDates);
    setDropOffDates(dropOffDates);
  }

  return (
    <SafeView>
      <View style={[css.px8, css.mb20]}>
        <BackButton
          {...props}
          marginTop={Platform.OS == 'android' ? normalize(15) : 0}
          // marginBottom={ normalize(5)}
        />
        <View style={[css.mt10, css.bgGray, css.px10, css.py16, css.br10]}>
          <Heading title="Search" />
          <SearchBar
            placeholder="Search by vehicle modal/brand"
            style={[css.mt10]}
          />
        </View>
        <View style={[css.mt10, css.bgGray, css.px10, css.py16, css.br10]}>
          <Heading title="Search By Location" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={locationList}
            keyExtractor={item => item.id.toString()}
            renderItem={renderLocation}
            horizontal
          />
        </View>
        <View style={[css.mt10, css.bgGray, css.px10, css.py16, css.br10]}>
          <Heading title="Search By Date" />
          <View style={[css.row, css.aic, css.jcsb, css.mt16]}>
            <View style={[css.w50, css.pr4]}>
              <Txt style={[css.mb10, styles.subTitle]}>Pick-up Date</Txt>
              <TimeDropdown
                data={pickUpDates}
                placeholder={`${moment().format('DD MMM YYYY')}`}
                value={selectedPickupDate}
                onChange={item => setSelectedPickupDate(item?.value)}
              />
            </View>

            <View style={[css.w50, css.pl4]}>
              <Txt style={[css.mb10, styles.subTitle]}>Drop-off Date</Txt>
              <TimeDropdown
                data={dropOffDates}
                placeholder={`${moment().add(7, 'days').format('DD MMM YYYY')}`}
                value={selectedPickupDate}
                onChange={item => setSelectedPickupDate(item?.value)}
              />
            </View>
          </View>
          <View style={[css.mt10, css.bgWhite, css.br10, css.p3, css.py10]}>
            <CalendarPicker
              headerWrapperStyle={[css.w100]}
              width={width - normalize(50)}
              dayLabelsWrapper={[css.w100, css.bct]}
              monthTitleStyle={[styles.monthTitleStyle]}
              yearTitleStyle={[styles.monthTitleStyle]}
              onDateChange={onDateChange}
              minDate={moment()}
              maxDate={moment().add(7, 'days')}
              previousComponent={<Previous />}
              nextComponent={<Next />}
              todayBackgroundColor="transparent"
              selectedDayColor="#F6EFF8"
              allowRangeSelection={true}
              selectedDayTextColor="#9E4DB6"
            />
          </View>
        </View>
        <View style={[css.mt10, css.px10, css.py16, css.row, css.jcc, css.mb0]}>
          <Button title="Reset" type="outline" style={[css.mr16]} />
          <Button
            title="Search"
            onPress={() => {
              navigation.navigate('Rental_Car_Screen');
            }}
          />
        </View>
      </View>
    </SafeView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  locationWrapper: {
    width: normalize(65),
    marginRight: normalize(8),
  },
  locationStyle: {
    width: normalize(65),
    height: normalize(55),
    resizeMode: 'stretch',
    borderRadius: normalize(10),
  },
  locationText: {
    color: '#0B0B0B',
    fontSize: normalize(10),
    fontFamily: Fonts.Roboto_Medium,
  },
  monthTitleStyle: {
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Bold,
    color: '#0B0B0B',
  },
  subTitle: {
    fontSize: normalize(11),
    fontFamily: Fonts.Roboto_Medium,
    color: '#575757',
  },

  startDateStyle: {
    backgroundColor: 'green', // Change to your desired style
  },
  endDateStyle: {
    backgroundColor: 'blue', // Change to your desired style
  },
  betweenDateStyle: {
    backgroundColor: 'yellow', // Change to your desired style
  },
});
