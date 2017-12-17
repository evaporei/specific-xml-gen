const { expect } = require('chai')
const parser = require('../../')

describe('specific-xml-gen', () => {
  const obj1 = {
    prop1: 'a',
    prop2: 2,
    prop3: {
      bla1: 1234,
      bla2: true,
      bla3: {
        moreStuff: 4,
      },
    },
    prop4: [
      {
        n: 'bla',
        v: 5,
      },
      {
        n: 'blu',
        v: 5,
        zup: {
          stuff: false,
        },
      },
    ]
  }

  it('should generate parsed xml', () => {
    expect(parser(obj1)).to.equal(`<prop1>a</prop1>
<prop2>2</prop2>
<prop3>
<bla1>1234</bla1>
<bla2>true</bla2>
<bla3>
<moreStuff>4</moreStuff>
</bla3>
</prop3>
<prop4>
<prop>
<n>bla</n>
<v>5</v>
</prop>
<prop>
<n>blu</n>
<v>5</v>
<zup>
<stuff>false</stuff>
</zup>
</prop>
</prop4>`)
  })

  it('should generate parsed xml with capitalized tags', () => {
    expect(parser(obj1, true)).to.equal(`<Prop1>a</Prop1>
<Prop2>2</Prop2>
<Prop3>
<Bla1>1234</Bla1>
<Bla2>true</Bla2>
<Bla3>
<MoreStuff>4</MoreStuff>
</Bla3>
</Prop3>
<Prop4>
<Prop>
<N>bla</N>
<V>5</V>
</Prop>
<Prop>
<N>blu</N>
<V>5</V>
<Zup>
<Stuff>false</Stuff>
</Zup>
</Prop>
</Prop4>`)
  })
})
