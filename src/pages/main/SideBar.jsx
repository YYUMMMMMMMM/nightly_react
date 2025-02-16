import { Box, VStack, Image } from '@chakra-ui/react'
import { FiHome, FiSearch, FiBook } from "react-icons/fi";
import { LuMoon, LuLogOut } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import MenuItem from "./MenuItem"
import SearchModal from "./SearchModal"
import FeedWrite from "../feed/FeedWrite"
import {useNavigate} from "react-router-dom";
import {logout} from "../../redux/slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {refresh} from "../../redux/slices/renderSlice";

const SideBar = () => {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isFeedWriteOpen, setIsFeedWriteOpen] = useState(false);

  const navigate = useNavigate();

  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const openDiaryWrite = () => {
    setIsFeedWriteOpen(true);
  };

  const closeDiaryWrite = () => {
    setIsFeedWriteOpen(false);
  };

  const requestProfile = () => {
    dispatch(refresh());
    navigate(`/main/profile/${email}`);
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
      <Box
          as="nav"
          w="250px"
          bg="white"
          color="black"
          p={4}
          position="fixed"
          left="0"
          top="20px"
          bottom="20px"
          ml="20px"
          borderRadius="md"
          boxShadow="md"
      >
        <VStack align="start" spacing={4}>
          <Image src="/textlogo.png" alt="Logo" maxW="200px" mt={4} />
          <Box width="100%" borderBottom="1px solid gray" my={4} />

          <MenuItem icon={<FiHome />} label="홈" onClick={() => navigate("/main")} />
          <MenuItem icon={<FiSearch />} label="검색" onClick={openSearchModal} />
          <MenuItem icon={<LuMoon />} label="팔로우" onClick={() => navigate("/main/follow")} />
          <MenuItem icon={<FiBook />} label="일기 작성" onClick={openDiaryWrite} />
          <MenuItem icon={<GoPerson />} label="프로필" onClick={requestProfile} />
          <MenuItem icon={<LuLogOut />} label="로그아웃" onClick={handleLogout} />
        </VStack>

        <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
        <FeedWrite isOpen={isFeedWriteOpen} onClose={closeDiaryWrite} />
      </Box>
  )
}

export default SideBar;