import { Box, Text } from '@chakra-ui/react'
import MyFeedList from "../feed/MyFeedList"
import ProfileCard from "../profile/ProfileCard"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import axios from "utils/axios";
import {useNavigate, useParams} from "react-router-dom";

const Profile = () => {
  const authEmail = useSelector(state => state.auth.email);
  const [email, setEmail] = useState(authEmail);

  const userEmail = useParams().email;

  console.log(userEmail);
  const navigate = useNavigate();
  if (!userEmail) navigate("/");

  const [myProfile, setMyProfile] = useState(true);

  const [user, setUser] = useState({});
  const refresh = useSelector(state => state.render.refresh); // 상태 변경 트리거
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
      if (authEmail !== userEmail) {
        console.log("타 계정 프로필");
        // setEmail(userEmail);
        setMyProfile(false);
      } else {
        console.log("마이 프로필");
        setMyProfile(true);
      }
        setEmail(userEmail);

      // axios 요청
      axios.get(`/api/main/profile/${userEmail}`)
          .then((response) => response.data)
          .then((data) => setUser(data))
          .catch((error) => setErrorMessage(error.message));

  }, [userEmail, refresh]); // userEmail이 변경될 때마다 실행



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

        {/* 프로필 정보 카드 */}
        <ProfileCard profile={user} myProfile={myProfile} />

        {/* 구분선 */}
        <Box width="100%" borderBottom="1px solid gray" my={4} />

        {/* 피드 목록 */}
        <MyFeedList feeds={feeds} />
      </Box>
  )
}

export default Profile