import React from "react"
import "./UserList.css"

const UserList = props => {
  // No user found
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No Users found!</h2>
      </div>
    )
  }
  return <ul>{}</ul>
}

export default UserList
