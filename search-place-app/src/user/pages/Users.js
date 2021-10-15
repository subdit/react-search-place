import React from "react"

import UsersList from "../components/UsersList"

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sub Bualoeng",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Prathatphanom_03.jpg/1280px-Prathatphanom_03.jpg",
      places: 3
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
