'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const exec = require("child_process").exec;
let captured_stdout = '';

describe('Running CLI without any params', function () {

  before(function (done) {
    exec('node ./src/cli.js', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('gives output', function () {
    console.log(captured_stdout);
    expect(captured_stdout.length).to.not.equal(0);
  });
});