import '@emotion/react';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    color: {
      border: string;
      primary: string;
    };
  }

  interface ThemeOptions {
    color: {
      border: string;
      primary: string;
    };
  }
}

declare module '@emotion/react' {
  interface Theme {
    color: {
      border: string;
      primary: string;
    };
  }
}
