import RTKitA from './RTKitA'
import RTKitB from './RTKitB'
import RTKitC from './RTKitC'
import RTKitD from './RTKitD'

const MainRTKit: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <RTKitA />
      <RTKitB />
      <RTKitC />
      <RTKitD />
    </div>
  )
}

export default MainRTKit
