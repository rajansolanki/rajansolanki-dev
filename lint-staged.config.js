/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  'cypress/**/*.ts': () => 'tsc -p cypress',
  '!(cypress)/**/*.{tsx,ts}': () => 'tsc -p .',
  '*.{tsx,ts,js}': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '*.{html,scss,md,yml,json}': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
};
