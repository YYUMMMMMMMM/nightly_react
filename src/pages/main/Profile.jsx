import { Box, Text } from '@chakra-ui/react'
import MyFeedList from "../feed/MyFeedList"
import ProfileCard from "../profile/ProfileCard"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import axios from "utils/axios";
import {useParams} from "react-router-dom";

const Profile = () => {
  const [email, setEmail] = useState(useSelector(state => state.auth.email));

  const userEmail = useParams().email;

  console.log(userEmail);

  const [myProfile, setMyProfile] = useState(true);

  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (email !== userEmail) {
      setEmail(userEmail);
      setMyProfile(false);
    } else {
      setMyProfile(true);
    }

    axios.get(`/api/main/profile/${email}`)
        .then((response) => response.data)
        .then((data) => setUser(data))
        .catch((error) => setErrorMessage(error.message));
  },[email, userEmail]);


  const feeds = [
    {
      image: "/logo.png",
      title: "오늘은 너무 바쁜 하루였어요!",
    },
    {
      image: "/logo.png",
      title: "좋은 일들이 많았던 하루 😊",
    },
    {
      image: "/logo.png",
      title: "좋은 일들이 많았던 하루 😊",
    },
    {
      image: "/logo.png",
      title: "좋은 일들이 많았던 하루 😊",
    },
    {
      image: "/logo.png",
      title: "좋은 일들이 많았던 하루 😊",
    },
    {
      image: "/logo.png",
      title: "좋은 일들이 많았던 하루 😊",
    },
  ];


  return (
      <Box ml="270px" mt={4} p={4}>
        <Text fontSize="3xl" fontWeight="bold" color="#003366">PROFILE</Text>
        <ProfileCard profile={user} myProfile={myProfile} />
        <Box width="100%" borderBottom="1px solid gray" my={4} />
        <MyFeedList feeds={feeds} />
      </Box>
  )
}

export default Profile