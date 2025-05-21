// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, change, isActive} = props
  const {displayText, tabId} = tabDetails
  const update = () => {
    change(tabId)
  }
  const tabClassName = isActive ? 'tab' : ''
  return (
    <li className="list">
      <button
        type="button"
        className={`tab-btn ${tabClassName}`}
        onClick={update}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
