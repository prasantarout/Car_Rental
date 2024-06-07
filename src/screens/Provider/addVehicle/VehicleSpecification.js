import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProviderOnboardingTemplate from '../../../components/general/ProviderOnboardingTemplate';
import css from '../../../themes/Css';
import CustomDropDown from '../../../components/micro/CustomDropDown';
import Txt from '../../../components/micro/Txt';
import {DummyDataColorOptions, DummyDataOptions} from '../../../DummyData';
import Input from '../../../components/form/Input';
import Button from '../../../components/micro/Button';
import Colors from '../../../themes/Colors';

const VehicleSpecification = props => {
  const styles = customStyles();
  const route = useRoute();
  const navigation = useNavigation();

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleEngine, setVehicleEngine] = useState('');
  const [vehicleTransmission, setVehicleTransmission] = useState('');
  const [vehicleHorsePower, setVehicleHorsePower] = useState('');
  const [vehicleFuelType, setVehicleFuelType] = useState('');
  const [vehicleBodyType, setVehicleBodyType] = useState('');
  const [vehicleTorque, setVehicleTorque] = useState('');
  const [vehicleMaxSpeed, setVehicleMaxSpeed] = useState('');

  return (
    <ProviderOnboardingTemplate
      title={'John Doe, Register your vehicle'}
      subTitle={
        'Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus.'
      }
      steps={['01', '02', '03']}
      activeStep={'02'}
      {...route.params}>
      <View style={[css.py20, css.px20]}>
        <View style={[css.br10, css.p10, styles.innerContainer]}>
          <View style={[css.center]}>
            <Txt style={[css.fs16, css.roboto_Bold, css.py19, css.tac]}>
              Vehicle Specification
            </Txt>
          </View>
          <View style={[css.row, css.mb16, css.jcsb]}>
            <CustomDropDown
              data={DummyDataColorOptions}
              label="Vehicle Category"
              value={vehicleColor}
              onChange={item => {
                setVehicleColor(item);
              }}
              renderComponent={item => (
                <View
                  style={[
                    styles.dropdownStyle,
                    css.w100,
                    css.pl6,
                    css.row,
                    css.my4,
                    css.aic,
                  ]}>
                  <View
                    style={[css.mr8, css.is20, {backgroundColor: item.color}]}
                  />
                  <Text style={[css.textLight, css.fs12]}>{item.value}</Text>
                </View>
              )}
              renderLeftIcon
              containerStyle={[css.w45, css.mb16]}
            />
            <Input
              title="Engine"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter engine"
              value={vehicleEngine}
              onChangeText={setVehicleEngine}
            />
          </View>
          <View style={[css.row, css.mb16, css.jcsb]}>
            <CustomDropDown
              data={DummyDataOptions}
              label="Transmission"
              value={vehicleTransmission}
              onChange={item => {
                setVehicleTransmission(item);
              }}
              containerStyle={[css.w45, css.mb16]}
            />
            <Input
              title="Horse Power"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter horse power"
              value={vehicleHorsePower}
              onChangeText={setVehicleHorsePower}
            />
          </View>
          <View style={[css.row, css.mb16, css.jcsb]}>
            <CustomDropDown
              data={DummyDataOptions}
              label="Fuel Type"
              value={vehicleFuelType}
              onChange={item => {
                setVehicleFuelType(item);
              }}
              containerStyle={[css.w45, css.mb16]}
            />
            <CustomDropDown
              data={DummyDataOptions}
              label="Body Type"
              value={vehicleBodyType}
              onChange={item => {
                setVehicleBodyType(item);
              }}
              containerStyle={[css.w45, css.mb16]}
            />
          </View>
          <View style={[css.row, css.mb16, css.jcsb]}>
            <Input
              title="0-100KM/H"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter 0-100km/h"
              value={vehicleTorque}
              onChangeText={setVehicleTorque}
            />
            <Input
              title="Max Speed"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter max speed"
              value={vehicleMaxSpeed}
              onChangeText={setVehicleMaxSpeed}
            />
          </View>
          <View style={[css.mt10, css.mb16]}>
            <Button
              title="Continue"
              onPress={() => {
                navigation.navigate('VehicleDocument', route.params);
              }}
            />
          </View>
        </View>
      </View>
    </ProviderOnboardingTemplate>
  );
};

const customStyles = () =>
  StyleSheet.create({
    innerContainer: {
      backgroundColor: Colors.cardBg,
    },
  });

export default VehicleSpecification;
