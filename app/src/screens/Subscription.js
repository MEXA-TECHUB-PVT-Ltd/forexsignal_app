import {
  StyleSheet,
  StatusBar,
  Text,
  Linking,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import Feater from 'react-native-vector-icons/Feather';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import Headers from '../Custom/Headers';
import {appImages} from '../assets/utilities';
import Edit from '../assets/svg/Edit.svg';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Premium from '../assets/svg/Premium.svg';
import ChatProfile from '../assets/svg/ChatProfile.svg';
import HeartProfile from '../assets/svg/HeartProfile.svg';
import LockProfile from '../assets/svg/LockProfile.svg';
import InviteProfile from '../assets/svg/InviteProfile.svg';
import PrivacyPolicyProfile from '../assets/svg/PrivacyPolicyProfile.svg';
import TermsAndConditionProfile from '../assets/svg/TermsAndConditionProfile.svg';
import DeleteAccountProfile from '../assets/svg/DeleteAccountProfile.svg';

import LogOut from '../assets/svg/LogOut.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  brown,
  greyBold,
  greyExtra,
  orange,
  textBlack,
  textGrey,
  white,
} from '../assets/Colors';
import BasicPlanSubscription from './BasicPlanSubscription';
import PremiumPlanSubscription from './PremiumPlanSubscription';
import ProPlanSubscription from './ProPlanSubscription';

export default function Subscription({navigation}) {
  const refSwiper = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  {
    console.log('On Index Change', activeIndex);
  }

  const [onBoardingData, setOnBoardingData] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  const onIndexChanged = ({index}) => {
    // refSwiper.current.onChangeIndex(index);
    console.log('index', index);
    setActiveIndex(index);
  };

  const openTelegramDirectMessage = () => {
    // Replace 'username' with the actual username or user ID of the person you want to message
    const username = 'Testing';
    const userId = '123456789'; // Replace with the actual numeric user ID
    
    // Form the deep link URL for the Telegram direct message
    const telegramDeepLink = `https://t.me/+NhLMs9CsaA03Njky`;
    //const telegramDeepLink = `https://t.me/user?id=${userId}`;
    //https://t.me/${username}
  
    // Try to open the Telegram deep link
    Linking.openURL(telegramDeepLink)
      .catch((err) => console.error('An error occurred: ', err));
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          onPress={() => navigation.goBack()}
          showText={true}
          text={'Go Premium'}
        />
      </View>

      <SwiperFlatList
        ref={refSwiper}
        //autoplay
        //autoplayDelay={2}
        //autoplayLoop
        index={activeIndex}
        showPagination
        //disableGesture
        data={onBoardingData}
        renderItem={({item, index}) => {
          return (
            <>
              {index == 0 ? (
                <BasicPlanSubscription />
              ) : index == 1 ? (
                <PremiumPlanSubscription />
              ) : (
                <ProPlanSubscription />
              )}
            </>
          );
        }}
        paginationStyle={styles.paginationStyle}
        paginationStyleItemActive={styles.paginationStyleItemActive}
        paginationStyleItemInactive={styles.paginationStyleItemInactive}
        onIndexChanged={newIndex => setActiveIndex(newIndex)}
        //onChangeIndex={onIndexChanged}
      />

      <TouchableOpacity
      onPress={()=> openTelegramDirectMessage()}
        style={{
          flexDirection: 'row',
          marginBottom: wp(5),
          marginHorizontal: wp(8),
          marginTop: hp(5),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: orange,
          borderRadius: wp(5),
          height: hp(6),
        }}>
        <Text
          style={{
            color: white,
            fontWeight: 'bold',
            marginLeft: wp(5),
            fontSize: hp(2.1),
          }}>
          Buy Subscription
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  paginationStyle: {
    marginBottom: hp(14),
  },
  paginationStyleItemActive: {
    width: wp(5),
    height: wp(2.1),
    borderRadius: wp(2.1) / 2,
    backgroundColor: brown,
    margin: 0,
    marginHorizontal: 2,
  },
  paginationStyleItemInactive: {
    width: wp(2.1),
    height: wp(2.1),
    borderRadius: wp(2.1) / 2,
    backgroundColor: greyExtra,
    opacity: 0.3,
    marginHorizontal: 2,
  },
});
