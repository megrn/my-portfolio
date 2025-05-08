// jest.config.js
module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
      // Alias Tailwind classes so imports don’t break
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      // Map static assets
      "\\.(png|jpg|jpeg|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  };
  