import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Portal,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";

import { Fieldset } from "@chakra-ui/react"

import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import logo from "components/logo";
import axios from "utils/axios";
import { refresh } from "../../redux/slices/renderSlice";

const ProfileUpdate = ({ isOpen, onClose }) => {

  const email = useParams().email;
  const [user, setUser] = useState({});
  const [imageFile, setImageFile] = useState();
  const [previewImage, setPreviewImage] = useState(null); // 미리보기 이미지 URL

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/main/profile/${email}`)
        .then(res => res.data)
        .then(data => {
          setUser(data);
          // setUpdatedUser(data);
        })
        .catch(error => setErrorMessage(error.message));
  }, []);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);

      // 미리보기 생성 (FileReader 사용)
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Base64 URL 저장
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    console.log(user);
    const formData = new FormData();

    formData.append(
        "data",
        new Blob([JSON.stringify(user)], { type: "application/json" })
    );
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }

    axios.put(`/api/main/profile`,
        formData,
        {headers: { "Content-Type": "multipart/form-data" }}
    )
    .then(res => res.data)
    .then(data => {
      console.log(data);
      setUser(data);
      dispatch(refresh());
      onClose();
      navigate(`/main/profile/${email}`);
    })
    .catch(error => setErrorMessage(error.message));
  }

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
        overflow={"auto"}
      >
        <Box
          bg="white"
          p="24px"
          borderRadius="8px"
          // width="100%" // 모달 크기 키움
          maxHeight="600px" // 모달 높이 키움
          zIndex="1000000"
          position="relative"
          display="flex"
          flexDirection="column"
          onClick={(e) => e.stopPropagation()}
        >
          <Fieldset.Root> {/* 입력폼 시작 */}
            {/* 프로필 수정과 X 버튼을 같은 줄에 배치 */}
            <HStack
              spacing={4}
              align="center"
              justify="space-between"
              position="relative"
              width="100%" // 전체 폭을 사용
              mb="10px" // 아래 여백 추가
            >
              <Fieldset.Legend>
                <Text fontSize="lg" fontWeight="bold" color="#003366">프로필 수정</Text>
              </Fieldset.Legend>
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
                <HStack spacing={4}>
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
                          src={
                            previewImage
                                ? previewImage
                                : user.profileImage
                            || logo
                          }
                          alt="Uploaded Image Preview"
                          boxSize="150px"
                          objectFit="cover"
                          borderRadius="8px"
                        />
                      <Input type="file" accept="image/*" border="none" name={"profileImage"} onChange={handleImageChange}/> {/* border 제거 */}
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
                      <Fieldset.Content> {/* 입력 필드 시작 */}
                        {/* 현재 비밀번호 */}
                        <Box width="100%">
                          <Input
                            name={"currentPassword"}
                            placeholder="현재 비밀번호"
                            type="password"
                            size="lg"
                            onChange={handleChange}
                          />
                        </Box>

                        {/* 수정 비밀번호 */}
                        <Box width="100%">
                          <Input
                            name={"changePassword"}
                            placeholder="새로운 비밀번호"
                            type="password"
                            size="lg"
                            onChange={handleChange}
                          />
                        </Box>

                        {/* 닉네임 */}
                        <Box width="100%">
                          <Input
                            name={"nickname"}
                            placeholder="닉네임"
                            size="lg"
                            value={user.nickname}
                            onChange={handleChange}
                          />
                        </Box>

                        {/* 전화번호 */}
                        <Box width="100%">
                          <Input
                            name={"phone"}
                            placeholder="전화번호"
                            type="tel"
                            size="lg"
                            value={user.phone}
                            onChange={handleChange}
                          />
                        </Box>

                        {/* 자기소개 */}
                        <Box width="100%">
                          <Textarea
                            name={"content"}
                            placeholder="자기소개"
                            size="lg"
                            height="150px"
                            value={user.content}
                            onChange={handleChange}
                          />
                        </Box>
                      </Fieldset.Content> {/* 입력 필드 종료 */}
                    </VStack>

                    {/* 수정 버튼 */}
                    <HStack justify="flex-end" mt="5px">
                      <Button
                        onClick={handleUpdate}
                        backgroundColor="#003366"
                        color="white"
                        size="lg"
                        borderRadius="8px"
                      >
                        수정
                      </Button>
                    </HStack>

                    {/* 계정 설정 */}
                    <HStack mt={2} mb={2} justifyContent="flex-end">
                      <Button variant="ghost" size="s">계정 비활성화</Button>|
                      <Button variant="ghost" size="s">회원 탈퇴</Button>
                    </HStack>
                  </Box>
                </HStack>
            </Box>
          </Fieldset.Root> {/* 입력폼 종료 */}
        </Box>
      </Box>
    </Portal>
  )
}

export default ProfileUpdate