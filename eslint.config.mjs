export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.cache/**',
      'generated/**',
      'assets/reicon/**',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      'max-lines': ['error', { max: 1000, skipBlankLines: false, skipComments: false }],
    },
  },
]
