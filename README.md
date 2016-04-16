# epl-fixtures-cli
> CLI for getting fixtures for Premier League clubs
> (Premier League, FA Cup, Capital One Cup, Champions League, Europa League)

[![Build Status](https://travis-ci.org/ecrmnn/epl-fixtures-cli.svg?branch=master)](https://travis-ci.org/ecrmnn/epl-fixtures-cli)
[![npm version](https://img.shields.io/npm/v/epl-fixtures-cli.svg)](http://badge.fury.io/js/epl-fixtures-cli)
[![npm version](https://img.shields.io/npm/dm/epl-fixtures-cli.svg)](http://badge.fury.io/js/epl-fixtures-cli)
[![npm version](https://img.shields.io/npm/l/epl-fixtures-cli.svg)](http://badge.fury.io/js/epl-fixtures-cli)

### Installation
```bash
npm install --global epl-fixtures-cli
```

### Usage
Get all upcoming matches
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

Get upcoming matches for specific club
```bash
fixtures --arsenal

┌────────────────────┬────────────┬────────────────┬──────────────────┬─────────────────────────┬───────────┐
│ Time and date      │ Home team  │ Away team      │ Stadium          │ Competition             │ Your TZ   │
├────────────────────┼────────────┼────────────────┼──────────────────┼─────────────────────────┼───────────┤
│ Sun 17th Apr 16:00 │ Arsenal    │ Crystal Palace │ Emirates Stadium │ Barclays Premier League │ 17:00     │
├────────────────────┼────────────┼────────────────┼──────────────────┼─────────────────────────┼───────────┤
│ Thu 21st Apr 19:45 │ Arsenal    │ West Brom      │ Emirates Stadium │ Barclays Premier League │ 20:45     │
└────────────────────┴────────────┴────────────────┴──────────────────┴─────────────────────────┴───────────┘
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