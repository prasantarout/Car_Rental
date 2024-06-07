import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import css from '../../../themes/Css';
import normalize from '../../../utils/helpers/dimen';
import Images from '../../../themes/Images';
import Icons from '../../../themes/Icons';
import Fonts from '../../../themes/Fonts';

import Colors from '../../../themes/Colors';
import Header from '../../../components/general/Header';
import TextInputItem from '../../../components/form/TextinputItem';

const Calender = () => {
  const [search, setsearch] = useState('');
  const navigation = useNavigation();
  const completeData = [
    {
      index: 0,
      id: 1,
    },
    {
      index: 1,
      id: 1,
    },
    {
      index: 2,
      id: 1,
    },
    {
      index: 3,
      id: 1,
    },
    {
      index: 4,
      id: 1,
    },
    {
      index: 5,
      id: 1,
    },
  ];

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Header
          enableLightTheme
          headerBlackText={'Calender'}
          enableNotificationButton
          enableMenuButton
        />
        <View style={styles.container}>
          <View style={css.w100}>
            <TextInputItem
              borderRadius={normalize(30)}
              isleftimage={true}
              leftimageicon={Icons.search}
              placeholder={'Search '}
              value={search}
              onChangeText={val => setsearch(val)}
              marginTop={0}
              messgaeScreen={true}
              // isrightimage={true}
            />
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={completeData}
          keyExtractor={item => item.index}
          renderItem={({item}) => (
            <CompleterenderItem item={item} navigation={navigation} />
          )}
          contentContainerStyle={{
            paddingTop: normalize(20),
            paddingBottom: normalize(70),
          }}
        />
      </View>
    </>
  );
};

const CompleterenderItem = ({item, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={[
          css.aic,
          css.p12,
          css.w95,
          css.my10,
          css.row,
          {
            backgroundColor: Colors.white,
            borderRadius: normalize(10),
            elevation: 3,
            shadowColor: '#9E4DB6',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
        ]}
        onPress={() => {
          navigation.navigate('CalenderDetails');
        }}>
        <View style={styles.ImageView}>
          <Image
            source={Images.carBlack}
            style={styles.carImage}
            resizeMode="contain"
          />
        </View>
        <View style={{marginLeft: normalize(15), width: '100%'}}>
          <Text
            style={[styles.headingText1, {width: normalize(130)}]}
            numberOfLines={1}>
            Rent Audi A6 (Blue)
          </Text>
          <Text style={styles.price}>
            £805
            <Text style={{fontSize: normalize(10)}}>/Day</Text>
          </Text>
          <View style={[styles.rowView]}>
            <Text style={styles.kmText}>Booking rate 65%</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  price: {
    color: '#9E4DB6',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(14),
    marginTop: normalize(10),
  },
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kmText: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(11),
  },
  milage: {
    height: normalize(11),
    width: normalize(11),
  },
  ratingText: {
    color: Colors.pink,
    fontSize: normalize(14),
    fontFamily: Fonts.Roboto_Bold,
  },
  ratingView: {
    alignItems: 'flex-start',
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
