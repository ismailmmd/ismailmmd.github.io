import {
  Link, Flex, GridItem, Grid,
} from '@chakra-ui/react';
import { FaStackOverflow, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

export default function SocialLinks() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" mb={10} alignItems="flex-start">
      <GridItem>
        <Link href="https://www.linkedin.com/in/ismail-mohmmd/">
          <Flex align="center" gap="2">
            {' '}
            <FaLinkedin />
            {' '}
            LinkedIn
            {' '}
          </Flex>
        </Link>
      </GridItem>
      <GridItem>
        <Link href="https://github.com/ismailmmd">
          <Flex align="center" gap="2">
            {' '}
            <FaGithub />
            {' '}
            Github
            {' '}
          </Flex>
        </Link>
      </GridItem>
      <GridItem>
        <Link href="https://stackoverflow.com/users/7962589/ismail">
          <Flex align="center" gap="2">
            {' '}
            <FaStackOverflow />
            {' '}
            StackOverflow
            {' '}
          </Flex>
        </Link>
      </GridItem>
    </Grid>
  );
}
