import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#a7d8f0', // Azul claro suave
      main: '#72bfe2',  // Azul bebê
      dark: '#4994b8',  // Azul médio
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffe4c4', // Bege claro
      main: '#ffcc99',  // Tom pastel laranja
      dark: '#e6a776',  // Tom mais forte
      contrastText: '#000',
    },
    background: {
      default: '#fdfdfd', // Fundo branco suave
      paper: '#f9f9f9',   // Fundo de papel levemente diferente
    },
    text: {
      primary: '#333', // Preto suave para boa legibilidade
      secondary: '#666', // Cinza médio para textos secundários
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: '#7b93c3',  // Azul suave
      main: '#506ab6',   // Azul médio
      dark: '#2f478a',   // Azul escuro
      contrastText: '#fff',
    },
    secondary: {
      light: '#e6b6c4',  // Rosa claro
      main: '#d48aa2',   // Rosa bebê
      dark: '#ab5972',   // Rosa mais escuro
      contrastText: '#000',
    },
    background: {
      default: '#1e1e2e', // Fundo escuro
      paper: '#252535',   // Fundo de papel mais claro
    },
    text: {
      primary: '#f0f0f0', // Branco suave para legibilidade
      secondary: '#bdbdbd', // Cinza claro para textos secundários
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export {
  lightTheme,
  darkTheme
};
