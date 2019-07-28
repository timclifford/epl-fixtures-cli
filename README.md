# epl-fixtures-cli
> CLI for getting fixtures for Premier League clubs
> (Premier League, FA Cup, Capital One Cup, Champions League, Europa League)

[![Build Status](https://travis-ci.org/ecrmnn/epl-fixtures-cli.svg?branch=master)](https://travis-ci.org/ecrmnn/epl-fixtures-cli)
[![npm version](https://img.shields.io/npm/v/epl-fixtures-cli.svg)](http://badge.fury.io/js/epl-fixtures-cli)
[![npm version](https://img.shields.io/npm/dm/epl-fixtures-cli.svg)](http://badge.fury.io/js/epl-fixtures-cli)
[![npm version](https://img.shields.io/npm/l/epl-fixtures-cli.svg)](http://badge.fury.io/js/epl-fixtures-cli) [![Greenkeeper badge](https://badges.greenkeeper.io/timclifford/epl-fixtures-cli.svg)](https://greenkeeper.io/)

### Installation
```bash
npm install --global epl-fixtures-cli
```

### Usage
Get all upcoming matches by simply typing ``fixtures`` in the command line
```bash
fixtures

┌────────────────────┬─────────────────────┬─────────────────────┬───────────────────────┬─────────────────────────┬───────────┐
│ Time and date      │ Home team           │ Away team           │ Stadium               │ Competition             │ Your TZ   │
├────────────────────┼─────────────────────┼─────────────────────┼───────────────────────┼─────────────────────────┼───────────┤
│ Sun 17th Apr 13:30 │ Bournemouth         │ Liverpool           │ Vitality Stadium      │ Barclays Premier League │ 14:30     │
├────────────────────┼─────────────────────┼─────────────────────┼───────────────────────┼─────────────────────────┼───────────┤
│ Sun 17th Apr 13:30 │ Leicester           │ West Ham            │ King Power Stadium    │ Barclays Premier League │ 14:30     │
├────────────────────┼─────────────────────┼─────────────────────┼───────────────────────┼─────────────────────────┼───────────┤
│ Sun 17th Apr 16:00 │ Arsenal             │ Crystal Palace      │ Emirates Stadium      │ Barclays Premier League │ 17:00     │
└────────────────────┴─────────────────────┴─────────────────────┴───────────────────────┴─────────────────────────┴───────────┘
```

Get upcoming matches for specific club by adding the club as a flag
```bash
fixtures --liverpool

┌────────────────────┬─────────────┬────────────┬──────────────────┬─────────────────────────┬───────────┐
│ Time and date      │ Home team   │ Away team  │ Stadium          │ Competition             │ Your TZ   │
├────────────────────┼─────────────┼────────────┼──────────────────┼─────────────────────────┼───────────┤
│ Sun 17th Apr 13:30 │ Bournemouth │ Liverpool  │ Vitality Stadium │ Barclays Premier League │ 14:30     │
├────────────────────┼─────────────┼────────────┼──────────────────┼─────────────────────────┼───────────┤
│ Wed 20th Apr 20:00 │ Liverpool   │ Everton    │ Anfield          │ Barclays Premier League │ 21:00     │
├────────────────────┼─────────────┼────────────┼──────────────────┼─────────────────────────┼───────────┤
│ Sat 23rd Apr 15:00 │ Liverpool   │ Newcastle  │ Anfield          │ Barclays Premier League │ 16:00     │
└────────────────────┴─────────────┴────────────┴──────────────────┴─────────────────────────┴───────────┘
```

Club flags
```bash
fixtures --arsenal
fixtures --astonvilla
fixtures --bournemouth
fixtures --chelsea
fixtures --crystalpalace
fixtures --everton
fixtures --leicester
fixtures --liverpool
fixtures --mancity
fixtures --manutd
fixtures --newcastle
fixtures --norwich
fixtures --southampton
fixtures --stoke
fixtures --sunderland
fixtures --swansea
fixtures --spurs
fixtures --tottenham
fixtures --watford
fixtures --westbrom
fixtures --westham
```

### Related
- [epl-fixtures](https://github.com/ecrmnn/epl-fixtures) - API for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)