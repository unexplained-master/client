// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenvLoad = require('dotenv-load');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextEnv = require('next-env');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({});
