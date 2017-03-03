'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('mes service', function() {
  it('registered the mes service', () => {
    assert.ok(app.service('mes'));
  });
});
