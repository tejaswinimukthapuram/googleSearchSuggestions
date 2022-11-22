// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item} = props
  const {suggestion, id} = item
  const {updateSearchInput} = props
  const onClickArrow = () => {
    updateSearchInput(id)
  }

  return (
    <div className="list-item">
      <li>{suggestion}</li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickArrow}
      />
    </div>
  )
}

export default SuggestionItem
