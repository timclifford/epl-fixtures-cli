'use strict';

const Fixtures = require('epl-fixtures');
const chai = require('chai');
const expect = require('chai').expect;
const exec = require("child_process").exec;
let captured_stdout = '';

describe('Running CLI without any params', function () {
  let allMatches = [];

  before(function (done) {
    new Fixtures().all(function (err, matches) {
      allMatches = matches;
      done();
    });
  });

  before(function (done) {
    exec('node ./src/cli', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns matches for multiple clubs', function () {
    const liverpool = captured_stdout.indexOf('Liverpool');
    const arsenal = captured_stdout.indexOf('Arsenal');
    const chelsea = captured_stdout.indexOf('Chelsea');
    const stoke = captured_stdout.indexOf('Stoke');

    expect(liverpool).to.not.equal(-1);
    expect(arsenal).to.not.equal(-1);
    expect(chelsea).to.not.equal(-1);
    expect(stoke).to.not.equal(-1);
  });
});