import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splashScreen/Splash';
import TabNavigator from './BottomTab';
import SearchPage from '../screens/user/home/SearchPage';
import ChatScreen from '../screens/user/messages/ChatScreen';
import Category from '../screens/user/home/Category';
import Brands from '../screens/user/home/Brands';
import Rental_Car_Screen from '../screens/user/RentCar/Rental_Car_Screen';
import CarDetails from '../screens/user/home/CarDetails';
import Signup from '../screens/auth/Signup';
import Signin from '../screens/auth/Signin';
import OTPVerification from '../screens/auth/OTPVerification';
import ResetPassword from '../screens/auth/ResetPassword';
import ReservationConfirmation from '../screens/user/home/ReservationConfirmation';
import My_Rides_Screen from '../screens/user/myRides/My_Rides_Screen';
import UserProfle from '../screens/user/profile/UserProfle';
import EditProfile from '../screens/user/profile/EditProfile';
import MyFavourite from '../screens/main/MyFavourite';
import PaymentHistory from '../screens/main/PaymentHistory';
import Settings from '../screens/main/Settings';
import InviteEarn from '../screens/main/InviteEarn';
import HelpCenter from '../screens/main/HelpCenter';
import Faq from '../screens/main/Faq';
import SendFeedback from '../screens/main/SendFeedback';
import ContactUs from '../screens/main/ContactUs';
import Notification from '../screens/main/Notification';
import ChangePassword from '../screens/user/profile/ChangePassword';
import Cancelride from '../screens/user/myRides/Cancelride';
import Payment from '../screens/user/myRides/Payment';
import CompleteRideDetails from '../screens/user/myRides/CompleteRideDetails';
import OnBoarding from '../screens/onboardingScreen/Onboarding';
import {useSelector} from 'react-redux';
import RequestList from '../screens/provider/home';
import RequestListDetails from '../screens/provider/home/RequestListDetails';
import ProviderTabNavigator from './ProviderBottomTab';
import CalenderDetails from '../screens/provider/calender/CalenderDetails';
import RequestRideDetails from '../screens/provider/home/RequestRideDetails';
import PrivacyPolicy from '../screens/main/PrivacyPolicy';
import TermsCondition from '../screens/main/TermsCondition';
import VehicleInformation from '../screens/provider/addVehicle/VehicleInformation';
import VehicleSpecification from '../screens/provider/addVehicle/VehicleSpecification';
import VehicleDocument from '../screens/provider/addVehicle/VehicleDocument';
import MembershipPlanPayment from '../screens/provider/membershipPlan/MembershipPlanPayment';
import MembershipPlan from '../screens/provider/membershipPlan/MembershipPlan';
import Opportunities from '../screens/provider/insight/Opportunities';
import Stats from '../screens/provider/insight/Stats';
import MyVehicleDetails from '../screens/provider/myVehicle/MyVehicleDetails';
import ProviderCompletedRides from '../screens/provider/rides/ProviderCompletedRides';
import ProviderCompletedRidesDetails from '../screens/provider/rides/ProviderCompletedRidesDetails';
import MyMenbershipPlan from '../screens/provider/membershipPlan/MyMenbershipPlan';
import ConsumerRideDetails from '../screens/provider/rides/ConsumerRideDetails';

const StackNav = props => {
  const authType = useSelector(state => state?.AuthReducer?.authUserType);

  const Stack = createStackNavigator();

  const mytheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
    },
  };

  const UserScreens = {
    //------------------------Default
    Splash: Splash,
    OnBoarding: OnBoarding,
    //------------------------Auth
    Signin: Signin,
    Signup: Signup,
    OTPVerification: OTPVerification,
    ResetPassword: ResetPassword,
    ChangePassword: ChangePassword,
    //------------------------Menu Panel
    Brands: Brands,
    UserProfle: UserProfle,
    EditProfile: EditProfile,
    MyFavourite: MyFavourite,
    PaymentHistory: PaymentHistory,
    Settings: Settings,
    InviteEarn: InviteEarn,
    HelpCenter: HelpCenter,
    SendFeedback: SendFeedback,
    ContactUs: ContactUs,
    Faq: Faq,
    PrivacyPolicy: PrivacyPolicy,
    TermsCondition: TermsCondition,
    //------------------------Common
    Notification: Notification,
    ChatScreen: ChatScreen,
    //------------------------Bottom Tab Navigator
    TabNavigator: TabNavigator,
    //------------------------Other screens
    SearchPage: SearchPage,
    Category: Category,
    Rental_Car_Screen: Rental_Car_Screen,
    CarDetails: CarDetails,
    ReservationConfirmation: ReservationConfirmation,
    My_Rides_Screen: My_Rides_Screen,
    Cancelride: Cancelride,
    Payment: Payment,
    CompleteRideDetails: CompleteRideDetails,
  };

  const ProviderScreens = {
    //------------------------Auth
    Signin: Signin,
    Signup: Signup,
    OTPVerification: OTPVerification,
    ResetPassword: ResetPassword,
    ChangePassword: ChangePassword,
    //------------------------Menu Panel
    UserProfle: UserProfle,
    EditProfile: EditProfile,
    ProviderCompletedRides: ProviderCompletedRides,
    ProviderCompletedRidesDetails: ProviderCompletedRidesDetails,
    PaymentHistory: PaymentHistory,
    Settings: Settings,
    InviteEarn: InviteEarn,
    HelpCenter: HelpCenter,
    SendFeedback: SendFeedback,
    ContactUs: ContactUs,
    Faq: Faq,
    PrivacyPolicy: PrivacyPolicy,
    TermsCondition: TermsCondition,
    //------------------------Common
    Notification: Notification,
    ChatScreen: ChatScreen,
    //------------------------Add New Vehicle
    AddNewCar: VehicleInformation,
    VehicleSpecification: VehicleSpecification,
    VehicleDocument: VehicleDocument,
    MembershipPlan: MembershipPlan,
    MembershipPlanPayment: MembershipPlanPayment,
    //------------------------Bottom Tab Navigator
    ProviderTabNavigator: ProviderTabNavigator,
    //------------------------Other screens
    RequestList: RequestList,
    RequestListDetails: RequestListDetails,
    CalenderDetails: CalenderDetails,
    Opportunities: Opportunities,
    Stats: Stats,
    RequestRideDetails: RequestRideDetails,
    MyVehicleDetails: MyVehicleDetails,
    MyMenbershipPlan: MyMenbershipPlan,
    ConsumerRideDetails: ConsumerRideDetails,
  };

  // if (PodcastReducer.isLoading) {
  //   return <Splash />;
  // } else {
  return (
    <NavigationContainer theme={mytheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {authType === 'user' && // -------------- Users Screens --------------
          Object.entries({
            ...UserScreens,
          }).map(([name, component]) => {
            return (
              <Stack.Screen key={name} name={name} component={component} />
            );
          })}
        {authType === 'provider' &&
          //-------------- Providers Screens --------------
          Object.entries({
            ...ProviderScreens,
          }).map(([name, component]) => {
            return (
              <Stack.Screen key={name} name={name} component={component} />
            );
          })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//   };

export default StackNav;
