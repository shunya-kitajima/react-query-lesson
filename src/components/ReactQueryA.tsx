import { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

import { useQueryTasks } from '../hooks/useQueryTasks'

const ReactQueryA: VFC = () => {
  const navigate = useNavigate()
  const { status, data } = useQueryTasks()

  if (isLoading) return <div>{'Loading...'}</div>
  if (isError) return <div>{'Error'}</div>
  return <div>ReactQueryA</div>
}

export default ReactQueryA
