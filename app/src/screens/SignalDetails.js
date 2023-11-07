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
import React, {useState, useRef} from 'react';

import Copy from '../assets/svg/Copy.svg';
import ClipBoard from '../assets/svg/ClipBoard.svg';

import NewSignal from '../assets/svg/NewSignal.svg';

import NewUpdates from '../assets/svg/NewUpdates.svg';

import Buy from '../assets/svg/Buy.svg';

import NewBrokerUpdate from '../assets/svg/NewBrokerUpdate.svg';

import New from '../assets/svg/New.svg';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appImages} from '../assets/utilities';
import CustomSnackbar from '../Custom/CustomSnackBar';
import Bars from '../assets/svg/Bars.svg';
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

import SignInBtn from '../assets/svg/SignIn';
import CreateBtn from '../assets/svg/CreateAccount';
import Cancel from '../assets/svg/Cancel';

import RBSheet from 'react-native-raw-bottom-sheet';

export default function SignalDetails({navigation}) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [showHeartFilled, setShowHeartFilled] = useState(false);

  const [snackbarVisibleCopied, setSnackbarVisibleCopied] = useState(false);

  const ref_RBSheet = useRef(null);

  const dismissSnackbar = () => {
    setSnackbarVisible(true);
  };

  const handleUpdatePasswordSignIn = async () => {
    ref_RBSheet.current.close()
  
      // Perform the password update logic here
      // For example, you can make an API request to update the password
  
      // Assuming the update was successful
      //setSnackbarVisible(true);
  
      // Automatically hide the Snackbar after 3 seconds
      setTimeout(() => {
        //setSnackbarVisible(false);
       navigation.navigate("SignIn")
      }, 5);
    };

    const handleUpdatePasswordSignUp = async () => {
      ref_RBSheet.current.close()
    
        // Perform the password update logic here
        // For example, you can make an API request to update the password
    
        // Assuming the update was successful
        //setSnackbarVisible(true);
    
        // Automatically hide the Snackbar after 3 seconds
        setTimeout(() => {
          //setSnackbarVisible(false);
          navigation.navigate("SignUp")
        }, 10);
      };

  const handleUpdatePassword = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    //setSnackbarVisible(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      //setSnackbarVisible(false);
      setShowHeartFilled(!showHeartFilled);
      ref_RBSheet.current.open();
    }, 50);
  };

  const dismissSnackbarCopied = () => {
    setSnackbarVisibleCopied(true);
  };

  const handleUpdateCopied = async () => {
    // Perform the password update logic here
    // For example, you can make an API request to update the password

    // Assuming the update was successful
    setSnackbarVisibleCopied(true);

    // Automatically hide the Snackbar after 3 seconds
    setTimeout(() => {
      setSnackbarVisibleCopied(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />
      <View style={{marginTop: hp(5)}}>
        <Headers
          showBackIcon={true}
          showText={true}
          showHeart={true}
          isFavorite={showHeartFilled}
          onPressfavourite={() => handleUpdatePassword()}
          onPress={() => navigation.goBack()}
          text={'Signal Details'}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1}}>
        <View
          style={{
            marginTop: hp(3),
            justifyContent: 'space-around',
            paddingHorizontal: wp(3),
            marginHorizontal: wp(8),
            height: hp(12),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(3),
              height: hp(5),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: hp(3),
                width: wp(35),
              }}>
              <Text
                style={{
                  fontSize: hp(2.1),
                  fontWeight: '500',
                  color: textBlack,
                }}>
                NZD/USD
              </Text>
              {/* {
                item.status==='Buy'?
                <Buy width={50} height={50} />:
                <Sell width={50} height={50} />
            } */}
            </View>

            <Text style={{fontSize: hp(2.1), fontWeight: '500', color: orange}}>
              $113.22
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(3),
              height: hp(5),
            }}>
            <Text
              style={{fontSize: hp(1.7), fontWeight: '500', color: lightGrey}}>
              27-oct-2023, 08:00 AM
            </Text>
            
            <TouchableOpacity onPress={()=>handleUpdateCopied()}>

            <Copy width={60} height={80} />

            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: hp(30),
            marginTop: hp(3),
            marginHorizontal: wp(8),
          }}>

            <Bars width={300} height={230}/>
          </View>

        <Text
          style={{
            fontSize: hp(2.8),
            marginLeft: wp(8),
            marginTop: hp(5),
            fontWeight: 'bold',
            color: orange,
          }}>
          Trade Info
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(3),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Action
          </Text>

          <Buy width={65} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Status
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            Active
          </Text>
        </View>

        <View
          style={{
            height: hp(0.3),
            marginTop: hp(1),
            marginHorizontal: wp(5),
            backgroundColor: '#00000017',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Open price
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            1.67890
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Take profit 1
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            1.67890
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Take profit 2
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            1.67890
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Take profit 3
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            1.67890
          </Text>
        </View>

        <View
          style={{
            height: hp(0.3),
            marginTop: hp(1),
            marginHorizontal: wp(5),
            backgroundColor: '#00000017',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Stop loss
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            1.67890
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Profit/Loss
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            Waiting
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Trade Result
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            Waiting
          </Text>
        </View>

        <View
          style={{
            height: hp(0.3),
            marginTop: hp(1),
            marginHorizontal: wp(5),
            backgroundColor: '#00000017',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Trade Probability
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            70 %
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Time Frame
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            H - 1
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(1),
            marginHorizontal: wp(8),
            height: hp(5),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '300',
              color: textGrey,
            }}>
            Last Update
          </Text>

          <Text
            style={{
              fontSize: hp(2.1),
              fontWeight: '400',
              color: textBlack,
            }}>
            26-oct-2023
          </Text>
        </View>
      </ScrollView>

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
            <TouchableOpacity onPress={()=> handleUpdatePasswordSignIn()}>

          <SignInBtn width={130} height={130} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> handleUpdatePasswordSignUp()}>

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
        messageDescription={'Signal Added To WishList'}
        onDismiss={dismissSnackbar} // Make sure this function is defined
        visible={snackbarVisible}
      />

      <CustomSnackbar
        message={'Success'}
        messageDescription={'Signal Copied SuccessFully'}
        onDismiss={dismissSnackbarCopied} // Make sure this function is defined
        visible={snackbarVisibleCopied}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
