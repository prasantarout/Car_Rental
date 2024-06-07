import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeView from '../../../components/general/SafeView';
import Header from '../../../components/general/Header';
import css from '../../../themes/Css';
import Colors from '../../../themes/Colors';
import HeadingText from '../../../components/micro/HeadingText';
import CarCard from '../../../components/general/CarCard';
import Images from '../../../themes/Images';
import Txt from '../../../components/micro/Txt';
import AddressInput from '../../../components/form/AddressInput';
import Button from '../../../components/micro/Button';
import Fonts from '../../../themes/Fonts';
import normalize from '../../../utils/helpers/dimen';
import ServiceProviderCard from '../../../components/general/ServiceProviderCard';
import {useNavigation} from '@react-navigation/native';

const ReservationConfirmation = props => {
  const navigation = useNavigation();

  return (
    <>
      <Header enableLightTheme enableNotificationButton enableMenuButton />
      <SafeView>
        <ScrollView
          style={[css.f1, css.pb30]}
          contentContainerStyle={[css.fg1]}>
          <View style={[css.centerPanel]}>
            <HeadingText
              title="Thank You! Your Request Was Sent Successfully"
              subTitle="Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus feugiat vitae id at nullam vitae etiam venenatis. Tortor rhoncus elementum."
            />
            <View style={[css.dividerH, css.my16]} />
            <CarCard
              source={{uri: Images.sampleCar}}
              category="SUV"
              year="2024"
              title="Rent Audi A6 (Blue)"
              rating="4.5"
              topSpeed="250"
              insurance="Insurance Included"
            />
            <View style={[css.bgGray, css.px10, css.py20, css.mt16, css.br6]}>
              <View>
                <Txt style={[css.roboto_Medium, css.fs14]}>
                  Your Request ID Is 1234
                </Txt>
                <Txt style={[css.textMute, css.mt6]}>
                  Vestibulum condimentum, massa eu consectetur congue, diam
                  tortor fringilla{' '}
                </Txt>
              </View>
              <View style={[css.dividerH, css.my10]} />
              <View>
                <Txt style={[css.roboto_Medium, css.fs14, css.mb10]}>
                  Select The Pick-up And Drop-off Location
                  {/* Changes Done Based on QA Requirement - MOB 477 */}
                </Txt>
                <AddressInput
                  style={[css.mb10]}
                  title="Pick-up Location"
                  placeholder="123 William Street, Suite 52634"
                />
                <AddressInput
                  style={[css.mb10]}
                  title="Drop-off Location"
                  placeholder="123 St. Peter Street, NY 52671"
                />
                <View style={[css.jcfs, css.row]}>
                  <Button title="Save" />
                </View>
              </View>
            </View>

            <View style={[css.bgGray, css.px10, css.py20, css.mt16, css.br6]}>
              <Txt style={[css.roboto_Medium, css.fs14]}>Booking Summary</Txt>
              <View
                style={[css.bgWhite, css.br6, css.px10, css.py16, css.mt16]}>
                <SummaryText title="From" value="15 Feb 2024 - 12:00 pm" />
                <SummaryText title="To" value="16 Feb 2024 - 12:00 pm" />
                <SummaryText title="Rental (1 Day)" value="£10" />
                <SummaryText title="Insurance" value="Free" />
                <View style={[css.dividerH, css.my8]} />
                <SummaryText title="Subtotal" value="£150" />
                <SummaryText title="VAT Tax (5%)" value="£10" />
                <View style={[css.dividerH, css.my8]} />
                <SummaryText
                  title="Total"
                  value="£200"
                  titleStyle={[styles.totalLeftText]}
                  valueStyle={[styles.totalRightText]}
                />
              </View>
            </View>
            <View style={[css.mt16]}>
              <Txt
                style={[css.roboto_Medium, css.fs14, css.capitalize, css.mb10]}>
                Service provider details
              </Txt>
              <ServiceProviderCard
                style={[]}
                image={Images.user}
                title="Esther Howard"
                info="1800 Trips | Joined Oct 2015"
                respondtime="Typically resonds in 5 mins"
              />
            </View>
            <View style={[css.my16, styles.bgCardStyle, css.p16, css.br6]}>
              <Txt
                style={[css.roboto_Medium, css.fs14, css.capitalize, css.mb10]}>
                Additional Information
              </Txt>
              <Text style={[styles.decText]}>
                Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam
                pretium. Imperdiet faucibus feugiat vitae id at nullam vitae
                etiam venenatis. Tortor rhoncus elementum.
              </Text>
            </View>
            <Button
              title="Confirm Ride By Paying"
              style={[css.mb16]}
              onPres={() => navigation.navigate('My_Rides_Screen')}
            />
          </View>
        </ScrollView>
      </SafeView>
    </>
  );
};

const SummaryText = ({title, value, titleStyle, valueStyle}) => {
  return (
    <View style={[css.rowBetween, css.py7]}>
      <Txt style={[styles.titleStyle, titleStyle]}>{title}</Txt>
      <Txt style={[styles.valueStyle, valueStyle]}>{value}</Txt>
    </View>
  );
};

export default ReservationConfirmation;

const styles = StyleSheet.create({
  titleStyle: {
    color: '#919191',
  },
  valueStyle: {
    color: '#2f3240',
  },
  totalLeftText: {
    color: '#2f3240',
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
  },
  totalRightText: {
    color: Colors.pink,
    fontFamily: Fonts.Roboto_Medium,
    fontSize: normalize(14),
  },
  bgCardStyle: {
    backgroundColor: Colors.lightPink,
  },
  decText: {
    color: Colors.txtcolor,
  },
});
