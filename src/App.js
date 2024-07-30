import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://res.cloudinary.com/dacieg7ya/image/upload/v1721985201/WhatsApp_Image_2024-07-24_at_12.08.43_wfr2mc.jpg',
    name: 'Koumudhi',
    role: 'Degree Integrated With Civils',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://res.cloudinary.com/dacieg7ya/image/upload/v1721985210/WhatsApp_Image_2024-07-24_at_12.04.37_ppola6.jpg',
    name: 'Vaishnavi',
    role: 'Degree Integrated With Civils',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://res.cloudinary.com/dacieg7ya/image/upload/v1721985187/WhatsApp_Image_2024-07-24_at_12.18.16_iqrhew.jpg',
    name: 'Padmasree',
    role: 'Degree Integrated With Civils',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://res.cloudinary.com/dacieg7ya/image/upload/v1721985219/WhatsApp_Image_2024-07-26_at_14.37.47_rtnnsk.jpg',
    name: 'Prasanna',
    role: 'Degree Integrated With Civils',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
