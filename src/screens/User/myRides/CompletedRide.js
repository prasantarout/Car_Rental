import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import css from '../../../themes/Css';
import normalize from '../../../utils/helpers/dimen';
import Images from '../../../themes/Images';
import Icons from '../../../themes/Icons';
import Fonts from '../../../themes/Fonts';
import {useNavigation} from '@react-navigation/native';

const CompletedRide = props => {
  const navigation = useNavigation();
  const completeData = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];
  const completerenderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          // css.rowBetween,

          css.aic,
          css.p12,
          css.w100,
          // css.asc,
          css.my10,
          css.row,

          {
            backgroundColor: '#FFFFFF',
            borderRadius: normalize(10),
            elevation: 3,
            shadowColor: '#9E4DB6',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
        ]}
        onPress={() => {
          navigation.navigate('CompleteRideDetails');
        }}>
        <View style={styles.ImageView}>
          <Image
            source={Images.carBlack}
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>
        <View style={{marginLeft: normalize(15), width: '100%'}}>
          <View style={[styles.rowView]}>
            <Text style={styles.yearText}>SUV</Text>
            <Image
              source={Icons.next}
              style={styles.nextImage}
              resizeMode="contain"
            />
            <Text style={styles.yearText}>2024</Text>
          </View>

          <Text
            style={[styles.headingText1, {width: normalize(130)}]}
            numberOfLines={1}>
            Rent Audi A6 (Blue)
          </Text>
          <View style={styles.ratingView}>
            <Image
              source={Icons.Fillstar}
              style={{height: normalize(15), width: normalize(15)}}
              resizeMode="contain"
            />
            <Text style={styles.ratingText}>4.5 ( 54 Reviews)</Text>
          </View>

          <View style={[styles.rowView]}>
            <Image
              source={Icons.date}
              style={styles.milage}
              resizeMode="contain"
            />
            <Text style={styles.kmText}>15 Feb 2024 to 19 Feb 2024</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={completeData}
      renderItem={completerenderItem}
      contentContainerStyle={{paddingBottom: normalize(250)}}
    />
  );
};

export default CompletedRide;

const styles = StyleSheet.create({
  kmText: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),

    marginLeft: normalize(10),
  },
  milage: {
    height: normalize(11),
    width: normalize(11),
  },
  ratingText: {
    marginLeft: normalize(5),
    color: '#FFC700',
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
  ratingView: {
    backgroundColor: 'rgb(254,249,230)',
    borderRadius: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(8),

    width: '50%',
    marginVertical: normalize(10),
  },
  headingText1: {
    color: '#0B0B0B',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(15),
    textTransform: 'capitalize',
    marginTop: normalize(10),
  },
  yearText: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(10),
  },
  nextImage: {
    height: normalize(8),
    width: normalize(8),
    marginHorizontal: normalize(10),
  },
  rowView: {flexDirection: 'row', alignItems: 'center'},
  carImage: {height: normalize(80), width: normalize(80)},
  ImageView: {
    borderWidth: normalize(1),
    borderColor: '#F2F2F2',
    borderRadius: normalize(10),
    width: normalize(100),
    height: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
