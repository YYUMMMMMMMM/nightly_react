import {Box, Button, HStack, Image, Input, Portal, Text, Textarea, VStack} from "@chakra-ui/react";
import Profile from "../profile/Profile"

const FeedWrite = ({ isOpen, onClose }) => {

  const profile = {
    image: "/logo.png",
    nickname: "닉네임",
  };

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

            <HStack
                spacing={4}
                align="center"
                justify="space-between"
                position="relative"
                width="100%"
                mb="10px"
            >
              <Text fontSize="lg" fontWeight="bold" color="#003366">일기 작성하기</Text>
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
            </HStack>

            {/* 회색 구분선 */}
            <Box width="100%" borderBottom="1px solid gray" my={1} />

            <Box display="flex" flex="1">
              {/* 왼쪽: 이미지 업로드 */}
              <Box
                  flex="1"
                  display="flex"
                  alignItems="center"
                  border="none" // border 제거
                  borderRadius="8px"
                  padding="10px"
                  mr="20px"
                  minHeight="400px" // 이미지 박스 높이 설정
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
                  <Input type="file" accept="image/*" border="none" /> {/* border 제거 */}
                  <Text fontSize="sm" color="gray.600">이미지 업로드</Text>
                </VStack>
              </Box>

              {/* 오른쪽: 제목, 내용 입력 필드, 등록 버튼 */}
              <Box
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%" // 전체 높이에 맞춰서 확장
              >
                <VStack spacing={6} align="start" flex="1" justifyContent="space-between" mt={2}>
                  <Profile image={profile.image} nickname={profile.nickname} />
                  <Box width="100%" borderBottom="1px solid gray" />
                  <Box width="100%">
                    <Input
                        placeholder="게시물 제목"
                        size="lg"
                        border="none" // border 제거
                        onChange={(e) => console.log("Title:", e.target.value)}
                    />
                  </Box>
                  <Box width="100%" borderBottom="1px solid gray" />
                  <Box width="100%">
                    <Textarea
                        placeholder="게시물 내용"
                        size="lg"
                        height="300px"
                        border="none" // border 제거
                        onChange={(e) => console.log("Content:", e.target.value)}
                    />
                  </Box>
                </VStack>
                <Box width="100%" borderBottom="1px solid gray" />
                {/* 등록 버튼 */}
                <HStack justify="flex-end" mt="15px">
                  <Button
                      onClick={() => console.log("Post Submitted")}
                      backgroundColor="#003366"
                      color="white"
                      size="lg"
                      borderRadius="8px"
                  >
                    등록
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Portal>
  )
}

export default FeedWrite