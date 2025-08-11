import React from 'react';
import {
  Box, Text, Flex, Link,
} from '@chakra-ui/react';
import { LuExternalLink, LuCalendar, LuGlobe } from 'react-icons/lu';
import metadata from '../utils/metadata.json';

export default function Footer() {
  const lastUpdated = new Date(metadata.lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box
      as="footer"
      py={8}
      px={4}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      mt={10}
    >
      <Flex
        maxWidth={600}
        mx="auto"
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align="center"
        gap={4}
      >
        <Flex align="center" gap={2}>
          <LuCalendar size={14} />
          <Text fontSize="sm" color="white" opacity={0.5}>
            Last updated:
            {' '}
            {lastUpdated}
          </Text>
        </Flex>

        <Flex align="center" gap={2}>
          <LuGlobe size={14} />
          <Text fontSize="sm" color="white" opacity={0.5}>
            Deployed on
            {' '}
            <Link
              href="https://vercel.com"
              target="_blank"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
              Vercel
              <LuExternalLink size={12} />
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
