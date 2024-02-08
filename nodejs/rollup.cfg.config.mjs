import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

const config = {
    input: ['./src/index.config.js'],
    output: {
        dir: './dist',
        format: 'cjs',
        entryFileNames: '[name].js',
        strict: false,
    },
    plugins: [commonjs(), json()],
};

export default config;
