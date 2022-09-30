import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import plugin from 'tailwindcss/plugin';

const handler: Parameters<typeof plugin>[0] = ({
  addComponents,
  addUtilities,
  matchUtilities,
  theme,
}) => {
  addComponents({
    '.triangle': {
      'border-style': 'solid',
      'border-color': 'transparent',
      width: '0',
      height: '0',
      content: '""',
    },
  });
  addUtilities({
    '.triangle-t': {
      '--triangle-width': '1rem',
      '--triangle-height': '0.5rem',
      'border-top-width': '0',
      'border-left-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-right-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-bottom-width': 'var(--triangle-s-height, var(--triangle-height, 0.5rem))',
      'border-color': 'transparent transparent var(--triangle-color, currentColor)',
    },
    '.triangle-b': {
      '--triangle-width': '1rem',
      '--triangle-height': '0.5rem',
      'border-bottom-width': '0',
      'border-left-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-right-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-top-width': 'var(--triangle-s-height, var(--triangle-height, 0.5rem))',
      'border-color': 'var(--triangle-color, currentColor) transparent transparent',
    },
    '.triangle-l': {
      '--triangle-width': '0.5rem',
      '--triangle-height': '1rem',
      'border-left-width': '0',
      'border-top-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-bottom-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-right-width': 'var(--triangle-s-width, var(--triangle-width, 0.5rem))',
      'border-color': 'transparent var(--triangle-color, currentColor) transparent transparent',
    },
    '.triangle-r': {
      '--triangle-width': '0.5rem',
      '--triangle-height': '1rem',
      'border-right-width': '0',
      'border-top-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-bottom-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-left-width': 'var(--triangle-s-width, var(--triangle-width, 0.5rem))',
      'border-color': 'transparent transparent transparent var(--triangle-color, currentColor)',
    },
    '.triangle-tl': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',
      'border-bottom-width': '0',
      'border-left-width': '0',
      'border-right-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-top-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-color': 'var(--triangle-color, currentColor) transparent transparent transparent',
    },
    '.triangle-tr': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',
      'border-bottom-width': '0',
      'border-right-width': '0',
      'border-left-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-top-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-color': 'var(--triangle-color, currentColor) transparent transparent transparent',
    },
    '.triangle-bl': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',
      'border-top-width': '0',
      'border-left-width': '0',
      'border-right-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-bottom-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-color': 'transparent transparent var(--triangle-color, currentColor) transparent',
    },
    '.triangle-br': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',
      'border-top-width': '0',
      'border-right-width': '0',
      'border-left-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-bottom-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-color': 'transparent transparent var(--triangle-color, currentColor) transparent',
    },
  });
  matchUtilities(
    {
      triangle: (value) => ({
        '--triangle-color': value,
      }),
    },
    {
      values: flattenColorPalette(theme('colors')) as Record<string, string>,
      supportsNegativeValues: false,
      respectPrefix: true,
    },
  );
  matchUtilities(
    {
      'triangle-w': (value) => ({
        '--triangle-width': value,
      }),
    },
    {
      values: theme('width'),
      supportsNegativeValues: false,
      respectPrefix: true,
    },
  );
  matchUtilities(
    {
      'triangle-h': (value) => ({
        '--triangle-height': value,
      }),
    },
    {
      values: theme('height'),
      supportsNegativeValues: false,
      respectPrefix: true,
    },
  );
  matchUtilities(
    {
      triangle: (value) => ({
        '--triangle-s-height': `calc(var(--triangle-height) * ${value})`,
        '--triangle-s-width': `calc(var(--triangle-width) * ${value})`,
      }),
    },
    {
      values: theme('triangle'),
      supportsNegativeValues: false,
      respectPrefix: true,
    },
  );
};

const config: Parameters<typeof plugin>[1] = {
  content: [],
  theme: {
    triangle: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    },
  },
};

export const triangle = plugin(handler, config);

plugin.withOptions;

export default triangle;
