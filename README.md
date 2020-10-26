# use-random-quote

> A custom React Hook that provides a random quote.

[![NPM](https://img.shields.io/npm/v/use-random-quote.svg)](https://www.npmjs.com/package/use-random-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-random-quote
```

## Usage

```jsx
import React, { Component } from 'react'

import { useRandomQuote } from 'use-random-quote'

const App = () => {
  const { loading, quote } = useRandomQuote()

  return (
    <div className={styles.main}>
      {loadingQuote && <span>Loading...</span>}
      {!loadingQuote && <div>{quote.text}</div>}
    </div>
  )
}
```

## License

MIT © [macchitello](https://github.com/macchitello)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
