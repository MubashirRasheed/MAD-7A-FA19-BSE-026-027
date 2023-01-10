import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from '../../../node_modules/react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View style={{backgroundColor:'black'}}>
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor:'black'
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor:'black'
              
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color:'white'
              }}>
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'white',
                paddingHorizontal: 5,
                opacity: 0.5,
                
                
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor:'black'}}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'white',
                paddingHorizontal: 15,
              }}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
                color:'white'
                
              }}
            />
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
          backgroundColor:'black'
        }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor:'black'
          }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: 'bold',
              color:'white'
              
            }}>
            {name}
          </Text>
        </View>
        <View style={{alignItems: 'center',backgroundColor:'black'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color:'white'}}>{post}</Text>
          <Text style={{color:'white'}}>Posts</Text>
        </View>
        <View style={{alignItems: 'center',backgroundColor:'black'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,backgroundColor:'black',color:'white'}}>{followers}</Text>
          <Text style={{color:'white'}}>Followers</Text>
        </View>
        <View style={{alignItems: 'center',backgroundColor:'black'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,color:'white'}}>{following}</Text>
          <Text style={{color:'white'}}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileButtons = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
            
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            style={{
              width: '100%',
              
            }}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                  color:'white'
                }}>
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={{width: '42%',}}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493D9',
                borderWidth: follow ? 1 : 0,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white'
              }}>
              <Text style={{color: follow ? 'black' : 'black'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '42%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color:'white'}}>Message</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Feather
              name="chevron-down"
              style={{fontSize: 20, color: 'black'}}
            />
          </View>
        </View>
      )}
    </>
  );
};
