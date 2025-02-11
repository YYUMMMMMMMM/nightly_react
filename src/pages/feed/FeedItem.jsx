import {Box, HStack, Image, Text} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import Profile from "../profile/Profile";
import FeedDetail from "./FeedDetail"
import { useState } from "react";

const FeedItem = ({ image, title }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const profile = {
    image: "/logo.png",
    nickname: "닉네임",
  };

  return (
      <>
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

          <HStack mt={2} mb={2}>
            <FaRegHeart size={24} />
            <FiEdit2 size={24} onClick={handleEditClick} cursor="pointer" />
          </HStack>

          <HStack>
            <Text fontWeight="bold">{profile.nickname}</Text>
            <Text>{title}</Text>
          </HStack>
        </Box>

        {/* FeedDetail 모달 */}
        <FeedDetail isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
  )
}

export default FeedItem
