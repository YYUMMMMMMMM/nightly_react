import {Box, Button, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { useState } from "react";
import ProfileUpdate from "./ProfileUpdate"

const ProfileCard = ({profile, myProfile}) => {

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleOpenModal = () => setIsModalOpen(true); // 모달 열기
  const handleCloseModal = () => setIsModalOpen(false); // 모달 닫기

  const handleFollow = () => {

  };

  return (
      <Box w="1200px" bg="white" p={6} mt={4}>
        <HStack spacing={6}>
          <Image
              src={profile.profileImage}
              alt="프로필 이미지"
              borderRadius="full"
              objectFit="cover"
              h="300px"
              w="300px"
          />
          <VStack align="start" spacing={4} ml={4}>
            <HStack spacing={6}>
            <Text fontWeight="bold" fontSize="xl">{profile.nickname}</Text>

              {myProfile ?
                <Button ml={4} variant="surface" onClick={handleOpenModal}>프로필 수정</Button> :
                <Button ml={4} variant="surface" onClick={handleFollow} backgroundColor="#003366" color="white">팔로우</Button>
              }

            </HStack>
            <HStack spacing={6}>
              <Text fontSize="md"> 게시물 {profile.feed} |</Text>
              <Text fontSize="md">팔로워 {profile.follower} |</Text>
              <Text fontSize="md">팔로잉 {profile.follow}</Text>
            </HStack>
            <Text mt={4} fontSize="sm" color="gray.600">{profile.content}</Text>
          </VStack>
        </HStack>
        <ProfileUpdate isOpen={isModalOpen} onClose={handleCloseModal} />
      </Box>
  )
}

export default ProfileCard;