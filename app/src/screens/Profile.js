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
import Edit from '../assets/svg/Edit.svg';

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

import RBSheet from 'react-native-raw-bottom-sheet';

import {greyBold, orange, textBlack, textGrey, white} from '../assets/Colors';

export default function Profile({navigation}) {
  const ref_RBSheet = useRef(null);

  const ref_RBSheetLogOut = useRef(null);


  const closeDelete=()=>{
    ref_RBSheet.current.close()
    navigation.navigate('SignIn')
  }

  const closeLogout=()=>{
    ref_RBSheetLogOut.current.close()
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content" // You can set the StatusBar text color to dark or light
      />

      <View style={{marginTop: hp(5)}}>
        <Headers showText={true} text={'My Account'} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(3),
          height: hp(8),
          marginHorizontal: wp(8),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
          }}>
          <View style={styles.circleBox}>
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
          </View>

          <View style={{marginLeft: wp(3)}}>
            <Text
              style={{fontSize: hp(2.1), fontWeight: 'bold', color: textBlack}}>
              Andrew Ainsley
            </Text>

            <Text
              style={{fontSize: hp(1.7), fontWeight: '400', color: textGrey}}>
              andrew-ainsley@gmail.com
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{marginLeft: wp(5), marginRight: wp(5)}}>
          <Edit width={23} height={30} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: hp(0.1),
          marginTop: hp(3),
          marginHorizontal: wp(8),
          backgroundColor: '#5151512E',
        }}></View>

      <View
        style={{
          flex: 1,
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Subscription')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(5),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Premium width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Go Premium
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChatDesk')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <ChatProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Live Chat
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyWishList')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <HeartProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              My Wishlist
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChangePassword')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <LockProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Change Password
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Invite')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <InviteProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Invite Friends
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PrivacyPolicy')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <PrivacyPolicyProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Privacy Policy
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('TermsAndCondition')}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <TermsAndConditionProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Terms & Conditions
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => ref_RBSheet.current.open()}
          style={{
            marginHorizontal: wp(5),
            flexDirection: 'row',
            marginTop: hp(3),
            alignItems: 'center',
            paddingHorizontal: wp(3),
            justifyContent: 'space-between',
            height: hp(5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <DeleteAccountProfile width={30} height={30} />

            <Text
              style={{
                color: greyBold,
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Delete Account
            </Text>
          </View>

          <Ionicons name={'chevron-forward'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>ref_RBSheetLogOut.current.open()}
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
          <View
            style={{
              height: hp(5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: wp(27),
            }}>
            <LogOut width={20} height={20} />

            <Text
              style={{
                color: white,
                fontWeight: 'bold',
                marginLeft: wp(5),
                fontSize: hp(2.1),
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={ref_RBSheet}
        height={210}
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
              Delete Account
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
            Are you sure you want to delete your account?
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
          <TouchableOpacity
            onPress={() => ref_RBSheet.current.close()}
            style={{
              height: hp(6),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: wp(8),
              backgroundColor: '#E3B12F33',
              width: wp(35),
            }}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                textAlign: 'center',
                color: orange,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => closeDelete()}
            style={{
              height: hp(6),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: wp(8),
              backgroundColor: orange,
              width: wp(35),
            }}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                textAlign: 'center',
                color: white,
              }}>
              Yes, Delete
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>


      <RBSheet
        ref={ref_RBSheetLogOut}
        height={210}
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
              Logout
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
            Are you sure you want to logout?
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
          <TouchableOpacity
            onPress={() => ref_RBSheet.current.close()}
            style={{
              height: hp(6),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: wp(8),
              backgroundColor: '#E3B12F33',
              width: wp(35),
            }}>
            <Text
              style={{
                fontSize: hp(2.3),
                fontWeight: 'bold',
                textAlign: 'center',
                color: orange,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => closeDelete()}
            style={{
              height: hp(6),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: wp(8),
              backgroundColor: orange,
              width: wp(35),
            }}>
            <Text
              style={{
                fontSize: hp(2.1),
                fontWeight: 'bold',
                textAlign: 'center',
                color: white,
              }}>
              Yes, Logout
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  circleBox: {
    width: wp(15),
    height: wp(15),
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#0000001F',
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
