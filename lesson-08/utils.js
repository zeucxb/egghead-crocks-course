const crocks = require('crocks');
const { and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks;
const { join, split, toLower } = require('ramda');

const isNonEmptyString = and(not(isEmpty), isString);
const createUrlSlung = compose(join('-'), split(' '), toLower);
const createUrl = name => `https://egghead.io/articles/${createUrlSlung(name)}`;

const getArticleName = obj => prop('name', obj)
  .chain(safe(isNonEmptyString));

const getDefaultPageName = (flag) => flag
  ? () => 'Not Fount'
  : () => 'Uh Oh';

const getDefaultPageUrl = (flag) => flag
  ? () => createUrl('Not Fount')
  : () => createUrl('Uh Oh');

module.exports = {
  createUrl,
  getArticleName,
  getDefaultPageName,
  getDefaultPageUrl,
};