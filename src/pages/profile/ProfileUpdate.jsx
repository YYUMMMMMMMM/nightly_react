import {Box, Button, HStack, Image, Input, Portal, Text, Textarea, VStack} from "@chakra-ui/react";

const ProfileUpdate = ({ isOpen, onClose }) => {

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
              width="1000px" // 모달 크기 키움
              minHeight="600px" // 모달 높이 키움
              zIndex="1000000"
              position="relative"
              display="flex"
              flexDirection="column"
              onClick={(e) => e.stopPropagation()}
          >
            {/* 프로필 수정과 X 버튼을 같은 줄에 배치 */}
            <HStack
                spacing={4}
                align="center"
                justify="space-between"
                position="relative"
                width="100%" // 전체 폭을 사용
                mb="10px" // 아래 여백 추가
            >
              <Text fontSize="lg" fontWeight="bold" color="#003366">프로필 수정</Text>
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

              {/* 오른쪽: 프로필 수정 입력 필드 */}
              <Box
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%" // 전체 높이에 맞춰서 확장
                  mt={5}
              >
                <VStack spacing={6} align="start" flex="1">
                  {/* 현재 비밀번호 */}
                  <Box width="100%">
                    <Input
                        placeholder="현재 비밀번호"
                        type="password"
                        size="lg"
                        onChange={(e) => console.log("Current Password:", e.target.value)}
                    />
                  </Box>

                  {/* 수정 비밀번호 */}
                  <Box width="100%">
                    <Input
                        placeholder="새로운 비밀번호"
                        type="password"
                        size="lg"
                        onChange={(e) => console.log("New Password:", e.target.value)}
                    />
                  </Box>

                  {/* 닉네임 */}
                  <Box width="100%">
                    <Input
                        placeholder="닉네임"
                        size="lg"
                        onChange={(e) => console.log("Nickname:", e.target.value)}
                    />
                  </Box>

                  {/* 전화번호 */}
                  <Box width="100%">
                    <Input
                        placeholder="전화번호"
                        type="tel"
                        size="lg"
                        onChange={(e) => console.log("Phone Number:", e.target.value)}
                    />
                  </Box>

                  {/* 자기소개 */}
                  <Box width="100%">
                    <Textarea
                        placeholder="자기소개"
                        size="lg"
                        height="200px"
                        onChange={(e) => console.log("Introduction:", e.target.value)}
                    />
                  </Box>
                </VStack>

                {/* 수정 버튼 */}
                <HStack justify="flex-end" mt="15px">
                  <Button
                      onClick={() => console.log("Profile Updated")}
                      backgroundColor="#003366"
                      color="white"
                      size="lg"
                      borderRadius="8px"
                  >
                    수정
                  </Button>
                </HStack>
                <HStack mt={2} mb={2} justifyContent="flex-end">
                  <Button variant="ghost" size="s">계정 비활성화</Button>|
                  <Button variant="ghost" size="s">회원 탈퇴</Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Portal>
  )
}

export default ProfileUpdate