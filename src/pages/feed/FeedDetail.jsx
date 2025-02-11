import {Box, Button, HStack, Image, Input, Portal, Text, VStack} from "@chakra-ui/react";
import Profile from "../profile/Profile"
import { FaRegHeart } from "react-icons/fa";

const FeedDetail = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  const profile = {
    image: "/logo.png",
    nickname: "닉네임",
  };

  const feed = {
    title: "title",
    content: "content",
  }

  const comments = [
    { id: 1, user: 'User1', text: '첫 댓글입니다!' },
    { id: 2, user: 'User2', text: '좋은 피드네요!' },
    { id: 3, user: 'User2', text: '좋은 피드네요!' },
    { id: 4, user: 'User2', text: '좋은 피드네요!' },
  ];

  if (!isOpen) return null;

  return (
      <Portal>
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="999999"
            onClick={onClose}
        >
          <Box
              bg="white"
              p="24px"
              borderRadius="8px"
              width="1000px"
              minHeight="600px"
              zIndex="1000000"
              position="relative"
              display="flex"
              flexDirection="column"
              onClick={(e) => e.stopPropagation()}
          >
            <Button
                onClick={onClose}
                variant="ghost"
                color="#003366"
                fontSize="30px"
                _hover={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                position="absolute"
                right="1px"
            >
              ×
            </Button>

            <Box display="flex" flex="1">
              {/* 왼쪽: 이미지 */}
              <Box
                  flex="1"
                  display="flex"
                  alignItems="center"
                  border="none"
                  borderRadius="8px"
                  padding="10px"
                  mr="20px"
                  minHeight="400px"
                  flexDirection="column"
                  justifyContent="space-between"
              >
                <VStack spacing={4} align="center" flex="1" justifyContent="center">
                  <Image
                      src="https://via.placeholder.com/150"
                      alt="Uploaded Image Preview"
                      boxSize="150px"
                      objectFit="cover"
                      borderRadius="8px"
                  />
                  <Input type="file" accept="image/*" border="none" />
                  <Text fontSize="sm" color="gray.600">이미지 업로드</Text>
                </VStack>
              </Box>

              {/* 오른쪽: 작성자, 작성일자, 피드 제목 및 내용, 댓글, 댓글 입력 필드, 등록 버튼 */}
              <Box
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
              >
                <VStack spacing={6} align="start" flex="1" justifyContent="space-between" mt={2}>
                  {/* 작성자, 작성일자 */}
                  <HStack justify="space-between" mt={5} mb={1}>
                    <Profile image={profile.image} nickname={profile.nickname} />
                    <Text color="gray.500" alignItems="center">2025.04.03</Text>
                  </HStack>
                  <Box width="100%" borderBottom="1px solid gray" />

                  {/* 피드 : 작성자, 피드 제목 및 내용 */}
                  {/* 작성자, 피드 제목 */}
                  <HStack>
                    <Profile image={profile.image} nickname={profile.nickname} />
                    <Text>{feed.title}</Text>
                  </HStack>
                  {/* 피드 내용 */}
                  <Box>
                    <Text ml="65px">{feed.content}</Text>
                  </Box>
                  <Box width="100%" borderBottom="1px solid gray" />

                  {/* 댓글 영역 */}
                  <Box>
                    {/* 댓글 출력 */}
                    {comments.map((comment) => (
                        <HStack key={comment.id} spacing={4} mt={2}>
                          <Profile image="/logo.png" nickname={comment.user} />
                          <Text>{comment.text}</Text>
                        </HStack>
                    ))}
                  </Box>
                  <Box width="100%" borderBottom="1px solid gray" />

                  {/* 좋아요 갯수 */}
                  <HStack mt={1} mb={1}>
                    <FaRegHeart size={24} />
                    <Text>00</Text>
                  </HStack>
                  <Box width="100%" borderBottom="1px solid gray" />

                  {/* 댓글 입력 필드, 등록 버튼 */}
                  <Box mt="1px" display="flex" justifyContent="space-between" gap="8px">
                    <Input
                        type="text"
                        placeholder="댓글 달기"
                        flex="1"  // 댓글 입력 필드를 오른쪽 영역에 맞춰서 늘림
                        padding="10px"
                        fontSize="16px"
                        borderRadius="4px"
                        border="1px solid #ccc"
                        width="400px"
                    />
                    <Button
                        padding="10px 16px"
                        backgroundColor="#003366"
                        color="white"
                        border="none"
                        borderRadius="4px"
                        cursor="pointer"
                    >
                      등록
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Portal>
  )
}

export default FeedDetail