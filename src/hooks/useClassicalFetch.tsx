import { useState, useEffect } from 'react'
import axios from 'axios'

import { useStateContext } from '../context/StateProvider'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
    }
  }, [])

  return <div></div>
}

export default useClassicalFetch
