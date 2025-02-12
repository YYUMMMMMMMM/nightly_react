import { Box, Text } from '@chakra-ui/react'
import MyFeedList from "../feed/MyFeedList"
import UserProfileCard from "../profile/UserProfileCard"
import {useParams} from "react-router-dom";

/**
 * 사용자 프로필 페이지
 * @param image : 프로필 이미지 URL
 * @param nickname
 * @param feed
 * @param follower
 * @param following
 * @returns {JSX.Element}
 * @constructor
 */
const UserProfile = ({ image, nickname, feed, follower, following}) => {

  const email = useParams();

  console.log(email);

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
        <UserProfileCard />
        <Box width="100%" borderBottom="1px solid gray" my={4} />
        <MyFeedList feeds={feeds} />
      </Box>
  )
}

export default UserProfile