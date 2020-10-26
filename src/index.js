import React, { useEffect, useState } from 'react'

/**
 * A custom React Hook that provides a random quote
 * @param {Object} options - Optional parameters.
 * @param {number} options.interval Optional interval; if provided the hook will request a random quote at every specified interval
 * @returns {Object} Contains quote's information such as loading, error and the text value
 */
export const useRandomQuote = (options = {}) => {
  const [quote, setQuote] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { interval = 0 } = options
  let timer = null

  const getQuote = async () => {
    setLoading(true)

    try {
      const response = await fetch('https://type.fit/api/quotes')
      const json = await response.json()

      if (response.ok) {
        const randomQuote = json[Math.floor(Math.random() * json.length)]

        if (randomQuote) {
          setQuote(randomQuote)
        }
      }

      if (!response.ok) {
        setError(json)
      }

      setLoading(false)
    } catch (e) {
      console.warn('Error fetching random quote:', e);

      setError(e.toString())
      setLoading(false)
    }
  }

  useEffect(() => {
    getQuote()

    if (interval) {
      timer = window.setInterval(getQuote, interval)
    }

    return () => {
      if (interval) {
        window.clearInterval(timer);
      }
    }
  }, [])

  return {
    loading,
    quote,
    error,
    getQuote
  }
}
