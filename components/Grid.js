import PropTypes from 'prop-types';
import { Grid as ChakraGrid } from '@chakra-ui/react';

export function Grid({ children, ...rest }) {
  return (
    <ChakraGrid
      maxW="1920px"
      templateColumns="repeat(12, 1fr)"
      width="100%"
      mx="auto"
      {...rest}
    >
      {children}
    </ChakraGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
