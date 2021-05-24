const spacingUnit = 0.25;

module.exports = {
  typography: {
    fontFamilyBody: 'sans-serif',
    fontFamilyHeading: 'serif',
    baseFontSizePx: '20',
  },
  colour: {
    white: '#ffffff',
    primary: '#83c6ff',
    secondary: '#1a334a',
    transparentBackground: 'rgba(41, 41, 41, 90%)',
  },
  spacing: {
    unit: spacingUnit,
    units: (multiple) => `${multiple * spacingUnit}rem`,
  },
};
