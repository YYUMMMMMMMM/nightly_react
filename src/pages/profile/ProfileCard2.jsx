import {Box, Button, HStack, Image, Text, VStack} from "@chakra-ui/react";

const ProfileCard2 = () => {

  const profile = {
    image: "/logo.png",  // 프로필 이미지 경로
    nickname: "닉네임",  // 작성자 닉네임
    feed: "00",
    follower: "00",
    follow: "00",
    content: "자기소개 내용입니다. 여기에는 자신에 대한 간단한 소개가 들어갑니다."
  };

  return (
      <Box w="1200px" bg="white" p={6} mt={4}>
        <HStack spacing={6}>
          <Image
              src={profile.image}
              alt="프로필 이미지"
              borderRadius="full"
              objectFit="cover"
              h="300px"
              w="300px"
          />
          <VStack align="start" spacing={4} ml={4}>
            <HStack spacing={6}>
            <Text fontWeight="bold" fontSize="xl">{profile.nickname}</Text>
            <Button ml={4} variant="surface" bg="#003366" color="white">팔로우</Button>
            </HStack>
            <HStack spacing={6}>
              <Text fontSize="md"> 게시물 {profile.feed} |</Text>
              <Text fontSize="md">팔로워 {profile.follower} |</Text>
              <Text fontSize="md">팔로잉 {profile.follow}</Text>
            </HStack>
            <Text mt={4} fontSize="sm" color="gray.600">{profile.content}</Text>
          </VStack>
        </HStack>
      </Box>
  )
}

export default ProfileCard2;