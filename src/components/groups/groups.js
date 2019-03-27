import React from 'react'
import 'bulma'
import axios from 'axios'
import Group from './group'
import CreateGroup from './createGroup'

class Groups extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }

    this.getAllGroups = this.getAllGroups.bind(this)
    this.getAllGroupsForUpdate = this.getAllGroupsForUpdate.bind(this)
    this.childRerendersPage = this.childRerendersPage.bind(this)
  }

  getAllGroups() {
    axios.get('/api/groups', {
    })
      .then(res => this.setState({ groups: res.data }))
  }

  getAllGroupsForUpdate() {
    axios.get('/api/groups', {
    })
      .then(res => {
        if(res.data.length !== this.state.groups.length) {
          this.setState({ groups: res.data })
        }
      })
  }

  componentDidMount() {
    this.getAllGroups()
  }
  componentDidUpdate() {
    this.getAllGroupsForUpdate()
  }

  childRerendersPage() {
    this.setState(this.state)
  }

  render() {
    if(!this.state.groups) return null
    return(
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            <CreateGroup rerender={this.childRerendersPage}/>
            {this.state.groups.map(group =>
              <Group {...group} key={group._id} rerender={this.childRerendersPage} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Groups
