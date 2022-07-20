import { VFC } from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increment, selectCount } from '../slices/counterSlice'

const RTKitA: VFC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  console.log('rendered RTKitA')

  return <div>RTKitA</div>
}

export default RTKitA
