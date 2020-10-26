import { enableMocks } from 'jest-fetch-mock';
enableMocks();

import { useRandomQuote } from './'
import { renderHook, act } from "@testing-library/react-hooks";

const MOCK_QUOTES = [
  { author: 'Author 1', text: 'We are all one.' },
  { author: 'Author 2', text: "If you choose first, you don't let other choose for you" },
];

const API_ERROR_MESSAGE = 'API is down';

beforeEach(() => {
  fetch.resetMocks()
})

describe('useRandomQuote', () => {
  it('should fetch quotes and update state with a random quote', async () => {
    fetch.mockResponseOnce(JSON.stringify(MOCK_QUOTES))

    const { result, waitForNextUpdate } = renderHook(() => useRandomQuote());
    const { loading, error, quote } = result.current;

    expect(loading).toBe(true);
    expect(error).toBe('');
    expect(quote).toStrictEqual({});

    // used when effects include async functions
    // more info: https://github.com/testing-library/react-hooks-testing-library/issues/14
    await act(async () => {
      await waitForNextUpdate();

      const {
        loading: loadingUpdate,
        error: errorUpdate,
        quote: quoteUpdate
      } = result.current;

      expect(loadingUpdate).toBe(false);
      expect(errorUpdate).toBe('');
      expect(MOCK_QUOTES).toContainEqual(quoteUpdate);
    });
  })
  
  it('should return an error in case of API failure', async () => {
    fetch.mockReject(() => Promise.reject(API_ERROR_MESSAGE));

    const { result, waitForNextUpdate } = renderHook(() => useRandomQuote());
    const { loading, error, quote } = result.current;

    expect(loading).toBe(true);
    expect(error).toBe('');
    expect(quote).toStrictEqual({});

    await act(async () => {
      await waitForNextUpdate();

      const {
        loading: loadingUpdate,
        error: errorUpdate,
        quote: quoteUpdate
      } = result.current;

      expect(loadingUpdate).toBe(false);
      expect(errorUpdate).toBe(API_ERROR_MESSAGE);
      expect(quoteUpdate).toStrictEqual(quote);
    });
  })

  it('should handle an empty list', async () => {
    fetch.mockResponseOnce(JSON.stringify([]))

    const { result, waitForNextUpdate } = renderHook(() => useRandomQuote());
    const { loading, error, quote } = result.current;

    expect(loading).toBe(true);
    expect(error).toBe('');
    expect(quote).toStrictEqual({});

    await act(async () => {
      await waitForNextUpdate();

      const {
        loading: loadingUpdate,
        error: errorUpdate,
        quote: quoteUpdate
      } = result.current;

      expect(loadingUpdate).toBe(false);
      expect(errorUpdate).toBe('');
      expect(quoteUpdate).toStrictEqual(quote);
    });
  })
});
