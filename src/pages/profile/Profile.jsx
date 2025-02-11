import { Text, HStack } from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar"

const Profile = ({ image, nickname }) => {
  return (
      <HStack align="center">
        <Avatar name={nickname} src={image} size="lg" mr={2} />
        <Text fontWeight="bold">{nickname}</Text>
      </HStack>
  );
};

export default Profile;