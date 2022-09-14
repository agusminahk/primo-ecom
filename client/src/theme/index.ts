import { createTheme } from '@mui/material/styles';
const originalTheme = createTheme();

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
        dark: Palette['primary'];
        highlights: Palette['primary'];
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
        highlights?: PaletteOptions['primary'];
    }

    interface PaletteColorOptions {
        clear?: string;
        light?: string;
        lightest?: string;
        shiny?: string;
        medium?: string;
        main?: string;
        blackness?: string;
        dark?: string;
        darkness?: string;
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
            clear: '#FBF5FF',
            light: '#F5E5FF',
            lightest: '#E0B3FF',
            shiny: '#CC80FF',
            medium: '#AD33FF',
            main: '#9900FF',
            blackness: '#811CCA',
            dark: '#65159D',
            darkness: '#480F70',
            darkest: '#2E0A48',
        },
        secondary: {
            clear: '#F5F5FF',
            light: '#E5E5FF',
            lightest: '#CCCCFF',
            shiny: '#4D4DFF',
            medium: '#0000B3',
            main: '#000066',
            blackness: '#00004E',
            dark: '#000041',
            darkness: '#000020',
            darkest: '#000013',
        },
        neutral: {
            clear: '#F8F9FC',
            light: '#CFD9EF',
            lightest: '#B8C5E0',
            shiny: '#7F96C3',
            medium: '#5E7AB0',
            main: '#3E598E',
            blackness: '#2F436A',
            dark: '#1F2C47',
            darkness: '#172135',
            darkest: '#0E1420',
        },
        dark: {
            clear: '#F9FAFB',
            light: '#EDEDED',
            lightest: '#A5A5A5',
            shiny: '#747579',
            medium: '#5B5B5B',
            main: '#474747',
            blackness: '#232426',
            dark: '#1D1E20',
            darkness: '#151617',
            darkest: '#101112',
        },
        error: {
            clear: '#FFF5F8',
            light: '#FFCCDB',
            lightest: '#FF99B8',
            shiny: '#FF6694',
            medium: '#FF3370',
            main: '#E00043',
            blackness: '#B30036',
            dark: '#99002E',
            darkness: '#66001F',
            darkest: '#33000F',
        },
        warning: {
            clear: '#FFFAEB',
            light: '#FEF0C7',
            lightest: '#FEDF89',
            shiny: '#F9CC66',
            medium: '#FBBA41',
            main: '#F6982A',
            blackness: '#DC6803',
            dark: '#B54708',
            darkness: '#93370D',
            darkest: '#7A2E0E',
        },
        success: {
            clear: '#ECFDF3',
            light: '#D1FADF',
            lightest: '#A6F4C5',
            shiny: '#6CE9A6',
            medium: '#32D583',
            main: '#12B76A',
            blackness: '#039855',
            dark: '#027A48',
            darkness: '#05603A',
            darkest: '#054F31',
        },
        highlights: {
            clear: '#F5FBFF',
            light: '#CEE9FD',
            lightest: '#6DBEF8',
            shiny: '#3CA8F6',
            medium: '#0B93F4',
            main: '#0975C3',
            blackness: '#075892',
            dark: '#053B61',
            darkness: '#021D31',
            darkest: '#010F18',
        },
    },
});

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
