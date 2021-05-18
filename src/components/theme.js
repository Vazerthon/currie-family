const spacingUnit = 0.25;

module.exports = {
  typography: {
    fontFamilyBody: 'sans-serif',
    fontFamilyHeading: 'serif',
    baseFontSizePx: '20',
  },
  colour: {
    white: '#ffffff',
    black: '#292929',
    primary: '#009e49',
    secondary: '#fcad56',
    transparentBackground: 'rgba(41, 41, 41, 90%)',
  },
  spacing: {
    unit: spacingUnit,
    units: (multiple) => `${multiple * spacingUnit}rem`,
  },
};
