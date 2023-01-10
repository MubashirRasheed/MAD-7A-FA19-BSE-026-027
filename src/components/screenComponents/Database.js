// import firebase from 'react-native-firebase';
// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';

// const Database = () => {

//   const [imageUrl1, setImageUrl1] = useState(null);

//   useEffect(() => {
//     // Fetch the image from Firebase Storage
//     const storage = firebase.storage();
//     const storageRef = storage.ref();
//     const imageRef = storageRef.child('gs://mad-semester-project-c232f.appspot.com/images/post1.jpg');

//     imageRef.getDownloadURL()
//       .then(url => setImageUrl1(url))
//       .catch(error => console.error(error));
//   }, []);


fetch(`${FIREBASE_API_ENDPOINT}/friendsProfileData  .json`, {
  method: 'POST',
  body: JSON.stringify(videoData.map()});

try {
  await AsyncStorage.setItem('@store_username', username)
  await AsyncStorage.setItem('@store_email', email)
  await AsyncStorage.setItem('@store_pass', password)


} catch (e) {
  alert("Registration failed")
}

alert("You are Signed Up!")


// }
// Videos Data

export const videoData = [
  {
    video: require('../../storage/videos/video1.mp4'),
    postProfile: require('../../storage/images/post1.jpg'),
    title: 'Mubashir Rasheed',
    description: 'Astounishing Nature',
    likes: '245k',
    isLike: false,
  },
  {
    video: require('../../storage/videos/video2.mp4'),
    postProfile: require('../../storage/images/post2.jpg'),
    title: 'Hashir',
    description: "It's a tea time",
    likes: '656k',
    isLike: false,
  },
  {
    video: require('../../storage/videos/video3.mp4'),
    postProfile: require('../../storage/images/post3.jpg'),
    title: 'Aown',
    description: 'Amazing',
    likes: '243k',
    isLike: false,
  },
  {
    video: require('../../storage/videos/video4.mp4'),
    postProfile: require('../../storage/images/post4.jpg'),
    title: 'Saaim',
    description: 'How cute it is !!',
    likes: '876k',
    isLike: false,
  },
];

// Friends Profile Data

export const FriendsProfileData = [
  {
    name: 'Mubashir',
    accountName: 'Mubashir',
    profileImage: require('../../storage/images/profile4.jpg'),
    posts: 56,
    followers: 6542,
    following: 43,
    follow: false,
  },
  {
    name: 'Ismaeel',
    accountName: 'Ismaeel',
    profileImage: require('../../storage/images/profile5.jpg'),
    posts: 24,
    followers: 1253,
    following: 64,
  },
  {
    name: 'Hashir',
    accountName: 'Hashir',
    profileImage: require('../../storage/images/profile2.jpg'),
    posts: 21,
    followers: 7886,
    following: 32,
  },
  {
    name: 'aown',
    accountName: 'aown',
    profileImage: require('../../storage/images/post1.jpg'),
    posts: 123,
    followers: 64253,
    following: 32,
  },
  {
    name: 'M_Ismaeel',
    accountName: 'M_Ismaeel',
    profileImage: require('../../storage/images/post2.jpg'),
    posts: 56,
    followers: 6542,
    following: 43,
  },
  {
    name: 'K_Saaim',
    accountName: 'K_Saaim',
    profileImage: require('../../storage/images/post3.jpg'),
    posts: 452,
    followers: '564k',
    following: 31,
  },
  {
    name: 'S_Aown',
    accountName: 'S_Aown',
    profileImage: require('../../storage/images/post4.jpg'),
    posts: 543,
    followers: '435k',
    following: 22,
  },
  {
    name: 'm_Mubashir',
    accountName: 'm_Mubashir',
    profileImage: require('../../storage/images/post5.jpg'),
    posts: 234,
    followers: '763k',
    following: 332,
  },
  {
    name: 'kaneki',
    accountName: 'ken',
    profileImage: require('../../storage/images/post6.jpg'),
    posts: 111,
    followers: 11223,
    following: 1,
    follow: false,
  },
  {
    name: 'taseer',
    accountName: 'taseer',
    profileImage: require('../../storage/images/post7.jpg'),
    posts: 121,
    followers: 43213,
    following: 21,
    follow: false,
  },
  {
    name: 'Ronaldo',
    accountName: 'Ronaldo',
    profileImage: require('../../storage/images/post8.jpg'),
    posts: 432,
    followers: '987k',
    following: 24,
    follow: false,
  },
  {
    name: 'Haise',
    accountName: 'Haise',
    profileImage: require('../../storage/images/post9.jpg'),
    posts: '1.2k',
    followers: '1.2M',
    following: 12,
    follow: false,
  },
  {
    name: 'Shayan',
    accountName: 'Shayan',
    profileImage: require('../../storage/images/post10.jpg'),
    posts: 533,
    followers: 64322,
    following: 123,
    follow: false,
  },
];
