import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Box
      maxW="1400px"
      mx="auto"
      px={4}
      bg={'white'}
      my={0}
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      minHeight="50vh"
      borderRadius={6}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
