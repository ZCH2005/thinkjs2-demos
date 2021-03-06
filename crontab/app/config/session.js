'use strict';

module.exports = {
  name: 'thinkjs',
  type: 'file',
  secret: '%V93CHBK',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.getPath('common', 'runtime') + '/session',
    }
  }
}