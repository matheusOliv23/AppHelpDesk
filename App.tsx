import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { Routes } from './src/routes';
import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from 'src/context/Auth';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
