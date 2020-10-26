import React, { Fragment } from 'react'
import { useRandomQuote } from 'use-random-quote'
import './index.css'

import styles from './App.module.css'

const App = () => {
  const {
    getQuote,
    loading: loadingQuote,
    error: quoteError,
    quote
  } = useRandomQuote({ interval: 0 })

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        <span>Random quote generator</span>
        <button onClick={getQuote}>Request Quote</button>
      </h2>
      {loadingQuote && <span>Loading...</span>}
      {!loadingQuote && (
        <div className={styles.quoteInfo}>
          {quoteError ? (
            <span>{`Error: ${quoteError}`}</span>
          ) : (
            <Fragment>
              <div className={styles.quoteField}>
                <label className={styles.quoteLabel}>Author</label>
                <span>{quote.author}</span>
              </div>
              <div className={styles.quoteField}>
                <label className={styles.quoteLabel}>Quote:</label>
                <span>{quote.text}</span>
              </div>
            </Fragment>
          )}
        </div>
      )}
    </div>
  )
}

export default App
