import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Sidebar() {
    const rooms = ['general', 'food', 'books', 'travel']

  return (
    <>
        <h2>Rooms</h2>
        <ListGroup>
            {rooms.map((room, i) => (
                <ListGroup.Item key={i}>{room}</ListGroup.Item>
            ))}
        </ListGroup>
        <h2>Members</h2>
    </>
  )
}

export default Sidebar