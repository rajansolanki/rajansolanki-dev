module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'reports/jest', outputName: 'results.xml' },
    ],
  ],
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^styles$': '<rootDir>/src/styles',
    '^components$': '<rootDir>/src/components',
    '^shared$': '<rootDir>/src/shared',
    '^partials$': '<rootDir>/src/partials',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  coverageDirectory: '<rootDir>/reports/jest',
};
