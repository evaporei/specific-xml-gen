const { expect } = require('chai')
const { capitalize } = require('../../lib')

describe('capitalize', () => {
  it('should capitalize a lowercase string', () => {
    const string = 'abcd'
    const capitalized = capitalize(string)
    expect(capitalized).to.equal('Abcd')
  })
  it('should do nothing to a uppercase string', () => {
    const string = 'ABCD'
    const capitalized = capitalize(string)
    expect(capitalized).to.equal('ABCD')
  })
  it('should do nothing to an already capitalized string', () => {
    const string = 'Abcd'
    const capitalized = capitalize(string)
    expect(capitalized).to.equal('Abcd')
  })
})
