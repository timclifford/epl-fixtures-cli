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
    console.log(captured_stdout);
    const liverpool = captured_stdout.indexOf('Liverpool');
    const arsenal = captured_stdout.indexOf('Arsenal');
    const chelsea = captured_stdout.indexOf('Chelsea');
    const stoke = captured_stdout.indexOf('Stoke');

    console.log(liverpool,arsenal,chelsea,stoke);

    expect(liverpool).to.not.equal(-1);
    expect(arsenal).to.not.equal(-1);
    expect(chelsea).to.not.equal(-1);
    expect(stoke).to.not.equal(-1);
  });
});

describe('Running CLI with club param', function () {
  let clubMatches = [];

  before(function (done) {
    new Fixtures().club('liverpool', function (err, matches) {
      clubMatches = matches;
      done();
    });
  });

  before(function (done) {
    exec('node ./src/cli liverpool', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns matches for specific clubs', function () {
    const liverpoolMatches = clubMatches.filter(function (match) {
      if (match.clubs[0] === 'Liverpool' || match.clubs[1] === 'Liverpool') {
        return match;
      }
    });

    expect(liverpoolMatches.length).to.be.equal(clubMatches.length);
  });
});

describe('Running CLI help command', function () {
  before(function (done) {
    exec('node ./src/cli --help', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns available options', function () {
    expect(captured_stdout).to.have.string('--help');
    expect(captured_stdout).to.have.string('--version');
    expect(captured_stdout).to.have.string('--liverpool');
    expect(captured_stdout).to.have.string('--everton');
    expect(captured_stdout).to.have.string('--manutd');
  });
});