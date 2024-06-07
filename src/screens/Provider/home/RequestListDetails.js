import React from 'react';
import Header from '../../../components/general/Header';
import SafeView from '../../../components/general/SafeView';
import {FlatList, StyleSheet, View} from 'react-native';
import RequestCard from './RequestCard';
import {useNavigation} from '@react-navigation/native';
import css from '../../../themes/Css';

const list = [
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
  {
    userName: 'Viezh Robert',
    age: '30',
    licenceId: '123456789',
    vehicle: 'Rent Audi A6 (Blue)',
    email: 'georgia.young@example.com',
    phone: '(308) 555-0121',
  },
];

const RequestListDetails = props => {
  const styles = customStyles();
  const navigation = useNavigation();
  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Request List'}
        enableNotificationButton
        enableMenuButton
      />
      <SafeView>
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={({item, index}) => (
              <RequestCard item={item} index={index} navigation={navigation} />
            )}
          />
        </View>
      </SafeView>
    </View>
  );
};

const customStyles = () =>
  StyleSheet.create({
    listContainer: {
      width: '100%',
    },
  });

export default RequestListDetails;
