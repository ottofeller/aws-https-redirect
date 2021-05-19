import commonjs from '@rollup/plugin-commonjs'
import package_ from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'index.ts',

  output: {
    exports: 'named',
    file   : package_.main,
    format : 'cjs',
  },

  plugins: [
    commonjs({
      include: ['node_modules/**'],
    }),

    resolve(),
    typescript(),
  ],
}
