import { useEffect, useRef } from 'react'

export const chunk = (arr, size) => {
  let i
  let j
  const data = []
  const chnk = size
  for (i = 0, j = arr.length; i < j; i += chnk) {
    data.push(arr.slice(i, i + chnk))
  }
  return data
}

export const useInterval = (callback, delay) => {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
