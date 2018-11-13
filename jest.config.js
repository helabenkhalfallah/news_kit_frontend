module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  reporters: [
    "default",
    [
      "jest-junit", {
        "outputDirectory": "./app-ci-reports",
        "outputName": "./jest/results.xml",
      }
    ]
  ]
}
