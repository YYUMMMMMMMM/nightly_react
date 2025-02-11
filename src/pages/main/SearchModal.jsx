import { useState } from "react";
import {Box, Button, Input, Portal} from "@chakra-ui/react";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
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
              width="500px"
              textAlign="center"
              minHeight="400px"
              zIndex="1000000"
              position="relative"
              onClick={(e) => e.stopPropagation()}
          >

            <Button
                position="absolute"
                top="1px"
                right="1px"
                onClick={onClose}
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
            <Box width="100%" borderBottom="1px solid gray" my={4} />
          </Box>
        </Box>
      </Portal>
  )
}

export default SearchModal