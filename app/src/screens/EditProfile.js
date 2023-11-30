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
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [loading, setLoading] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const [url, setUrl] = useState('');

  const [userId, setUserId] = useState('');

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [imageUri, setImageUri] = useState(null);

  const ref_RBSheet = useRef(null);
  const ref_RBSheetCamera = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const [userData, setUserData] = useState(null);

  const [isActiveEmail, setIsActiveEmail] = useState(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    // Make the API request and update the 'data' state
    console.log('Came to use effect');
    fetchVideos();
  }, [userId]);

  const fetchVideos = async () => {
    // Simulate loading
    setLoading(true);

    await getUserID();
    // Fetch data one by one
    // Once all data is fetched, set loading to false

    await fetchByUserId();
    setLoading(false);
  };

  const getUserID = async () => {
    console.log("Id's");
    try {
      const result = await AsyncStorage.getItem('userId');
      if (result !== null) {
        setUserId(result);
        console.log('user id retrieved:', result);
      }
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving user ID:', error);
    }
  };

  const fetchByUserId = async () => {

    if(userId!==''){

      console.log("User Id of signals", userId)
    }else{
      console.log("Empty signals", userId)

    }
    try {
      const apiUrl = `https://forexs-be.mtechub.com/user/getuser/userbyID/${userId}`;
  
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('User Info', data.data);
      setUserData(data.data);
      setFullName(data.data.name)
      setUserEmail(data.data.email)
      setUrl(data.data.image)

      // Handle the response data as needed
      //console.log('Response data:', data);
  
      // You can perform additional actions based on the response data
    } catch (error) {
      // Handle errors
      console.error('Error during API request:', error);
    }
  };

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
      navigation.navigate("Profile");
    }, 3000);
  };

  const onFocus = () => {
    setIsActive(true);
  };

  const onBlur = () => {
    setIsActive(false);
  };

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
        setImageInfo(response.assets[0]);
      }
      ref_RBSheetCamera.current.close();
    });
  };

  const choosePhotoFromLibrary = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
        setImageInfo(response.assets[0]);
      }

      console.log('response', imageUri);

      ref_RBSheetCamera.current.close();
    });
  };

  const upload = async () => {
    if (imageInfo !== null && fullName !== '') {
      console.log("In Upload Image Info")
      handleUploadImage();
      //uploadVideo();
    } else if(url!==null && fullName!=='') {
      console.log("In Upload Image URL")

         createProfile(url)
    }else{
      setModalVisible(true);
    }
  };

  const handleUploadImage = data => {
    setLoading(true);
    const uri = imageInfo.uri;
    const type = imageInfo.type;
    const name = imageInfo.fileName;
    const sourceImage = {uri, type, name};
    console.log('Source Image', sourceImage);
    const dataImage = new FormData();
    dataImage.append('file', sourceImage);
    dataImage.append('upload_preset', 'e6zfilan'); // Use your Cloudinary upload preset
    dataImage.append('cloud_name', 'dxfdrtxi3'); // Use your Cloudinary cloud name

    fetch('https://api.cloudinary.com/v1_1/dxfdrtxi3/image/upload', {
      method: 'POST',
      body: dataImage,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => res.json())
      .then(data => {
        setImageUrl(data.url); // Store the Cloudinary video URL in your state
        //uploadVideo(data.url)
        //uploadXpiVideo(data.url);
        console.log('Image Url', data);
        //uploadXpiVideo(data.url,data)
        createProfile(data.url);
      })
      .catch(err => {
        setLoading(false);
        console.log('Error While Uploading Video', err);
      });
  };

  const createProfile = async data1 => {
    console.log('User Id', userId);
    console.log('Full Name', fullName);

    console.log('image', data1);

    setLoading(true);

    const apiUrl = `https://forexs-be.mtechub.com/user/updateuser/userprofile/${userId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          image: data1,
        }),
      });

      const data = await response.json();

      // Handle the response data as needed
      console.log('Response data:', data.msg);

      //console.log('Email:', email);
      setLoading(false);

      if (data.msg === 'Profile updated successfully') {
        console.log('Data =email', data);
        //console.log('Data =id', data.user.id);

        setLoading(false);

        handleUpdatePassword();
      }

      // You can perform additional actions based on the response, e.g., navigate to another screen
    } catch (error) {
      // Handle errors
      console.error('Error during sign up:', error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
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
              {url == null ? (
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
                  source={{uri: url}}
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
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: 'bold',
              color: isActive ? orange : textBlack,
            }}>
            Full Name
          </Text>

          <View
            style={{
              borderWidth: 1,
              marginTop: hp(1),
              height: hp(7),
              borderRadius: wp(3),
              borderColor: isActive ? orange : '#00000033',
            }}>
            <TextInput
              onChangeText={text => setFullName(text)}
              onFocus={() => onFocus()}
              onBlur={() => onBlur()}
              value={fullName}
              placeholder="Andrew Ansely"
              style={{flex: 1}}
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: wp(1),
            height: hp(12),
            marginTop: hp(1),
          }}>
          <Text
            style={{fontSize: hp(2.1), fontWeight: 'bold', color: textBlack}}>
            Email Address
          </Text>

          <View
            style={{
              borderWidth: 1,
              marginTop: hp(1),
              height: hp(7),
              borderRadius: wp(3),
              borderColor: '#00000033',
            }}>
            <TextInput
              editable={false}
              placeholder={userEmail}
              style={{flex: 1}}
            />
          </View>
        </View>

        <Text
          style={{
            fontSize: hp(2.1),
            marginLeft: wp(1.8),
            marginTop: hp(0.1),
            fontWeight: '400',
            color: red,
          }}>
          You can't update your email address
        </Text>

        <TouchableOpacity onPress={() => upload()} style={{marginTop: hp(10)}}>
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
    </ScrollView>
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
