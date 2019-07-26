module.exports = {
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/assets/img'],
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/mocks/fileMock.js',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!jest.config.js',
    '!<rootDir>/server.js',
    '!webpack.common.js',
    '!webpack.dev.js',
    '!webpack.prod.js',
    '!**/src/App.jsx',
    '!**/coverage/**',
    '!**/tests/**',
    '!**/redux/**',
    '!**/__tests__/**',
    '!**/index.js',
    '!**/dist/**',
  ],
};
