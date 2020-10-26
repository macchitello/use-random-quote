# use-random-quote

> A custom React Hook that provides a random quote.
It uses the [https://type.fit/api/quotes](https://type.fit/api/quotes) endpoint to retrieve random quotes.

[![NPM](https://img.shields.io/npm/v/use-random-quote.svg)](https://www.npmjs.com/package/use-random-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @macchitello/use-random-quote

or

yarn add @macchitello/use-random-quote
```

## Usage

```jsx
import React, { Component } from 'react'

import { useRandomQuote } from 'use-random-quote'

const App = () => {
  const { loading, quote, error } = useRandomQuote()
  /**
   * loading {boolean} - loading state
   * error {string} - error message in case of API failure
   * quote {Object}
   * quote.author {string} - qoute's author
   * quote.text {string} - qoute's body
  */

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
