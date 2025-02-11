import { Box, Text } from '@chakra-ui/react'
import FeedList from "../feed/FeedList"

const Home = () => {
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
      <Box ml="270px" mt={4} p={4}> {/* 사이드바 공간을 고려한 왼쪽 마진 및 상단 마진 */}
        <Text fontSize="3xl" fontWeight="bold" color="#003366">HOME</Text>
        <FeedList feeds={feeds} />
      </Box>
  )
}

export default Home