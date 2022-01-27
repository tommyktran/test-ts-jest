// jest.config.js
export default {
    transform: {
      "^.+\\.svelte$": [
        "svelte-jester",
        {
          "preprocess": "svelte.config.js"
        }
      ],
      "^.+\\.js$": "babel-jest",
      "^.+\\.ts$": "ts-jest"
    },
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    transformIgnorePatterns: [
      "node_modules/(?!(carbon-icons-svelte|carbon-components-svelte))"
    ],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "<rootDir>/src/lib/styleMock.js",
      "^\\$lib(.*)$": "<rootDir>/src/lib$1"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };