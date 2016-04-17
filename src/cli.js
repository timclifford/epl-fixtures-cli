#! /usr/bin/env node

'use strict';

const Fixtures = require('epl-fixtures');
const pckg = require('../package.json');
const program = require('commander');
const moment = require('moment');
const Table = require('cli-table');

program.version(pckg.version, '-v, --version');

const clubs = {
  arsenal: 'arsenal',
  astonvilla: 'aston villa',
  bournemouth: 'bournemouth',
  chelsea: 'chelsea',
  crystalpalace: 'crystal palace',
  everton: 'everton',
  leicester: 'leicester',
  liverpool: 'liverpool',
  mancity: 'man city',
  manutd: 'man utd',
  newcastle: 'newcastle',
  norwich: 'norwich',
  southampton: 'southampton',
  stoke: 'stoke',
  sunderland: 'sunderland',
  swansea: 'swansea',
  spurs: 'spurs',
  tottenham: 'tottenham',
  watford: 'watford',
  westbrom: 'west brom',
  westham: 'west ham'
}

let chosenClub = 'all';

for (const attr in clubs) {
  program.option('--' + attr, clubs[attr], function () {
    chosenClub = clubs[attr];
  });
}

program.parse(process.argv);

const render = function (data) {
  const table = new Table();

  const showUserLocaleTime = data[0].time !== data[0].userLocaleTime;

  const headerSchema = ['Time and date', 'Home team', 'Away team', 'Stadium', 'Competition'];

  if (showUserLocaleTime) {
    headerSchema.push(['Your TZ']);
  }

  table.push(headerSchema);

  data.forEach(function (match) {
    const schema = [
      moment(match.time + ' ' + match.date, 'HH:mm dddd DD MMMM YYYY').format('ddd Do MMM HH:mm'),
      match.clubs[0],
      match.clubs[1],
      match.location,
      match.competition
    ];

    if (showUserLocaleTime) {
      schema.push(match.userLocaleTime);
    }

    table.push(schema);
  });

  return table.toString();
}

if (require.main === module) {
  if (chosenClub !== 'all') {
    return new Fixtures().club(chosenClub, function (err, matches) {
      console.log(render(matches));
    });
  }

  return new Fixtures().all(function (err, matches) {
    console.log(render(matches));
  });
} else {
  module.exports = {
    club: function (club, callback) {
      new Fixtures().club(club, function (err, matches) {
        callback(render(matches));
      });
    },

    all: function (callback) {
      new Fixtures().all(function (err, matches) {
        callback(render(matches));
      });
    }
  };
}