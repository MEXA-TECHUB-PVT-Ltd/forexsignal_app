import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';
import IonIcons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import Google from '../assets/svg/Google.svg';
import FaceBook from '../assets/svg/FaceBook.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  borderLineGrey,
  green,
  grey,
  iconGrey,
  lightGrey,
  orange,
  red,
  textBlack,
  white,
} from '../assets/Colors';
import Headers from '../Custom/Headers';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';

export default function SignIn({navigation}) {
  return (
    <ImageBackground
      source={appImages.backgroundImgAuth}
      style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />
      <ScrollView style={{flexGrow: 1}}>
        <View style={{marginTop: hp(8), marginHorizontal: wp(3)}}>
          <Headers showBackIcon={true} onPress={() => navigation.goBack()} />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{resizeMode: 'contain', width: wp(50)}}
            source={appImages.logo}
          />
        </View>

        <Text
          style={{
            fontSize: hp(2.5),
            marginTop: hp(3),
            marginLeft: wp(10),
            fontWeight: '500',
            color: textBlack,
          }}>
          Sign In
        </Text>

        <View style={{marginHorizontal:wp(8)}}>

      <CPaperInput
        placeholder="abc @ gmail.com"
        left={true}
        leftName="Mail"
      />
      </View>
      <View style={{marginHorizontal:wp(8)}}>

      <CPaperInput
          left={true}
          right={true}
          placeholder={'Your Password'}
          password={true}
          leftName="Lock"
        />
      </View>
        <View
          style={{
            height: hp(5),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: hp(2),
            marginHorizontal: wp(8),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text
              style={{
                fontSize: hp(2),
                fontWeight: 'bold',
                color: orange,
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            marginTop: hp(3),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={()=>navigation.navigate("BottomTabNavigation")}>
            <CustomButton title={'Sign In'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: hp(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: wp(8),
          }}>
          <View
            style={{
              height: hp(0.1),
              width: wp(25),
              backgroundColor: '#3333332B',
            }}></View>

          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '500',
              color: textBlack,
            }}>
            or continue with
          </Text>

          <View
            style={{
              height: hp(0.1),
              width: wp(25),
              backgroundColor: '#3333332B',
            }}></View>
        </View>

        <View
          style={{
            height: hp(8),
            marginTop: hp(3),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: wp(8),
          }}>
          <TouchableOpacity
            style={{
              height: hp(6),
              paddingHorizontal: wp(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderColor: orange,
              borderWidth: 1,
              borderRadius: wp(8),
              width: wp(39),
            }}>
            <Google />
            <Text
              style={{
                fontSize: hp(2.1),
                fontWeight: '400',
                color: textBlack,
              }}>
              Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: hp(6),
              paddingHorizontal: wp(3),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderColor: orange,
              borderWidth: 1,
              borderRadius: wp(8),
              width: wp(39),
            }}>
            <FaceBook />
            <Text
              style={{
                fontSize: hp(2.1),
                fontWeight: '400',
                color: textBlack,
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(5),
            height: hp(8),
            marginHorizontal: wp(10.9),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '300',
              color: textBlack,
            }}>
            Don’t have an account?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                color: textBlack,
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
