# Unenglish

![npm](https://img.shields.io/npm/v/unenglish)

![npm bundle size](https://img.shields.io/bundlephobia/min/unenglish)

An npm package to transmogrify standard English strings.

# Installation

```
npm -i unenglish
```

# Update

```
npm -i unenglish@latest
```

# Usage

## node.js

```js
const uneng = require('unenglish');

// default is 'Japanglish'
console.log(uneng('This is a test sentence.'));
// => 匕井l乙 l乙 大 匕巳乙匕 乙巳冂匕巳冂匸巳.

// 0 is 'Japanglish'
console.log(uneng('This is a test sentence.', 0));
// => 匕井l乙 l乙 大 匕巳乙匕 乙巳冂匕巳冂匸巳.

// 1 is 'Diacritic'
console.log(uneng('This is a test sentence.', 1));
// => Ŧħíŝ íŝ å ŧèŝŧ ŝèñŧèñçè.

// 2 is 'Rot-13' or Caesar's Cypher
console.log(uneng('This is a test sentence.', 2));
// => Guvf vf n grfg fragrapr.

// and since Rot-13 is reversable:
console.log(uneng('Guvf vf n grfg fragrapr.', 2));
// => This is a test sentence.
```

## Vue.js

```js
<script>
import unenglish from 'unenglish';

export default {
  name: 'Footer',
  props: {
    msg: String
  },
  computed: {
    title(){
      return unenglish('This is the footer...', 0);
    }
  },
  methods: {
    paragraph() {
      return unenglish('This is why we cannot have good things.', 1);
    }
  }
}
</script>
```
