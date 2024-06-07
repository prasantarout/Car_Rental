import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProviderOnboardingTemplate from '../../../components/general/ProviderOnboardingTemplate';
import css from '../../../themes/Css';
import Txt from '../../../components/micro/Txt';
import Input from '../../../components/form/Input';
import CustomDropDown from '../../../components/micro/CustomDropDown';
import {DummyDataOptions} from '../../../DummyData';
import CustomDropDownText from '../../../components/micro/CustomDropDownText';
import Button from '../../../components/micro/Button';
import Colors from '../../../themes/Colors';
import MultilineTextInput from '../../../components/form/MultilineTextInput';

const VehicleInformation = props => {
  const styles = customStyles();
  const route = useRoute();
  const navigation = useNavigation();

  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vehicleCatagory, setVehicleCatagory] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [manufaturingYear, setManufaturingYear] = useState('');
  const [rentalCharges, setRentalCharges] = useState('');
  const [vehicleDescription, setVehicleDescription] = useState('');
  const [vehicleCondition, setVehicleCondition] = useState('');
  const [kilometerCovered, setKilometerCovered] = useState('');
  const [insuranceDetails, setInsuranceDetails] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  return (
    <ProviderOnboardingTemplate
      title={'John Doe, Register your vehicle'}
      subTitle={
        'Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus.'
      }
      steps={['01', '02', '03']}
      activeStep={'01'}
      {...route.params}>
      <View style={[css.py20, css.px20]}>
        <View style={[css.br10, css.p10, styles.innerContainer]}>
          <View style={[css.center]}>
            <Txt style={[css.fs16, css.roboto_Bold, css.py19, css.tac]}>
              Vehicle Information
            </Txt>
          </View>
          <Input
            title="Vehicle Name"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter vehicle name"
            value={vehicleName}
            onChangeText={setVehicleName}
          />
          <View style={[css.row, css.mb16, css.jcsb]}>
            <Input
              title="Vehicle Number"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter vehicle number"
              value={vehicleNumber}
              onChangeText={setVehicleNumber}
            />
            <Input
              title="Model Number"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter model number"
              value={modelNumber}
              onChangeText={setModelNumber}
            />
          </View>
          <View style={[css.row, css.mb16, css.jcsb]}>
            <Input
              title="Registration Number"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter registration number"
              value={registrationNumber}
              onChangeText={setRegistrationNumber}
            />
            <CustomDropDown
              data={DummyDataOptions}
              label="Vehicle Category"
              value={vehicleCatagory}
              onChange={item => {
                setVehicleCatagory(item.value);
              }}
              containerStyle={[css.w45, css.mb16]}
            />
          </View>
          <Input
            title="Manufacturing Brand Name"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter manufacturing brand name"
            value={vehicleBrand}
            onChangeText={setVehicleBrand}
          />
          <CustomDropDown
            data={DummyDataOptions}
            label="Manufacturing Year"
            value={manufaturingYear}
            onChange={item => {
              setManufaturingYear(item.value);
            }}
            containerStyle={[css.f1, css.mb16]}
          />
          <CustomDropDownText
            data={DummyDataOptions}
            label="Hourly/daily rental charges"
            textPlaceholder="Enter rental charges"
            value={rentalCharges}
            onChange={item => {
              setRentalCharges(item.value);
            }}
            mainContainerStyle={[css.f1, css.mb16]}
          />
          <MultilineTextInput
            title="Vehicle Description"
            containerStyle={css.mb16}
            placeholder="Enter vehicle description"
            value={vehicleDescription}
            setValue={setVehicleDescription}
          />
          <MultilineTextInput
            title="Vehicle Condition"
            containerStyle={css.mb16}
            placeholder="Enter vehicle condition"
            value={vehicleCondition}
            setValue={setVehicleCondition}
          />
          <View style={[css.row, css.mb16, css.jcsb]}>
            <Input
              title="Kilometres covered/day"
              containerStyle={[css.w45, css.mb16]}
              placeholder="Enter kilometres covered/day"
              value={kilometerCovered}
              onChangeText={setKilometerCovered}
            />
            <CustomDropDown
              data={DummyDataOptions}
              label="Insurance Details"
              value={insuranceDetails}
              onChange={item => {
                setInsuranceDetails(item.value);
              }}
              containerStyle={[css.w45, css.mb16]}
            />
          </View>
          <Input
            title="Pick-up Location"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter pick-up location"
            value={pickupLocation}
            onChangeText={setPickupLocation}
            titleStyle={css.ttn}
          />
          <Input
            title="Drop-off Location"
            containerStyle={[css.f1, css.mb16]}
            placeholder="Enter drop-off location"
            value={dropLocation}
            onChangeText={setDropLocation}
            titleStyle={css.ttn}
          />
          <View style={[css.mt10, css.mb16]}>
            <Button
              title="Continue"
              onPress={() => {
                navigation.navigate('VehicleSpecification', route.params);
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

export default VehicleInformation;
