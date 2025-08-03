import PropTypes from 'prop-types';
import { Grid as ChakraGrid } from '@chakra-ui/react';
import React from 'react';

export default function Grid({
  children,
  templateColumns = 'repeat(12, 1fr)',
  mb,
  alignItems,
  gap,
  gridGap,
  rowGap,
  columnGap,
}) {
  return (
    <ChakraGrid
      maxW="1920px"
      templateColumns={templateColumns}
      width="100%"
      mx="auto"
      mb={mb}
      alignItems={alignItems}
      gap={gap}
      gridGap={gridGap}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </ChakraGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  templateColumns: PropTypes.string,
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignItems: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gridGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grid.defaultProps = {
  templateColumns: 'repeat(12, 1fr)',
  mb: undefined,
  alignItems: undefined,
  gap: undefined,
  gridGap: undefined,
  rowGap: undefined,
  columnGap: undefined,
};
