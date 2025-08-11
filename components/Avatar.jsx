import React from 'react';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Avatar() {
  return (
    <Flex align="center" justify="center" position="relative" m={5}>
      <Image
        src="/profile.png"
        alt="Avatar of me."
        width={162}
        height={244}
        priority
        sizes="(max-width: 768px) 81px, 162px"
        style={{
          borderRadius: '24px',
          width: '80%',
          height: 'auto',
          maxWidth: '81px',
        }}
      />
    </Flex>
  );
}
