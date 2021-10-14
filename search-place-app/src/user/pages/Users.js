import React from "react"

import UsersList from "../components/UsersList"

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sub Bualoeng",
      image:
        "https://media.istockphoto.com/photos/aerial-view-of-kualoa-area-of-oahu-hawaii-picture-id938335974?b=1&k=20&m=938335974&s=170667a&w=0&h=dVrv6pCmMpICvTikPT0GygUsDZxl4dLbr_aT_JnSZf8=",
      places: 3
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
