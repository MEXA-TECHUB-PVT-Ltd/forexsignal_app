import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async () => {
    setLoading(true);

    const apiUrl = 'https://forex-be.mtechub.com/user/usersignup';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password:password,
          signup_type: 'email',
          device_id: '576765876',
          token: 'token',
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.msg);

      console.log('Email:', email);
      setLoading(false)

      if (data.msg === 'User signed up successfully') {
        console.log("Data =email", data.data.email)
        console.log("Data =id", data.data.id)

        setLoading(false);

        AsyncStorage.setItem('email', data.data.email.toString(), () => {
          console.log('user email saved successfully');
        });

        AsyncStorage.setItem('userId', data.data.id.toString(), () => {
          console.log('user id saved successfully of signup');
        });
        navigation.navigate('ProfileImage');
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

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
          Create Account
        </Text>

        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            onChangeText={text => setEmail(text)}
            placeholder="abc @ gmail.com"
            left={true}
            leftName="Mail"
          />
        </View>
        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            left={true}
            right={true}
            onChangeText={text => setPassword(text)}
            placeholder={'Your Password'}
            password={true}
            leftName="Lock"
          />
        </View>
        <View style={{marginHorizontal: wp(8)}}>
          <CPaperInput
            left={true}
            right={true}
            onChangeText={text => setConfirmPassword(text)}
            placeholder={'Confirm Password'}
            password={true}
            leftName="Lock"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: hp(3),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => signUp()}>
            <CustomButton title={'Create'} />
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
              paddingHorizontal: wp(3),
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
            marginHorizontal: wp(18),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: '300',
              color: textBlack,
            }}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                color: textBlack,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {loading && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#FACA4E" />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
