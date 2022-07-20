import { VFC } from 'react'

import { useAppDispatch } from '../app/hooks'
import { increment } from '../slices/counterSlice'

const RTKitB: VFC = () => {
  const dispatch = useAppDispatch()
  console.log('rendered RTKitB')

  return <div>RTKitB</div>
}

export default RTKitB
