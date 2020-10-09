module.exports = {
  rootDir: '.',
  roots: [
    "<rootDir>/src",
  ],
  preset: 'ts-jest',
  testRegex: '\\.(spec)\\.(ts)$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  verbose: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        classNameTemplate: '{filename}',
        titleTemplate: '{classname}_{title}',
        outputName: './junit.xml'
      }
    ]
  ],
  collectCoverageFrom: ['**/src/**/*.(t|j)s'],
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'cobertura'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'index.ts'
  ]
};