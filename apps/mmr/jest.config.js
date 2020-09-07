module.exports = {
  name: "mmr",
  preset: "../../jest.config.js",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  coverageDirectory: "../../coverage/apps/mmr",
};
