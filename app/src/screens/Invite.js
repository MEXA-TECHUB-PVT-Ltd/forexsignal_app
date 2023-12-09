import {
  StyleSheet,
  StatusBar,
  Text,
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
import Fontiso from 'react-native-vector-icons/Fontisto';

import Happiness from '../assets/svg/Happiness.svg';

import Shares from 'react-native-share';


import CopyLinkBtn from '../assets/svg/CopyLinkBtn.svg';

import ShareBtn from '../assets/svg/ShareBtn.svg';


import Send from '../assets/svg/Send.svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import Camera from '../assets/svg/Camera.svg';

import Gallery from '../assets/svg/Gallery.svg';

import LogOut from '../assets/svg/LogOut.svg';

import Users from '../assets/svg/Users.svg';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  greyBold,
  lightGrey,
  orange,
  textBlack,
  grey,
  green,
  red,
  textGrey,
  white,
  iconGrey,
} from '../assets/Colors';
import Clipboard from '@react-native-clipboard/clipboard';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';


export default function Invite({navigation}) {
    const [snackbarVisible, setSnackbarVisible] = useState(false);


 const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

 const handleUpdatePassword = async (value) => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
      copyToClipboard(value)
    }, 3000);
  };

  const shareViaWhatsApp = async () => {
    const shareOptions = {
      title: 'Share via',
      message: 'Hey! Check out this cool app!',
      url: 'https://play.google.com/store/apps/details?id=your.app.package',
      //social: Share.Social,
    };

    try {
      await Shares.open(shareOptions);
    } catch (error) {
      console.error('Error sharing via WhatsApp:', error.message);
    }
  };

  const copyToClipboard = (value) => {
    //const jsonString = JSON.stringify(value, null, 2); // Convert the JSON data to a formatted string
    Clipboard.setString('https://play.google.com/store/apps/details?id=your.app.package');
    navigation.goBack()

    //console.log('JSON data copied to clipboard:', jsonString);
  };


  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={{marginTop: hp(5)}}>
        <Headers showBackIcon={true} onPress={() => navigation.goBack()} />
      </View>

      <View
        style={{
          marginHorizontal: wp(8),
          justifyContent: 'center',
          alignItems: 'center',
          height: hp(39),
        }}>
        <Image
          style={{width: wp(70)}}
          resizeMode="contain"
          source={appImages.ShareMainImg}
        />
      </View>

      <Text
        style={{
          fontSize: hp(2.5),
          alignSelf: 'center',
          fontWeight: 'bold',
          color: textBlack,
        }}>
        Invite Friends!
      </Text>
      
      <View style={{marginHorizontal:wp(8)}}>

      <Text
        style={{
          fontSize: hp(2.1),
          marginTop:hp(3),
          lineHeight:hp(3),
          textAlign:'center',
          fontWeight: '300',
          color: textGrey,
        }}>
        Invite your friends to join our trading community and reap the benefits
        together. Share the love of trading and help each other succeed.
      </Text>
      </View>

      <View style={{flex:1,  paddingBottom:hp(5), marginHorizontal:wp(8), justifyContent:'flex-end'}}>
       <View style={{flexDirection:'row', height:hp(8), justifyContent:'space-evenly', alignItems:'center'}}>
        
       
       <TouchableOpacity onPress={()=>handleUpdatePassword()}>

       <CopyLinkBtn width={120} height={150}/>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>shareViaWhatsApp()}>

       <ShareBtn width={120} height={150}/>
        </TouchableOpacity>
       </View>
      </View>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Link Copied Successfully'}
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
