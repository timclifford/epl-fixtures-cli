'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const exec = require("child_process").exec;
let captured_stdout = '';

describe('Running CLI without any params', function () {

  before(function (done) {
    exec('node ./src/cli', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('gives output', function () {
    expect(captured_stdout.length).to.not.equal(0);
  });
});