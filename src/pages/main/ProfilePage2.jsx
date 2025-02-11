import { Box, Text } from '@chakra-ui/react'
import MyFeedList from "../feed/MyFeedList"
import ProfileCard2 from "../profile/ProfileCard2"

const ProfilePage2 = ({ image, nicname, feed, follower, following}) => {

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
        <ProfileCard2 />
        <Box width="100%" borderBottom="1px solid gray" my={4} />
        <MyFeedList feeds={feeds} />
      </Box>
  )
}

export default ProfilePage2