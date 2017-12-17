module.exports = (obj, capitalize = false) =>
  capitalize ?
    require('./lib').parserCapitalize(obj) :
    require('./lib').parser(obj)
