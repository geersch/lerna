module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['dist'],
  rootDir: './packages',
  testEnvironment: 'node',
  testRegex: '\\.(spec)\\.(ts)$',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.build.json'
    }
  },
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
  coverageDirectory: '../coverage',
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'cobertura'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'index.ts'
  ]
}