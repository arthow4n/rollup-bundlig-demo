import { rollup } from 'rollup';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      presets: [
        ["env", {
          targets: {
            browsers: ["ie >= 10"]
          },
          modules: false,
          uglify: true,
        }]
      ]
    }),
    uglify(),
  ]
};
