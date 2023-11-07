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

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../Custom/CustomButton';
import CustomSnackbar from '../Custom/CustomSnackBar';

export default function EditProfile({navigation}) {
  const [openModel, setOpenModel] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [userName, setUserName] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const ref_RBSheet = useRef(null);
  const ref_RBSheetCamera = useRef(null);

  const [isActive, setIsActive ] = useState(false);
  const [isActiveEmail, setIsActiveEmail ] = useState(false);

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
      navigation.goBack()
    }, 3000);
  };


  const onFocus=()=>{
    setIsActive(true)
  }

  const onBlur=()=>{
    setIsActive(false)
  }



  const TakeImageFromCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 500,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };
  const TakeImageFromGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 500,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  const takePhotoFromCamera = async () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        console.log('response', imageUri);
      }
      ref_RBSheetCamera.current.close();
    });
  };

  const choosePhotoFromLibrary = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }

      console.log('response', imageUri);

      ref_RBSheetCamera.current.close();
    });
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          onPress={() => navigation.goBack()}
          showText={true}
          text={'Edit Profile'}
        />
      </View>

      <View
        style={{
          paddingHorizontal: wp(8),
          paddingTop: hp(1),
        }}>
        <View style={{paddingTop: hp(3)}}>
          <View style={{alignItems: 'center', marginTop: hp(3)}}>
            <TouchableOpacity
              onPress={() => ref_RBSheetCamera.current.open()}
              style={styles.circleBox}>
              {imageUri == null ? (
                <Users width={30} height={30} />
              ) : (
                <Image
                  style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    borderRadius: wp(25) / 2, // Half of the width (25/2)
                    resizeMode: 'contain',
                  }}
                  source={{uri: imageUri}}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ref_RBSheetCamera.current.open()}
              style={{
                height: hp(4.5),
                marginTop: hp(2),
                borderRadius: wp(8),
                width: wp(30),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: orange,
              }}>
              <Text
                style={{fontSize: hp(1.7), fontWeight: 'bold', color: white}}>
                Change Image
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: wp(1),
            height: hp(12),
            marginTop: hp(8),
          }}>
          <Text style={{fontSize: hp(2.1), fontWeight: 'bold', color: isActive?orange:textBlack}}>
            Full Name
          </Text>

          <View  style={{borderWidth:1, marginTop:hp(1), height:hp(7), borderRadius:wp(3), borderColor:isActive? orange:'#00000033'}}>
           
           <TextInput onFocus={()=>onFocus()} onBlur={()=>onBlur()} placeholder='Andrew Ansely' style={{ flex:1}}/>

          </View>
        </View>


        <View
          style={{
            marginHorizontal: wp(1),
            height: hp(12),
            marginTop: hp(1),
          }}>
          <Text style={{fontSize: hp(2.1), fontWeight: 'bold', color: textBlack}}>
           Email Address
          </Text>

          <View style={{borderWidth:1, marginTop:hp(1), height:hp(7), borderRadius:wp(3), borderColor:'#00000033'}}>
           
           <TextInput editable={false}  placeholder='Andrew_Ansely@gmail.com' style={{ flex:1}}/>

          </View>
        </View>

        <Text style={{fontSize: hp(2.1), marginLeft:wp(1.8), marginTop:hp(0.1), fontWeight: '400', color: red}}>
           You can't update your email address
          </Text>

          <TouchableOpacity onPress={()=>handleUpdatePassword()} style={{marginTop:hp(10)}}>
           <CustomButton title={'Edit'} />
          </TouchableOpacity>
      </View>

      <RBSheet
        ref={ref_RBSheetCamera}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
          container: {
            borderTopLeftRadius: wp(10),
            borderTopRightRadius: wp(10),
            height: hp(25),
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: hp(5),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => ref_RBSheetCamera.current.close()}>
            <Ionicons
              name="close"
              size={25}
              color={'#303030'}
              onPress={() => ref_RBSheetCamera.current.close()}
            />
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', marginTop: hp(3)}}>
          <TouchableOpacity
            onPress={() => takePhotoFromCamera()}
            style={styles.modaltextview}>
            <Camera width={25} height={25} />
            <Text style={styles.optiontext}>Take a Photo</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#DCDCDC',
              borderBottomWidth: 1,
              width: wp(85),
              alignSelf: 'center',
              marginBottom: hp(2),
              marginTop: hp(2),
            }}></View>
          <TouchableOpacity
            onPress={() => choosePhotoFromLibrary()}
            style={styles.modaltextview}>
            <Gallery width={25} height={25} />
            <Text style={styles.optiontext}>Upload from Gallery</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Profile Edited Successfully'}
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

  remember: {
    color: '#798494',
  },

  box: {
    width: 59,
    height: 59,
    borderRadius: 13,
    borderWidth: 0.6,
    borderColor: '#CED6E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMail: {
    marginTop: hp(2),
    color: '#121420',
  },
  circleBox: {
    width: wp(25),
    height: wp(25),
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#00000020',
    borderRadius: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modaltextview: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(90),
    borderRadius: 25,
    backgroundColor: 'white',
    paddingHorizontal: wp(15),
  },
  optiontext: {
    fontSize: hp(2.1),
    color: textBlack,
    marginLeft: hp(4),
  },
  maintext: {
    fontSize: hp(2),
    color: '#303030',
  },
});
