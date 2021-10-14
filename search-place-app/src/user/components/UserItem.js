import React from "react"
import { Link } from "react-router-dom"

import "./UserItem.css"
import Card from "../../shared/components/UIElements/Card"
import Avatar from "../../shared/components/UIElements/Avatar"

const UserItem = props => {
  return (
    <li className='user-item'>
      <Card className='user-item_content'>
        {/*  use string literal for passing the value */}
        <Link to={`/${props.id}/places`}>
          <div className='user-item_image'>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className='user-item_info'>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  )
}

export default UserItem
