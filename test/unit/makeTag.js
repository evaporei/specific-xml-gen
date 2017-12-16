const { expect } = require('chai')
const { makeTag } = require('../../lib')

describe('makeTag', () => {
  const obj = {
    prop1: 'b',
    prop2: 1234,
    prop3: {
      stuff: 'zzz',
    },
    prop4: [{a: 4}, {a: true}],
    prop5: [1,2,3,4],
  }
  it('should return a function when passed an object', () => {
    expect(makeTag(obj)).to.be.an('function')
  })
  it('should return a tag of property 1', () => {
    expect(makeTag(obj)('prop1')).to.equal('<prop1>b</prop1>')
  })
  it('should return a tag of property 2', () => {
    expect(makeTag(obj)('prop2')).to.equal('<prop2>1234</prop2>')
  })
  it('should return a tag of property 3', () => {
    expect(makeTag(obj)('prop3'))
      .to.equal('<prop3>[object Object]</prop3>')
  })
  it('should return a tag of property 3 \'stuff\' property', () => {
    expect(makeTag(obj.prop3)('stuff'))
      .to.equal('<stuff>zzz</stuff>')
  })
  it('should return a tag of property 4 property', () => {
    expect(makeTag(obj)('prop4'))
      .to.equal('<prop4>[object Object],[object Object]</prop4>')
  })
  it('should return a tag of property 5 property', () => {
    expect(makeTag(obj)('prop5'))
      .to.equal('<prop5>1,2,3,4</prop5>')
  })
})
