# Specific XML Gen
[![Build Status](https://travis-ci.org/otaviopace/specific-xml-gen.svg?branch=master)](https://travis-ci.org/otaviopace/specific-xml-gen)

This project is meant to generate XML based on a JavaScript object.

# Installation

`npm install --save specific-xml-gen`

# Usage

```javascript
const parser = require('specific-xml-gen')

const xml = parser({
  prop1: 4,
  props: [
    { a: 'b' },
    { z: true },
  ],
})

console.log(xml)
// <prop1>4</prop1>
// <props>
// <prop>
// <a>b</a>
// </prop>
// <prop>
// <z>true</z>
// </prop>
// </props/>
```
