const path = require('path');
const {TARGET_BROWSERS} = require('./Constants');

const CSSNANO_OPTIONS = {
  production: {
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  },
  development: {},
};

module.exports = ({env, file, options}) => [
  // Must be first
  require('postcss-import')({
    path: path.resolve(`./app`),
  }),
  require('postcss-nested')(),
  // New CSS functionality
  require('postcss-simple-vars')({silent: false}),
  require('postcss-hexrgba')(),
  require('postcss-calc')(), // Must be before position-nib
  require('postcss-size-nib')(),
  require('postcss-position-nib')(),
  require('postcss-overflow-ellipsis')(),
  // Utils
  require('postcss-url')({url: 'rebase'}),
  require('autoprefixer')({browsers: TARGET_BROWSERS}),
  // We need to run this at the end for sweet compressed outputs
  require('cssnano')(CSSNANO_OPTIONS[env]),
];
