import { Box, Text } from '@chakra-ui/react'
import FeedList from "../feed/FeedList"

const Follow = () => {
  // 예시 데이터
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
        <Text fontSize="3xl" fontWeight="bold" color="#003366">FOLLOW</Text>
        <FeedList feeds={feeds} />
      </Box>
  )
}

export default Follow