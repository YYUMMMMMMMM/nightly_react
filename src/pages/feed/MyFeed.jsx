import {Box, Button, HStack, Image, Text} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import Profile from "../profile/Profile";
import { useState } from "react";
import FeedUpdate from "./FeedUpdate"
import FeedDelete from "./FeedDelete"

const MyFeed = ({ image, title }) => {

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleUpdateModalOpen = () => setIsUpdateModalOpen(true); // 수정 모달 열기
  const handleUpdateModalClose = () => setIsUpdateModalOpen(false); // 수정 모달 닫기

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true); // 수정 모달 열기
  const handleDeleteModalClose = () => setIsDeleteModalOpen(false); // 수정 모달 닫기

  const profile = {
    image: "/logo.png",
    nickname: "닉네임",
  };

  return (
      <Box w="400px" bg="white" p={4} mt={4}>
        <HStack justify="space-between" mb={4}>
          <Profile image={profile.image} nickname={profile.nickname} />
          <Text color="gray.500" alignItems="center">2025.04.03</Text>
        </HStack>

        <Image src={image} alt="피드 이미지"
            borderRadius="md"
            objectFit="cover"
            w="100%"
            h="350px"
        />
        <HStack justify="space-between">
        <HStack mt={2} mb={2}>
          <FaRegHeart size={24} />
          <FiEdit2 size={24} />
        </HStack>
          <HStack mt={2} mb={2}>
            <Button variant="ghost" size="s" onClick={handleUpdateModalOpen}>수정</Button>|
            <Button variant="ghost" size="s" onClick={handleDeleteModalOpen}>삭제</Button>
          </HStack>
        </HStack>
        <HStack>
          <Text fontWeight="bold">{profile.nickname}</Text>
          <Text>{title}</Text>
        </HStack>
        <FeedUpdate isOpen={isUpdateModalOpen} onClose={handleUpdateModalClose} />
        <FeedDelete isOpen={isDeleteModalOpen} onClose={handleDeleteModalClose} />
      </Box>
  )
}

export default MyFeed
