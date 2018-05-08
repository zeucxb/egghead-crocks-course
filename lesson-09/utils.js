const crocks = require('crocks');
const { and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks;
const { join, split, toLower } = require('ramda');

const isNonEmptyString = and(not(isEmpty), isString);
const createUrlSlung = compose(join('-'), split(' '), toLower);
const createUrl = name => `https://egghead.io/articles/${createUrlSlung(name)}`;

module.exports = {
  createUrl,
  isNonEmptyString,
};