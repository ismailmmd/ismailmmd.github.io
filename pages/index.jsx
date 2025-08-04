import React from 'react';
import { Box, Text, Heading, GridItem, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { FaLocationDot } from 'react-icons/fa6';
import Grid from '../components/Grid';
import Experience from '../components/Experience';
import Package from '../components/Package';
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
            I&apos;m Ismail — a builder at heart. I focus on backend
            engineering, performance, and making products that grow and evolve
            with real user feedback. I’m all about shipping fast, learning from
            users, and always trying out new ideas.
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
            stack="Kotlin • Flutter • Android • Firebase"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Publishing
          </Heading>

          <Package
            href="https://www.npmjs.com/package/@slowcode/caat"
            title="CAAT - CLI Tool to read Markdown"
            desc="A CLI tool that converts Markdown files to beautifully styled terminal output with colors and formatting. An enhanced alternative to the standard cat command."
            stack="JavaScript • Node.js • CLI • NPM"
            npmPackage="@slowcode/caat"
          />
          <Package
            href="https://www.npmjs.com/package/session-alert-l"
            title="Session Alert"
            desc="A plug-and-play Angular component to track user session time and alert when it's about to expire. Built with TypeScript and compatible with Angular CLI 8.0.6."
            stack="TypeScript • Angular • NPM"
            npmPackage="session-alert-l"
          />
        </Box>
      </Box>
    </>
  );
}
