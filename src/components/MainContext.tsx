import ClassicalFetchA from './ClassicalFetchA'
import ClassicalFetchB from './ClassicalFetchB'
import ContextA from './ContextA'
import ContextB from './ContextB'

const MainContext: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <ClassicalFetchA />
      <ClassicalFetchB />
      <ContextA />
      <ContextB />
    </div>
  )
}

export default MainContext
