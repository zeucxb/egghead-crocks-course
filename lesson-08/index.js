const {
  createUrl,
  // getDefaultPageName,
  getDefaultPageUrl,
  getArticleName,
} = require('./utils')

const article = {
  id: 1,
  name: 'Learn FP with this one weird trick',
};

const abFlag = true;
// const getDefaultFromNothing = getDefaultPageName(abFlag);
const getDefaultFromNothing = getDefaultPageUrl(abFlag);

const url = getArticleName(article)
  .coalesce(
    getDefaultFromNothing,
    // x => x
    createUrl
  )
  // .map(createUrl)
  .option('default')

console.log(url);