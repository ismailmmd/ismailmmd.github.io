import React from 'react';
import {
  Box, Text, Heading, GridItem,
  Flex,
} from '@chakra-ui/react';
import Head from 'next/head';
import { FaLocationDot } from 'react-icons/fa6';
import Grid from '../components/Grid';
import Experience from '../components/Experience';
import Avatar from '../components/Avatar';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>ismail m</title>
      </Head>

      <Box py="115px" px={4} maxWidth={600} mx="auto">
        <Grid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Ismail Mohammed
              </Heading>
              <Text>Full Stack Engineer</Text>
              <Flex>
                <FaLocationDot />
                <Text ml={1}>Tallinn</Text>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={10}>
          <Heading as="h2" size="md" mb={2}>
            About Me
          </Heading>
          <Text>
            I&apos;m Ismail — a builder at heart. I focus on backend engineering,
            performance, and making products that grow and evolve with real user
            feedback. I’m all about shipping fast, learning from users, and always
            trying out new ideas.
          </Text>
        </Box>
        <Box mb={10}>
          <Heading as="h2" size="md" mb={2}>
            Connect with me
          </Heading>
          <SocialLinks />
        </Box>

        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>

          <Experience
            href="https://www.pipedrive.com/en"
            side="2022 - moment()"
            title="Full Stack Engineer – Pipedrive"
            desc="Designed and Developed highly scalable, high throughput event driven microservices
              for multi data centered environment."
            stack="Fastify • TypeScript • Kafka • MySQL • Redis • K8s • AWS"
          />
          <Experience
            href="https://www.symplr.com/"
            side="2021 - 2022"
            title="Senior Software Engineer – Symplr"
            desc="Developed and maintained the provider credentialing system on microservice architecture. Designed and Developed ETL."
            stack="Angular • Springboot • Java • Azure • PostgreSQL"
          />
          <Experience
            href="https://www.geniallife.it/"
            side="2019 – 2021"
            title="Full Stack Developer – Allianz Technology"
            desc="Developed GenialLife insurance platform, with over 1 million users. Migrated legacy monolith to microservices architecture and cloud."
            stack="Angular • Java • Springboot • AWS • PostgreSQL"
          />
          <Experience
            href="https://www.boots.com/"
            side="2017 – 2019"
            title="Software Engineer – Boots (UST)"
            desc="Store Tech Support and Maintenance. Automated store process and customer feedback system."
            stack=".Net • C# • SQL Server • Azure "
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Side Projects
          </Heading>

          <Experience
            href="https://github.com/ismailmmd/vigilant-rotary-phone"
            side="1 %"
            title="Vigilant Rotary Phone - MVP"
            desc="Stamp coupon App to App"
            stack="Kotlin • Android • Firebase"
          />
          <Experience
            href="https://github.com/ismailmmd/session-alert"
            side="2020"
            title="Session Alert"
            desc="A simple tool to alert you when your session is about to expire."
            stack="Angular"
          />
          <Experience
            href="https://github.com/ismailmmd/ismailmmd.github.io"
            side="2020"
            title="Portfolio"
            desc="A simple portfolio website to showcase my works and projects. Feel free to clone and use it."
            stack="JS • HTML • CSS • React • Next.js"
          />
        </Box>
      </Box>
    </>
  );
}
