import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Sidebar() {
    const rooms = ['general', 'food', 'books', 'travel']
    const user = useSelector((state) => state.user);
    if (!user) {
      return <></>;
    }
  return (
    <>
        <h2>Topics</h2>
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