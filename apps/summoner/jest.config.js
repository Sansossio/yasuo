module.exports = {
  name: "summoner",
  preset: "../../jest.config.js",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  coverageDirectory: "../../coverage/apps/summoner",
};
