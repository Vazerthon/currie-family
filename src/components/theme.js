const spacingUnit = 0.25;

module.exports = {
  typography: {
    fontFamilyBody: 'sans-serif',
    fontFamilyHeading: 'serif',
    baseFontSizePx: '20',
  },
  colour: {
    white: '#ffffff',
    primary: '#ef8c00',
    secondary: '#003666',
    transparentBackground: 'rgba(41, 41, 41, 90%)',
  },
  spacing: {
    unit: spacingUnit,
    units: (multiple) => `${multiple * spacingUnit}rem`,
  },
};
