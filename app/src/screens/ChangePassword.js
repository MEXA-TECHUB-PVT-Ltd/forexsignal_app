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
  textGrey,
  white,
} from '../assets/Colors';
import Headers from '../Custom/Headers';
import CPaperInput from '../Custom/CPaperInput';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function ChangePassword({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      navigation.goBack();
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          showText={true}
          onPress={() => navigation.goBack()}
          text={'Change Password'}
        />
      </View>

      <View style={{marginHorizontal: wp(8), marginTop: hp(3)}}>
        <CPaperInput
          left={true}
          right={true}
          placeholder={'Old Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View style={{marginHorizontal: wp(8), marginTop: hp(1)}}>
        <CPaperInput
          left={true}
          right={true}
          placeholder={'New Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View style={{marginHorizontal: wp(8), marginTop: hp(1)}}>
        <CPaperInput
          left={true}
          right={true}
          placeholder={'Confirm Password'}
          password={true}
          leftName="Lock"
        />
      </View>

      <View
        style={{flex: 1, paddingBottom: hp(10), justifyContent: 'flex-end'}}>
        <TouchableOpacity
          onPress={() => handleUpdatePassword()}
          style={{alignSelf: 'center'}}>
          <CustomButton title={'Change'} />
        </TouchableOpacity>
      </View>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Password Changed Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
