import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
const env = process.env.NODE_ENV;

const config = {
    input: ['./src/index.js'],
    output: {
        dir: './dist',
        format: 'cjs',
        entryFileNames: '[name].js',
    },
    plugins: [
        resolve(),
        commonjs(),
        json(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
        }),
    ],
};

if (env === 'production') {
    config.plugins.push(
        terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
            },
        })
    );
}

export default config;
