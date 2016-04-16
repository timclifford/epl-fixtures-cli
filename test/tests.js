'use strict';

const cli = require('../src/cli');
const chai = require('chai');
const expect = require('chai').expect;

describe('Running CLI without any params', function () {
  let table1 = '';

  before(function (done) {
    cli.all(function (table) {
      table1 = table;
      done();
    });
  });

  it('returns matches for multiple clubs', function () {
    const liverpool = table1.indexOf('Liverpool');
    const arsenal = table1.indexOf('Arsenal');
    const chelsea = table1.indexOf('Chelsea');
    const stoke = table1.indexOf('Stoke');

    expect(liverpool).to.not.equal(-1);
    expect(arsenal).to.not.equal(-1);
    expect(chelsea).to.not.equal(-1);
    expect(stoke).to.not.equal(-1);
  });
});

describe('Running CLI with club param', function () {
  let table2 = '';

  before(function (done) {
    cli.club('liverpool', function (table) {
      table2 = table;
      done();
    })
  });

  it('returns matches for specific clubs', function () {
    const liverpool = (table2.match(/Liverpool/g) || []).length;
    const arsenal = (table2.match(/Arsenal/g) || []).length;
    const chelsea = (table2.match(/Chelsea/g) || []).length;
    const stoke = (table2.match(/Stoke/g) || []).length;

    expect(liverpool).to.be.above(1);
    expect(arsenal).to.be.below(liverpool);
    expect(chelsea).to.be.below(liverpool);
    expect(stoke).to.be.below(liverpool);
  });
});