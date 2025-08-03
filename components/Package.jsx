import React from 'react';
import { Text, Heading, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { LuExternalLink } from 'react-icons/lu';
import { FaDownload } from 'react-icons/fa6';
import Grid from './Grid';

export default function Package({
  side, title, desc = '', stack = '', href = '', downloads = '',
}) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" mb={10}>
      <GridItem colSpan={{ base: 4, sm: 1 }}>
        <Text color="white" opacity={0.5}>
          {side}
        </Text>
        {downloads && (
          <Text color="white" opacity={0.3} fontSize="sm" mt={1}>
            <FaDownload style={{ display: 'inline', marginRight: '0.25rem' }} />
            {downloads}
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
  side: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  stack: PropTypes.string,
  href: PropTypes.string,
  downloads: PropTypes.string,
};

Package.defaultProps = {
  desc: '',
  stack: '',
  href: '',
  downloads: '',
};
