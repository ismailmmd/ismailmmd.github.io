import {
  Link, Flex, GridItem, Grid, HoverCard, Portal, Image, Box,
} from '@chakra-ui/react';
import { FaStackOverflow, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import colors from '../utils/colors';

export default function SocialLinks() {
  const bgColor = colors.black[500];

  return (
    <Grid templateColumns="repeat(5, 1fr)" mb={10} alignItems="flex-start">
      <GridItem>
        <Link href="https://www.linkedin.com/in/ismail-mohmmd/" color="whiteAlpha.900">
          <Flex align="center" gap="2">
            <FaLinkedin />
            LinkedIn
          </Flex>
        </Link>
      </GridItem>
      <GridItem>
        <HoverCard.Root openDelay={200} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <Link href="https://github.com/ismailmmd" color="whiteAlpha.900">
              <Flex align="center" gap="2">
                <FaGithub />
                Github
              </Flex>
            </Link>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content width="300px" boxShadow="lg" borderRadius="md" bg={bgColor}>
                <Box p={2}>
                  <Image
                    src="https://github-readme-streak-stats.herokuapp.com?user=ismailmmd&exclude_days=Sun%2CSat"
                    alt="GitHub Streak"
                    width="100%"
                  />
                </Box>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      </GridItem>
      <GridItem>
        <HoverCard.Root openDelay={200} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <Link href="https://stackoverflow.com/users/7962589/ismail" color="whiteAlpha.900">
              <Flex align="center" gap="2">
                <FaStackOverflow />
                StackOverflow
              </Flex>
            </Link>
          </HoverCard.Trigger>
          <Portal>
            <HoverCard.Positioner>
              <HoverCard.Content width="300px" boxShadow="lg" borderRadius="md" bg={bgColor}>
                <Box p={2}>
                  <Image
                    src="https://stackoverflow-card.vercel.app/?userID=7962589&theme=stackoverflow-light"
                    alt="StackOverflow Stats"
                    width="100%"
                  />
                </Box>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        </HoverCard.Root>
      </GridItem>
    </Grid>
  );
}
