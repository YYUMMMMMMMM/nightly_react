import {Image} from "@chakra-ui/react";

/**
 * Nightly 이미지 로고
 * @returns 부모 컴포넌트 크기에 맞게 설정 (inherit)
 */
export default function Logo () {
    return <Image src="/logo01.png" boxSize="inherit" />;
}
