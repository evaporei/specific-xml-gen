const {
  map,
  pipe,
  keys,
  join,
  split,
} = require('ramda')

const makeTag = obj => k => `<${k}>${obj[k]}</${k}>`

const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`

const parser = (obj, propName) =>
  pipe(
    keys,
    map(k => {
      if (Array.isArray(obj[k])) {
        if (/^\d+$/g.test(k)) {
          return `<${propName}>\n${parser(obj[k], k)}\n</${propName}>`
        }
        return `<${k}>\n${parser(obj[k], k.slice(0, -1))}\n</${k}>`
      }
      if (typeof obj[k] === 'object') {
        if (/^\d+$/g.test(k)) {
          return `<${propName}>\n${parser(obj[k], k)}\n</${propName}>`
        }
        return `<${k}>\n${parser(obj[k])}\n</${k}>`
      }
      return makeTag(obj)(k)
    }),
    join('\n')
  )(obj)

const capitalizeTag = tag =>
  tag.replace(/<(\/?|)(\w)/g, (_, m1, m2) => '<' + m1 + m2.toUpperCase())

const parserCapitalize = obj =>
  pipe(
    parser,
    split('\n'),
    map(capitalizeTag),
    join('\n')
  )(obj)

module.exports = {
  makeTag,
  capitalize,
  capitalizeTag,
  parser,
  parserCapitalize,
}
