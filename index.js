#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"
'use strict';

const CFonts = require('cfonts')

CFonts.say('Salam Alaikum', { font: 'slick', colors: ['yellow', '#333']})
CFonts.say('Salam Alaikum', { font: 'grid', colors: ['yellow', '#333']})
CFonts.say('Salam Alaikum', { font: 'pallet', colors: ['yellow', '#333']})
