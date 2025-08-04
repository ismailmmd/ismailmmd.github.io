import { Flex } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
    />
  );
}
