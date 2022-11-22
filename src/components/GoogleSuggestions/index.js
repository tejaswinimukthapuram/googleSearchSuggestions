// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const onSearchInputChange = event => {
      this.setState({searchInput: event.target.value})
    }
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const updateSearchInput = uniqueId => {
      const searchedItem = suggestionsList.filter(each => each.id === uniqueId)
      console.log(searchedItem)
      this.setState({searchInput: searchedItem[0].suggestion})
    }

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="card-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-box"
              placeholder="search google"
              onChange={onSearchInputChange}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                item={eachItem}
                key={eachItem.id}
                updateSearchInput={updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
