import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

export const Provider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const theme = createTheme({
    white: '#fff',
    black: '#000',
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
