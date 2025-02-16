import { useState } from "react";
import {Box, Button, Image, Input, Portal, Text} from "@chakra-ui/react";
import axios from "utils/axios";
import {useNavigate} from "react-router-dom";
import logo from "components/logo";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState();

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value === "") {
      setList();
      return;
    }
    axios.get(`/api/main/search/${value}`)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          setList(data);
        })
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    axios.get(`/api/main/search/${searchQuery}`)
    .then(res => res.data)
    .then(data => {
      console.log(data);
      setList(data);
    })
  };

  const handleClose = () => {
    setSearchQuery("");
    setList([]);
    onClose();
  }

  if (!isOpen) return null;

  const handleClick = (email) => {
    handleClose();
    navigate("/main/profile/"+ email);
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
            onClick={handleClose}
        >
          <Box
              bg="white"
              p="24px"
              borderRadius="8px"
              width="500px"
              textAlign="center"
              minHeight="400px"
              zIndex="1000000"
              position="relative"
              onClick={(e) => e.stopPropagation()}
          >
            {/* 취소버튼 */}
            <Button
                position="absolute"
                top="1px"
                right="1px"
                onClick={handleClose}
                variant="ghost"
                color="#003366"
                fontSize="30px"
                _hover={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
            >
              ×
            </Button>

            <Box mt="20px" display="flex" justifyContent="center" gap="8px">
              <Input
                  type="text"
                  placeholder="검색"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  flex="1"
                  padding="10px"
                  fontSize="16px"
                  borderRadius="4px"
                  border="1px solid #ccc"
              />
              <Button
                  onClick={handleSearch}
                  padding="10px 16px"
                  backgroundColor="#003366"
                  color="white"
                  border="none"
                  borderRadius="4px"
                  cursor="pointer"
              >
                검색
              </Button>
            </Box>

            {/* 구분선 */}
            <Box width="100%" borderBottom="1px solid gray" my={4} />

            {/* 프로필 카드 */}
            {list?.map((user, index) =>
              <Box
                  key={index}
                  h="50px"
                  mt={"-1px"} // 상단 여백 제거
                  display={"flex"}
                  justifyContent="start"
                  alignItems="center"
                  border="1px solid lightgray"
                  borderRadius="4px"
                  onClick={() => handleClick(user.email)}
                  cursor="pointer"
              >
                <Image src={user.profileImage || logo} boxSize="inherit" />
                <Box
                    ml={"5px"}
                    alignItems="start"
                    display={"flex"}
                    flexDirection="column">
                  <Text>{user.nickname}</Text>
                  <Text fontSize={"75%"}>{user.email}</Text>
                </Box>
              </Box>
            )}

          </Box>
        </Box>
      </Portal>
  )
}

export default SearchModal