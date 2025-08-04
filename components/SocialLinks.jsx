import {
  Link,
  Flex,
  GridItem,
  Grid,
  Popover,
  Portal,
  Image,
  Box,
} from '@chakra-ui/react';
import { FaStackOverflow, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import colors from '../utils/colors';

export default function SocialLinks() {
  const bgColor = colors.black[500];

  return (
    <Grid templateColumns="repeat(5, 1fr)" mb={10} alignItems="flex-start">
      <GridItem>
        <Link href="https://www.linkedin.com/in/ismail-mohmmd/">
          <Flex align="center" gap="2">
            {' '}
            <FaLinkedin /> LinkedIn{' '}
          </Flex>
        </Link>
      </GridItem>
      <GridItem>
        <Popover.Root openDelay={200} positioning={{ placement: 'bottom' }}>
          <Popover.Trigger asChild>
            <Link href="https://github.com/ismailmmd">
              <Flex align="center" gap="2">
                {' '}
                <FaGithub /> Github{' '}
              </Flex>
            </Link>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                width="300px"
                boxShadow="lg"
                borderRadius="md"
                bg={bgColor}
              >
                <Popover.Body>
                  <Box p={2}>
                    <Image
                      src="https://github-readme-streak-stats.herokuapp.com?user=ismailmmd&exclude_days=Sun%2CSat"
                      alt="GitHub Streak"
                      width="100%"
                    />
                  </Box>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </GridItem>
      <GridItem>
        <Popover.Root openDelay={200} positioning={{ placement: 'bottom' }}>
          <Popover.Trigger asChild>
            <Link href="https://stackoverflow.com/users/7962589/ismail">
              <Flex align="center" gap="2">
                {' '}
                <FaStackOverflow /> StackOverflow{' '}
              </Flex>
            </Link>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content
                width="300px"
                boxShadow="lg"
                borderRadius="md"
                bg={bgColor}
              >
                <Popover.Body>
                  <Box p={2}>
                    <Image
                      src="https://stackoverflow-card.vercel.app/?userID=7962589&theme=stackoverflow-light"
                      alt="StackOverflow Stats"
                      width="100%"
                    />
                  </Box>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </GridItem>
    </Grid>
  );
}
