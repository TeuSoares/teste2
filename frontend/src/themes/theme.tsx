import { createTheme } from '@mui/material/styles';

import { indigo, yellow, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    mid: true;
    lg: true;
    xl: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    red: true;
  }
}


let theme = createTheme({
  typography: {
    h1: {
      fontSize: '1.6em',
      fontWeight: 'bold'
    },
    h6: {
      fontSize: '.96em'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mid: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #eeeeee;
          font-family: 'Roboto';
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          padding: 3rem 0;
          flex: 1 0 auto;
        }
      `
    }
  }
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#1C79BA'
    },
    background: theme.palette.augmentColor({
      color: {
        main: '#eeeeee',
        light: '#f3f3f3',
      },
      name: 'background',
    }),
    contrast: theme.palette.augmentColor({
      color: {
        main: yellow[500],
      },
      name: 'contrast',
    }),
    red: theme.palette.augmentColor({
      color: {
        main: red[600],
      },
      name: 'red',
    }),
    indigo: theme.palette.augmentColor({
      color: {
        main: indigo[500],
      },
      name: 'indigo',
    }),
    white: theme.palette.augmentColor({
      color: {
        main: "#fff",
      },
      name: 'white',
    }),
  },
});

export default theme;
