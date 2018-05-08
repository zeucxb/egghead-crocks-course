const crocks = require('crocks');
const { compose, chain, option, Maybe, prop, safe, map, alt } = crocks;
const { createUrl, isNonEmptyString } = require('./utils');

const article = {
  id: 1,
  name: 'Learn FP with this one weird trick',
};

const getSluggableName = compose(
  chain(safe(isNonEmptyString)),
  prop('name')
);

const getUrlOrDefault = compose(
  option('default'),
  map(createUrl)
);

const getUrl = compose(
  console.log,
  getUrlOrDefault,
  getSluggableName
);

const getUrlOrNope = compose(
  console.log,
  getUrlOrDefault,
  alt(Maybe.of('Nope')),
  getSluggableName
);

const getUrlOrWoops = compose(
  console.log,
  getUrlOrDefault,
  alt(Maybe.of('Woops')),
  getSluggableName
);

const url1 = getUrl(article);
const url2 = getUrl({});
const url3 = getUrlOrNope({});
const url4 = getUrlOrWoops({});