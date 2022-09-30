"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangle = void 0;
var flattenColorPalette_1 = __importDefault(require("tailwindcss/lib/util/flattenColorPalette"));
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var handler = function (_a) {
    var addComponents = _a.addComponents, addUtilities = _a.addUtilities, matchUtilities = _a.matchUtilities, theme = _a.theme;
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
    matchUtilities({
        triangle: function (value) { return ({
            '--triangle-color': value,
        }); },
    }, {
        values: (0, flattenColorPalette_1.default)(theme('colors')),
        supportsNegativeValues: false,
        respectPrefix: true,
    });
    matchUtilities({
        'triangle-w': function (value) { return ({
            '--triangle-width': value,
        }); },
    }, {
        values: theme('width'),
        supportsNegativeValues: false,
        respectPrefix: true,
    });
    matchUtilities({
        'triangle-h': function (value) { return ({
            '--triangle-height': value,
        }); },
    }, {
        values: theme('height'),
        supportsNegativeValues: false,
        respectPrefix: true,
    });
    matchUtilities({
        triangle: function (value) { return ({
            '--triangle-s-height': "calc(var(--triangle-height) * ".concat(value, ")"),
            '--triangle-s-width': "calc(var(--triangle-width) * ".concat(value, ")"),
        }); },
    }, {
        values: theme('triangle'),
        supportsNegativeValues: false,
        respectPrefix: true,
    });
};
var config = {
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
exports.triangle = (0, plugin_1.default)(handler, config);
plugin_1.default.withOptions;
exports.default = exports.triangle;
//# sourceMappingURL=triangle.js.map