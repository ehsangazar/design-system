import { getJestConfig } from "@storybook/test-runner";

const testRunnerConfig = getJestConfig();
global.__test = (name, fn) => test(name, fn);

export default {
  ...testRunnerConfig,
};
