import {
  Link,
  Flex,
  GridItem,
  Grid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Image,
  Box,
} from '@chakra-ui/react';
import { FaStackOverflow, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import colors from '../utils/colors';
import { trackSocialClick } from '../utils/analytics';

export default function SocialLinks() {
  const bgColor = colors.black[500];

  return (
    <Grid templateColumns="repeat(5, 1fr)" mb={10} alignItems="flex-start">
      <GridItem>
        <Link
          href="https://www.linkedin.com/in/ismail-mohmmd/"
          onClick={() =>
            trackSocialClick(
              'LinkedIn',
              'https://www.linkedin.com/in/ismail-mohmmd/'
            )
          }
        >
          <Flex align="center" gap="2">
            {' '}
            <FaLinkedin /> LinkedIn{' '}
          </Flex>
        </Link>
      </GridItem>
      <GridItem>
        <Popover trigger="hover" placement="bottom" openDelay={200}>
          <PopoverTrigger>
            <Link
              href="https://github.com/ismailmmd"
              onClick={() =>
                trackSocialClick('GitHub', 'https://github.com/ismailmmd')
              }
            >
              <Flex align="center" gap="2">
                {' '}
                <FaGithub /> Github{' '}
              </Flex>
            </Link>
          </PopoverTrigger>
          <PopoverContent
            width="300px"
            boxShadow="lg"
            borderRadius="md"
            bg={bgColor}
          >
            <PopoverBody>
              <Box p={2}>
                <Image
                  src="https://github-readme-streak-stats.herokuapp.com?user=ismailmmd&exclude_days=Sun%2CSat"
                  alt="GitHub Streak"
                  width="100%"
                />
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </GridItem>
      <GridItem>
        <Popover trigger="hover" placement="bottom" openDelay={200}>
          <PopoverTrigger>
            <Link
              href="https://stackoverflow.com/users/7962589/ismail"
              onClick={() =>
                trackSocialClick(
                  'StackOverflow',
                  'https://stackoverflow.com/users/7962589/ismail'
                )
              }
            >
              <Flex align="center" gap="2">
                {' '}
                <FaStackOverflow /> StackOverflow{' '}
              </Flex>
            </Link>
          </PopoverTrigger>
          <PopoverContent
            width="300px"
            boxShadow="lg"
            borderRadius="md"
            bg={bgColor}
          >
            <PopoverBody>
              <Box p={2}>
                <Image
                  src="https://stackoverflow-card.vercel.app/?userID=7962589&theme=stackoverflow-light"
                  alt="StackOverflow Stats"
                  width="100%"
                />
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </GridItem>
    </Grid>
  );
}
