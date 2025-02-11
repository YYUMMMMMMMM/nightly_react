import {Text, HStack, Box} from '@chakra-ui/react'

const MenuItem = ({ icon, label, onClick }) => {
  return (
      <HStack spacing={2} alignItems="center" w="100%" _hover={{ bg: "gray.100", cursor: "pointer" }}>
        <button onClick={onClick} style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Box as="span" ml={2} mr={2} mt={2} mb={2} fontSize="38px">
            {icon}
          </Box>
          <Text mt={2} mb={2} fontSize="18px">{label}</Text>
        </button>
      </HStack>
  )
}

export default MenuItem