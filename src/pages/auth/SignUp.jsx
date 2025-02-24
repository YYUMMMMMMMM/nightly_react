import {Box, Button, Center, HStack, Image, Input, Link, Stack, Text} from "@chakra-ui/react"
import { Field } from "../../components/ui/field"
import {PasswordInput} from "../../components/ui/password-input";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async (data) => {
    try {
      const response = await axios.post(
          "http://localhost:8080/api/auth/signup",
          data
      );

      if (response.status === 200) {
        navigate("/signin");
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
    handleSignUp(data);
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
                  회원가입
                </Text>
                <Link href="/signin" color="#003366" fontWeight="bold">
                  기존 계정으로 로그인
                </Link>
              </Box>
              <Field label="이메일" invalid={!!errors.email} errorText={errors.email?.message}>
                <Input
                    placeholder="이메일 형식에 맞춰 입력해주세요."
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
                    placeholder="8자 이상, 숫자와 특수문자 포함"
                    {...register("password", {
                      required: "비밀번호는 필수 입력입니다.",
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/,
                        message: "비밀번호는 최소 8자 이상 최대 20자 이하, 숫자, 특수문자, 영문자가 포함되어야 합니다.",
                      },
                    })}
                />
              </Field>
              <Field label="이름" invalid={!!errors.name} errorText={errors.name?.message}>
                <Input
                    size="md"
                    placeholder="한글과 영어만 입력해주세요."
                    width="100%"
                    {...register("name", {
                      required: "이름은 필수 입력입니다.",
                      pattern: {
                        value: /^[a-zA-Z가-힣]{2,20}$/,
                        message: "이름은 한글과 영어만 입력해야 합니다.",
                      },
                    })}
                />
              </Field>
              <Field label="휴대전화" invalid={!!errors.phone} errorText={errors.phone?.message}>
                <Input
                    size="md"
                    placeholder="'-'를 제외한 숫자 11자리를 입력해주세요."
                    width="100%"
                    {...register("phone", {
                      required: "휴대전화는 필수 입력입니다.",
                      pattern: {
                        value: /^[0-9]{11}$/,
                        message: "'-'를 제외한 숫자 11자리를 입력해주세요.",
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
              <Button type="submit" bg="#003366" color="white" width="100%" _hover={{
                bg: "#002244"
              }}>회원가입</Button>
            </Stack>
          </form>
        </HStack>
      </Center>
  )
}

export default SignUp;