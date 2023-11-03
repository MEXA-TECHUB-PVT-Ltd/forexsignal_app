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
import React,{useState} from 'react';
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


export default function ResetPassword({navigation}) {

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
         navigation.navigate("SignIn")
       }, 3000);
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

      <ScrollView style={{flexGrow:1}}>

     

      <View style={{marginTop: hp(8), marginHorizontal: wp(3)}}>
        <Headers showBackIcon={true} onPress={() => navigation.goBack()} />
      </View>

      <Text
        style={{
          fontSize: hp(2.8),
          marginTop: hp(3),
          marginLeft: wp(10),
          fontWeight: 'bold',
          color: textBlack,
        }}>
        Reset Password
      </Text>

      <Text
        style={{
          fontSize: hp(2.1),
          marginTop: hp(3),
          marginLeft: wp(10),
          lineHeight: hp(3),
          fontWeight: '300',
          marginRight: wp(5),
          color: textGrey,
        }}>
        Password must be at least 8 characters long and include at least one
        uppercase letter, one number, and one special character.
      </Text>

      <View
        style={{
          flex: 1,
          marginTop:hp(8),
          marginHorizontal: wp(10),
        }}>
        <CPaperInput
          left={true}
          right={true}
          placeholder={'Your Password'}
          password={true}
          leftName="Lock"
        />

        <CPaperInput
          left={true}
          right={true}
          placeholder={'Confirm Password'}
          password={true}
          leftName="Lock"
        />
       
      </View>

      <View style={{flex:1, marginHorizontal: wp(3)}}>
      <TouchableOpacity onPress={()=>handleUpdatePassword()} style={{alignItems:'center', marginTop:hp(25)}}>
      <CustomButton title={'Reset'} />

      </TouchableOpacity>
      </View>
      </ScrollView>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Password Reset  Successfully'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
