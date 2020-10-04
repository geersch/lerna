module.exports = {
  overrides: [
    {
      files: ['advanced-console.logger.ts'],
      plugins: ['filenames'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
