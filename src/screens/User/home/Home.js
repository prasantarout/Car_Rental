import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/general/Header';
import {Colors, Fonts, Icons, Images} from '../../../themes/Theme';
import TextInputItem from '../../../components/form/TextinputItem';
import normalize from '../../../utils/helpers/dimen';
import HomeItem1component from '../../../components/general/HomeItem1component';
import HomeOffer from '../../../components/general/HomeOffer';
import css from '../../../themes/Css';
import {useNavigation} from '@react-navigation/native';

export default function Home(props) {
  const navigation = useNavigation();
  const [search, setsearch] = useState('');

  const [categorydata, setcategorydata] = useState([
    {
      name: 'Sports Car',
      icon: Images.homecategory1,
      total: '26 Car',
    },
    {
      name: 'Sports Car',
      icon: Images.homecategory2,
      total: '68 Car',
    },
    {
      name: 'SUVs',
      icon: Images.homecategory3,
      total: '52 Car',
    },
    {
      name: 'Convertible',
      icon: Images.homecategory4,
      total: '18 Car',
    },
  ]);

  const [branddata, setbranddata] = useState([
    {
      name: 'Audi',
      icon: Images.homebrand1,
    },
    {
      name: 'BMW',
      icon: Images.homebrand2,
    },
    {
      name: 'Ferrari',
      icon: Images.homebrand3,
    },
    {
      name: 'Lamborghini',
      icon: Images.homebrand4,
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
    {
      icon: Images.homeoffer3,
      isavaible: true,
      offer: '25%',
      name: 'Lexus nX - 300',
      insurence: true,
      milage: '250 Km/Day',
      price: '72.00',
    },
    {
      icon: Images.homeoffer4,
      isavaible: true,
      offer: '25%',
      name: 'Lexus nX - 300',
      insurence: true,
      milage: '250 Km/Day',
      price: '72.00',
    },
  ]);

  return (
    <View style={styles.mainContainer}>
      <Header
        enableLightTheme
        enableAppLogo
        enableNotificationButton
        enableMenuButton
      />
      <View style={styles.container}>
        <View style={css.w80}>
          <TextInputItem
            selectionColor={'transparent'}
            borderRadius={normalize(30)}
            isleftimage={true}
            leftimageicon={Icons.search}
            placeholder={'Search by vehicle model/brand'}
            value={search}
            onChangeText={val => setsearch(val)}
            marginTop={0}
            onFocus={() => navigation.navigate('SearchPage')}
            // isrightimage={true}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Image source={Icons.filter} style={styles.iconFilter} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: normalize(60)}}
        nestedScrollEnabled={true}>
        <View
          style={{
            width: '92%',
            height: normalize(100),
            backgroundColor: '#F6F6F6',
            alignSelf: 'center',
            marginTop: normalize(25),
            borderRadius: normalize(10),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(10),
          }}>
          <View style={{width: '45%'}}>
            <Text
              style={{
                color: Colors.txtblack,
                fontFamily: Fonts.Roboto_Medium,
                fontSize: normalize(14),
              }}>
              Lorem ipsum dolor
            </Text>
            <Text
              style={{
                color: Colors.txtcolor,
                fontFamily: Fonts.Roboto_Regular,
                fontSize: normalize(10.5),
                lineHeight: normalize(15),
                marginTop: normalize(7),
              }}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
          </View>
          <Image
            source={Images.bannerImage}
            style={{
              width: '50%',
              height: normalize(78),
              resizeMode: 'stretch',
            }}
          />
        </View>

        {/* Category */}
        <HomeItem1component
          marginTop={normalize(10)}
          paddingBottom={normalize(10)}
          data={categorydata}
          horizontal={true}
          topsection={true}
          toplefttxt={'Categories'}
          toprighttxt={'View All'}
          onPressCategoryViewAll={() => navigation.navigate('Category')}
        />

        {/* Brand */}
        <HomeItem1component
          marginTop={normalize(10)}
          paddingBottom={normalize(10)}
          data={branddata}
          horizontal={true}
          topsection={true}
          toplefttxt={'Brands'}
          toprighttxt={'View All'}
          onPressCategoryViewAll={() => navigation.navigate('Brands')}
          margintopview={-normalize(0)}
        />
        <HomeOffer
          topsection={true}
          toplefttxt={'Offers'}
          data={offerdata}
          margintopview={normalize(0)}
          marginbottomview={normalize(10)}
          onPress={data => {
            navigation.navigate('CarDetails');
          }}
          flatlistbottom={normalize(35)}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(10),
  },
  filterBtn: {
    width: normalize(50),
    height: normalize(50),
    borderWidth: 1.5,
    borderRadius: normalize(25),
    borderColor: Colors.bordercolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFilter: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});
