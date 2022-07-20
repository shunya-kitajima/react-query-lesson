import { VFC } from 'react'
import { useStateContext } from '../context/StateProvider'

const ContextB: VFC = () => {
  const { setDark } = useStateContext()
  console.log('rendered ContextA')

  return <div>ContextB</div>
}

export default ContextB
