import {Box, Button, Center, HStack, Image, Input, Link, Stack, Text} from "@chakra-ui/react"
import { Field } from "../../components/ui/field"
import { PasswordInput } from "../../components/ui/password-input";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {login} from "../../redux/slices/authSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const handelSignIn = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
          "http://localhost:8080/api/auth/signin",
          data
      );
      if (response.status === 200) {
        const email = response.data.email;
        alert(email);
        console.log(email);
        dispatch(login(email));
        navigate("/main");
      }
    } catch (error) {
      if (error.response) {
        const message = error.response.data;
        setErrorMessage(message);
      } else {
        setErrorMessage("서버 오류가 발생했습니다.");
      }
    }
  }

  const onSubmit = handleSubmit((data) => {
    handelSignIn(data)
  });

  return (
      <Center h="100vh">
        <HStack spacing={10} align="center">
          {/* 로고 */}
          <Image src="/logo01.png" alt="Logo" boxSize="400px" />

          {/* 폼 */}
          <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-start" width="400px" p={8} boxShadow="md" borderRadius="lg" bg="white">
              <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="full"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  로그인
                </Text>
              </Box>
              <Field label="이메일" invalid={!!errors.email} errorText={errors.email?.message}>
                <Input
                    placeholder="email"
                    {...register("email", {
                      required: "이메일은 필수 입력입니다.",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "올바른 이메일 형식으로 입력해주세요.",
                      },
                    })}
                />
              </Field>
              <Field label="비밀번호" invalid={!!errors.password} errorText={errors.password?.message}>
                <PasswordInput
                    placeholder="passoword"
                    {...register("password", {
                      required: "비밀번호는 필수 입력입니다.",
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/,
                        message: "비밀번호는 최소 8자 이상 숫자와 특수문자가 포함되어야 합니다.",
                      },
                    })}
                />
              </Field>
              {/* 에러 메시지 출력 영역 */}
              {errorMessage && (
                  <Text color="red.500" fontSize="sm">
                    {errorMessage}
                  </Text>
              )}
              <Button type="submit" bg="#003366" width="100%" _hover={{
                bg: "#002244"
              }}>로그인</Button>
            <Link href="/signup" color="#003366">회원가입</Link>
            </Stack>
          </form>
        </HStack>
      </Center>
  )
}

export default SignIn;