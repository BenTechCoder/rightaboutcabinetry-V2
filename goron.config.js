const colors = {
    primary: '#023064',
    secondary: '#00163D',
    light: '#F9F9F9',
    dark: '#040710',
    accent: '#6E9BC5',
  };
  
  const fonts = {
    base: 'Fjalla One, sans-serif',
    serif: 'Merriweather, serif'
  };
  
  
  module.exports = {
    colors,
    fonts,
    generateCustomProperties: false ,
    utilities: {
      'bg': {
        items: colors,
        output: 'standard',
        property: 'background'
      },
      'color': {
        items: colors,
        output: 'standard',
        property: 'color'
      },
      'font': {
        items: fonts,
        output: 'standard',
        property: 'font-family'
      },
      'leading': {
        items: {
          tight: '1.2',
          mid: '1.5',
          loose: '1.7'
        },
        output: 'standard',
        property: 'line-height'
      },
      'measure': {
        items: {
          long: '75ch',
          short: '60ch',
          compact: '40ch'
        },
        output: 'standard',
        property: 'max-width'
      },
      'weight': {
        items: {
          light: '300',
          regular: '400',
          mid: '600',
          bold: '700'
        },
        output: 'standard',
        property: 'font-weight'
      }
    },
    breakpoints: {
      md: '48em',
      lg: '68em'
    }
  };