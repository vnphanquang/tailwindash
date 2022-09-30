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

      // reset
      'border-top-width': '0',
      'border-top-color': 'transparent',

      // apply
      'border-left-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-left-color': 'transparent',
      'border-right-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-right-color': 'transparent',
      'border-bottom-width': 'var(--triangle-s-height, var(--triangle-height, 0.5rem))',
      'border-bottom-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-b': {
      '--triangle-width': '1rem',
      '--triangle-height': '0.5rem',

      // reset
      'border-bottom-width': '0',
      'border-bottom-color': 'transparent',

      // apply
      'border-left-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-left-color': 'transparent',
      'border-right-width': 'calc(var(--triangle-s-width, var(--triangle-width, 1rem)) / 2)',
      'border-right-color': 'transparent',
      'border-top-width': 'var(--triangle-s-height, var(--triangle-height, 0.5rem))',
      'border-top-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-l': {
      '--triangle-width': '0.5rem',
      '--triangle-height': '1rem',

      // reset
      'border-left-width': '0',
      'border-left-color': 'transparent',

      // apply
      'border-top-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-top-color': 'transparent',
      'border-bottom-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-bottom-color': 'transparent',
      'border-right-width': 'var(--triangle-s-width, var(--triangle-width, 0.5rem))',
      'border-right-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-r': {
      '--triangle-width': '0.5rem',
      '--triangle-height': '1rem',

      // reset
      'border-right-width': '0',
      'border-right-color': 'transparent',

      // apply
      'border-top-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-top-color': 'transparent',
      'border-bottom-width': 'calc(var(--triangle-s-height, var(--triangle-height, 1rem)) / 2)',
      'border-bottom-color': 'transparent',
      'border-left-width': 'var(--triangle-s-width, var(--triangle-width, 0.5rem))',
      'border-left-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-tl': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',

      // reset
      'border-bottom-width': '0',
      'border-left-width': '0',
      'border-bottom-color': 'transparent',
      'border-left-color': 'transparent',

      // apply
      'border-right-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-right-color': 'transparent',
      'border-top-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-top-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-tr': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',

      // reset
      'border-bottom-width': '0',
      'border-right-width': '0',

      // apply
      'border-left-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-left-color': 'transparent',
      'border-top-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-top-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-bl': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',

      // reset
      'border-top-width': '0',
      'border-left-width': '0',

      // apply
      'border-right-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-right-color': 'transparent',
      'border-bottom-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-bottom-color': 'var(--triangle-color, currentColor)',
    },
    '.triangle-br': {
      '--triangle-width': '1rem',
      '--triangle-height': '1rem',

      // rest
      'border-top-width': '0',
      'border-right-width': '0',

      // apply
      'border-left-width': 'var(--triangle-s-height, var(--triangle-height, 1rem))',
      'border-left-color': 'transparent',
      'border-bottom-width': 'var(--triangle-s-width, var(--triangle-width, 1rem))',
      'border-bottom-color': 'var(--triangle-color, currentColor)',
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
