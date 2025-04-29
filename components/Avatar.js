import { Image, Flex } from '@chakra-ui/react';

export function Avatar() {
  return (
    <Flex align="center" justify="center" position="relative" m={5}>
      <Image
        borderRadius="full"
        w={{ base: '80%', lg: '80%' }}
        src="/profile.png"
        alt="Avatar of me."
      />
    </Flex>
  );
}
