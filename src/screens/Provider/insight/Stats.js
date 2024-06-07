import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Fonts from '../../../themes/Fonts';
import normalize from '../../../utils/helpers/dimen';
import Icons from '../../../themes/Icons';
import css from '../../../themes/Css';
import {Dropdown} from 'react-native-element-dropdown';

const dropdownData = [
  {value: 'Last 7 days', label: 'Last 7 days'},
  {value: 'Last 10 days', label: 'Last 10 days'},
  {value: 'Last 15 days', label: 'Last 15 days'},
  {value: 'Last 30 days', label: 'Last 30 days'},
  {value: 'Last 3 months', label: 'Last 3 months'},
];

const statsData = [
  {id: 1, image1: Icons.Booking, name: 'Total Booking', value: '12'},
  {id: 1, image1: Icons.Earing, name: 'Total Earning', value: '£524'},
  {id: 1, image1: Icons.Rating, name: 'Overall Rating', value: '35'},
  {id: 1, image1: Icons.Review, name: 'Review', value: '12'},
  {id: 1, image1: Icons.Views, name: 'Total views', value: '220'},
];
const Stats = props => {
  const [statsDuration, setStatsDuration] = useState(dropdownData[0]);
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          css.aic,
          css.p12,
          css.w100,
          css.my10,
          css.row,
          styles.shadowView,
        ]}>
        <View style={styles.imageView}>
          <Image
            source={item?.image1}
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>
        <View style={{marginLeft: normalize(10)}}>
          <Text style={styles.Title}>{item?.value}</Text>
          <Text style={styles.description}>{item?.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.statsTxt}>Stats</Text>
        <Dropdown
          style={[styles.dropdownStyle, css.w40, css.pl6]}
          placeholderStyle={[styles.placeholderStyle, css.textLight, css.fs12]}
          selectedTextStyle={[css.textLight, css.fs12]}
          itemTextStyle={[css.textLight, css.fs12]}
          data={dropdownData}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={'Select'}
          value={statsDuration}
          onChange={item => {
            setStatsDuration(item.value);
          }}
          renderRightIcon={() => (
            <Image source={Icons.down} style={[styles.dropdownIcon, css.mr8]} />
          )}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={statsData}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: normalize(400)}}
      />
    </>
  );
};

export default Stats;

const styles = StyleSheet.create({
  shadowView: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  description: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
    width: normalize(200),
    marginTop: normalize(5),
  },
  Title: {
    color: '#060606',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(24),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsTxt: {
    color: 'black',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(16),
  },
  carImage: {height: normalize(25), width: normalize(25)},
  imageView: {
    backgroundColor: '#F6EFF8',
    borderRadius: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(20),
  },
  dropdownStyle: {
    backgroundColor: '#F2F2F2',
    height: normalize(34),
    borderRadius: 6,
  },
  dropdownIcon: {
    width: normalize(11),
    height: normalize(11),
    resizeMode: 'contain',
  },
});
