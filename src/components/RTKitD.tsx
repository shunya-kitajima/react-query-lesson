import { useAppSelector } from '../app/hooks'
import { selectMode } from '../slices/counterSlice'

const RTKitD: React.FC = () => {
  const mode = useAppSelector(selectMode)
  console.log('rendered RTKitD')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-3">RTKitD</p>
      <p className="text-blue-500">{mode ? 'mode on' : 'mode off'}</p>
    </div>
  )
}

export default RTKitD
