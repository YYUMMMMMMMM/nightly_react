import {Box, Button, Portal, Text} from "@chakra-ui/react";

const FeedDelete = ({ isOpen, onClose }) => {

  const handleDelete = () => {
    console.log("handleDelete");
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
              width="400px"
              textAlign="center"
              minHeight="300px"
              zIndex="1000000"
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
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

            <Text fontSize="18px" fontWeight="bold" mb={10}>일기를 삭제하시겠습니까?</Text>

            <Box width="100%" display="flex" justifyContent="flex-end" flexDirection="column" height="100%">
              <Button
                  onClick={handleDelete}
                  padding="10px 16px"
                  backgroundColor="#003366"
                  color="white"
                  border="none"
                  borderRadius="4px"
                  cursor="pointer"
              >
                삭제
              </Button>
            </Box>
          </Box>
        </Box>
      </Portal>
  )
}

export default FeedDelete