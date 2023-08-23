'use client';
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

import { ThemeProvider } from '@mui/material/styles';

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
