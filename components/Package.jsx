import React, { useState, useEffect } from 'react';
import { Text, Heading, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { LuExternalLink } from 'react-icons/lu';
import { FaDownload } from 'react-icons/fa6';
import Grid from './Grid';
import fetchNpmDownloads from '../utils/npmDownloads';
import fetchNpmVersion from '../utils/npmVersion';

export default function Package({
  title,
  desc = '',
  stack = '',
  href = '',
  npmPackage = '',
}) {
  const [downloadCount, setDownloadCount] = useState('');
  const [version, setVersion] = useState('');

  useEffect(() => {
    if (npmPackage) {
      fetchNpmDownloads(npmPackage).then((count) => {
        if (count) {
          setDownloadCount(count);
        }
      });

      fetchNpmVersion(npmPackage).then((ver) => {
        if (ver) {
          setVersion(ver);
        }
      });
    }
  }, [npmPackage]);

  return (
    <Grid templateColumns="repeat(4, 1fr)" mb={10}>
      <GridItem colSpan={{ base: 4, sm: 1 }}>
        {version && (
        <Text color="white" opacity={0.5}>
          v
            {version}
        </Text>
        )}
        {downloadCount && (
          <Text color="white" opacity={0.3} fontSize="sm" mt={1}>
            <FaDownload style={{ display: 'inline', marginRight: '0.25rem' }} />
            {downloadCount}
          </Text>
        )}
      </GridItem>
      <GridItem colSpan={{ base: 4, sm: 3 }}>
        <Heading
          as={href ? 'a' : 'h3'}
          href={href}
          target="_blank"
          size="md"
          display="flex"
          alignItems="center"
        >
          {title}
          {href && (
          <LuExternalLink style={{ marginLeft: '0.5rem' }} />
          )}
        </Heading>
        {desc && <Text my={2}>{desc}</Text>}
        {stack && (
        <Text color="white" opacity={0.5}>
          {stack}
        </Text>
        )}
      </GridItem>
    </Grid>
  );
}

Package.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  stack: PropTypes.string,
  href: PropTypes.string,
  npmPackage: PropTypes.string,
};
