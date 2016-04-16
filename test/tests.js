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
    const liverpool = (captured_stdout.match(/Liverpool/g) || []).length;
    const arsenal = (captured_stdout.match(/Arsenal/g) || []).length;
    const chelsea = (captured_stdout.match(/Chelsea/g) || []).length;
    const stoke = (captured_stdout.match(/Stoke/g) || []).length;

    expect(liverpool > 1).to.be.equal(true);
    expect(arsenal > 1).to.be.equal(true);
    expect(chelsea > 1).to.be.equal(true);
    expect(stoke > 1).to.be.equal(true);
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

    const liverpool = (captured_stdout.match(/Liverpool/g) || []).length;

    expect(liverpoolMatches.length).to.be.equal(liverpool);
    expect(liverpoolMatches.length).to.be.equal(clubMatches.length);
  });
});

describe('Running CLI help command', function () {
  before(function (done) {
    exec('node ./src/cli.js --help', function (error, stdout, stderr) {
      captured_stdout = stdout;
      done();
    });
  });

  it('returns available options', function () {
    expect(captured_stdout).to.have.string('Options:');
    expect(captured_stdout).to.have.string('--help');
    expect(captured_stdout).to.have.string('--version');
    expect(captured_stdout).to.have.string('--liverpool');
    expect(captured_stdout).to.have.string('--everton');
    expect(captured_stdout).to.have.string('--manutd');
  });
});