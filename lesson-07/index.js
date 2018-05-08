const crocks = require('crocks');
const { and, compose, isEmpty, isString, Maybe, not, prop, safe } = crocks;
const { join, split, toLower } = require('ramda');

const isNonEmptyString = and(not(isEmpty), isString);
const createUrlSlung = compose(join('-'), split(' '), toLower);
const createUrl = slug => `https://egghead.io/articles/${slug}`;

const article = {
  id: 1,
  name: 'Learn FP with this one weird trick',
};

const createUrlFromName = compose(createUrl, createUrlSlung);
const getArticleName = obj => prop('name', obj)
  .chain(safe(isNonEmptyString))
  .alt(Maybe.of('Page Not Found'));

const url = getArticleName(article)
  .map(createUrlFromName)
  .option('default')

console.log(url);