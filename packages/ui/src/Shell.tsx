'use client';
import React from 'react';
import {
  AppShell,
  Title,
  Box,
  Button,
  Container,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';

import { useAppShell } from './index';

export const Shell: React.FunctionComponent<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding='md'
      styles={{
        main: {
          background: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={{
        height: 60,
      }}
    >
      <AppShell.Header
        style={{
          background: theme.colors.blue[8],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: '20px',
        }}
      >
        <Title my={0} c={theme.white}>
          {title}
        </Title>
        <Box style={{ flexGrow: 1 }}></Box>
        {user && (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Title style={{ marginRight: '10px' }} my={0} c={theme.white}>
              {user} - {score}
            </Title>
            <Button
              style={{ height: '24px', width: '60px' }}
              variant={'light'}
              onClick={() => setUser(null)}
            >
              Logout
            </Button>
          </Box>
        )}
        {!user && (
          <Button
            style={{ height: '24px', width: '60px' }}
            variant={'light'}
            onClick={() => setUser('Wilson')}
          >
            Login
          </Button>
        )}
      </AppShell.Header>
      <Container
        fluid
        style={{
          padding: '20px',
        }}
      >
        {children}
      </Container>
    </AppShell>
  );
};
