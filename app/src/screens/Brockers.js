import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../assets/svg/Search.svg';
import Notification from '../assets/svg/Notification.svg';

import Copy from '../assets/svg/Copy.svg';
import Buy from '../assets/svg/Buy.svg';
import Sell from '../assets/svg/Sell.svg';
import SignInBtn from '../assets/svg/SignIn';
import CreateBtn from '../assets/svg/CreateAccount';
import Cancel from '../assets/svg/Cancel';

import Chat from '../assets/svg/Chat.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import {
  green,
  grey,
  lightGrey,
  orange,
  red,
  textBlack,
  white,
} from '../assets/Colors';
import CustomSnackbar from '../Custom/CustomSnackBar';
import Headers from '../Custom/Headers';

import RBSheet from 'react-native-raw-bottom-sheet';


export default function Brockers({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const ref_RBSheet = useRef(null);
  


  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePassword = async () => {

     ref_RBSheet.current.close();
     navigation.navigate("SignIn")
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
   /*  setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 3000); */
  };

  const handleUpdatePasswordSignUp = async () => {

    ref_RBSheet.current.close();
    navigation.navigate("SignUp")
   // Perform the password update logic here
   // For example, you can make an API request to update the password

   // Assuming the update was successful
  /*  setSnackbarVisible(true);

   // Automatically hide the Snackbar after 3 seconds
   setTimeout(() => {
     setSnackbarVisible(false);
   }, 3000); */
 };


  const data = [
    {
      id: 1,
      name: 'John Doe',
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Buy',
      showAlert:true

    },
    {
      id: 2,
      name: 'Olivia Wiston',
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert:false

    },
    {
      id: 3,
      name: 'Emily Johnson',
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert:true

    },
    {
      id: 4,
      name: 'Emily Johnson',
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Buy',
      showAlert:false

    },
    {
      id: 5,
      name: 'David Smith',
      price: '$113.22',
      profit: '0.59038',
      loss: '0.59038',
      date: '27-oct-2023, 08:20 AM',
      status: 'Sell',
      showAlert:true

    },
  ];

  const renderItems = item => {
    return (
      <View
        style={{
          marginTop: hp(3),
          justifyContent: 'space-around',
          borderWidth: 1,
          paddingHorizontal: wp(3),
          marginHorizontal: wp(8),
          borderRadius: wp(5),
          height: hp(15),
          borderColor: '#00000017',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(3),
            height: hp(5),
          }}>
          <TouchableOpacity style={styles.circleBox}>
            <Image
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                //borderRadius: wp(25) / 2, // Half of the width (25/2)
                resizeMode: 'contain',
              }}
              source={appImages.profileImg}
            />
          </TouchableOpacity>

          <View style={{flex: 1, marginLeft: wp(3)}}>
            <Text
              style={{fontSize: hp(1.8), fontWeight: 'bold', color: textBlack}}>
              {item.name}
            </Text>
          </View>

          <TouchableOpacity onPress={()=>item.showAlert===true?ref_RBSheet.current.open():navigation.navigate("Chat")}>
            <Chat />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(3),
            borderTopColor: '#00000017',
            borderTopWidth: 0.3,
            height: hp(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(3),
              width: wp(23),
            }}>
            <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: grey}}>
              Profit
            </Text>

            <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: green}}>
              {item.profit}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: hp(3),
              width: wp(28),
            }}>
            <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: grey}}>
              Stop loss
            </Text>

            <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: red}}>
              {item.loss}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={{marginTop: hp(5)}}>
        <Headers showText={true} text={'Brokers'} />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          style={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => renderItems(item)}
        />
      </View>

      <RBSheet
        ref={ref_RBSheet}
        height={250}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            // justifyContent: 'center',
            // alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingTop: 0,
            padding: 20,
            zIndex: 999,
          },
          draggableIcon: {
            backgroundColor: 'transparent',
          },
        }}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: hp(5),
            }}>
            <Text
              style={{
                fontSize: hp(2.5),
                fontWeight: 'bold',
                color: orange,
              }}>
              Create Account
            </Text>
          </View>
          <Text
            style={{
              fontSize: hp(2.3),
              marginTop: hp(1),
              fontWeight: '300',
              textAlign: 'center',
              color: textBlack,
            }}>
            Please create an account to add this trade to your Wishlist
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: hp(8),
            justifyContent: 'space-between',
            marginHorizontal: wp(5),
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={()=>handleUpdatePassword()}>
          <SignInBtn width={130} height={130} />

          </TouchableOpacity>

          <TouchableOpacity onPress={()=>handleUpdatePasswordSignUp()}>

          <CreateBtn width={130} height={130} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => ref_RBSheet.current.close()}
          style={{marginHorizontal: wp(5)}}>
          <Cancel width={290} />
        </TouchableOpacity>
      </RBSheet>



      <CustomSnackbar
        message={'Success'}
        messageDescription={'SIgnal Copied Successfully'}
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
  absoluteContainer: {
    position: 'absolute',
    top: 80,
    justifyContent: 'center',
    width: '100%',
    height: hp(8),
    zIndex: 1, // Set a higher zIndex for the absolute view to appear on top
  },
  circleBox: {
    width: wp(12),
    height: wp(12),
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#0000001F',
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
