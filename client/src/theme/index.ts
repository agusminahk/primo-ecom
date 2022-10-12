import { createTheme } from '@mui/material/styles';
const originalTheme = createTheme();

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    dark: Palette['primary'];
    highlight: Palette['primary'];
    tone: Palette['common'];
  }

  interface PaletteColor {
    clear?: string;
    lightest?: string;
    shiny?: string;
    medium?: string;
    blackness?: string;
    darkness?: string;
    darkest?: string;
  }

  interface PaletteOptions {
    tone?: PaletteOptions['common'];
    primary?: PaletteOptions['primary'];
    secondary?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    error?: PaletteOptions['primary'];
    warning?: PaletteOptions['primary'];
    success?: PaletteOptions['primary'];
    highlight?: PaletteOptions['primary'];
    highlightTransparent?: PaletteOptions['primary'];
    primaryTransparent?: PaletteOptions['primary'];
  }

  interface PaletteColorOptions {
    light?: string;
    medium?: string;
    main?: string;
    dark?: string;
    darkest?: string;
  }
}

const themeColors = createTheme({
  palette: {
    tone: {
      white: '#FFFFFF',
      black: '#000000',
    },
    primary: {
      light: '#525969',
      medium: '#AD33FF',
      main: '#0e101c',
      dark: '#010308',
      darkest: '#0f1617',
    },
    secondary: {
      light: '#E5E5FF',
      medium: '#0000B3',
      main: '#474747',
      dark: '#000041',
      darkest: '#000013',
    },
    neutral: {
      light: '#CFD9EF',
      medium: '#5E7AB0',
      main: '#FFF',
      dark: '#1F2C47',
      darkest: '#0E1420',
    },
    dark: {
      light: '#EDEDED',
      medium: '#5B5B5B',
      main: '#19181a',
      dark: '#1D1E20',
      darkest: '#101112',
    },
    error: {
      light: '#FFCCDB',
      medium: '#FF3370',
      main: '#E00043',
      dark: '#99002E',
      darkest: '#33000F',
    },
    warning: {
      light: '#FEF0C7',
      medium: '#FBBA41',
      main: '#ec5990',
      dark: '#B54708',
      darkest: '#7A2E0E',
    },
    success: {
      light: '#D1FADF',
      medium: '#32D583',
      main: '#12B76A',
      dark: '#027A48',
      darkest: '#054F31',
    },
    highlight: {
      light: '#ef7aa6',
      medium: '#0B93F4',
      main: '#ec5990',
      dark: '#053B61',
      darkest: '#010F18',
    },
    highlightTransparent: {
      light: '#ec599000',
      medium: '#ec5990c9',
      main: '#ec599087',
      dark: '#053B61',
      darkest: '#010F18',
    },
    primaryTransparent: {
      light: '#0e101c4a',
      medium: '#0e101ccc',
      main: '#0e101c9e',
      dark: '#010308',
      darkest: '#0f1617',
    },
  },
});
//Aqui se elimina 


const themeBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 500,
      md: 768,
      lg: 1040,
      xl: 1280,
    },
  },
});

const themeTypography = createTheme({
  typography: {
    h1: {
      fontFamily: 'Poppins, sans-serif',
      color: 'secondary.main',
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      color: 'secondary.main',
      fontSize: '1.313rem',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      color: 'secondary.main',
      fontSize: '1.125rem',
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
      color: 'secondary.main',
      fontSize: '1rem',
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
      color: 'secondary.main',
      fontSize: '0.875rem',
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      color: 'secondary.main',
      fontSize: '0.75rem',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1rem',
      lineHeight: '1.625rem',
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.875rem',
      lineHeight: '1.625rem',
    },
  },
});
const themeShadows = createTheme({
  shadows: [
    'none',
    '0px 1px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 1px rgba(0, 0, 0, 0.05)',
    '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    '0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
    '0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
    '0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
    originalTheme.shadows[6],
    originalTheme.shadows[7],
    originalTheme.shadows[8],
    originalTheme.shadows[9],
    originalTheme.shadows[10],
    originalTheme.shadows[11],
    originalTheme.shadows[12],
    originalTheme.shadows[13],
    originalTheme.shadows[14],
    originalTheme.shadows[15],
    originalTheme.shadows[16],
    originalTheme.shadows[17],
    originalTheme.shadows[18],
    originalTheme.shadows[19],
    originalTheme.shadows[20],
    originalTheme.shadows[21],
    originalTheme.shadows[22],
    originalTheme.shadows[23],
    originalTheme.shadows[24],
  ],
});

export const theme = createTheme({
  palette: {
    ...themeColors.palette,
  },
  breakpoints: {
    ...themeBreakpoints.breakpoints,
  },
  typography: {
    ...themeTypography.typography,
  },
  shadows: {
    ...themeShadows.shadows,
  },
});
