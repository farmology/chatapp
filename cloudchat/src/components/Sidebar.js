import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { AppContext } from '../context/appContext';

function Sidebar() {
    // const rooms = ['general', 'food', 'books', 'travel']
    const user = useSelector((state) => state.user);
    const {socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages} = useContext(AppContext);
    socket.off('new-user').on('new-user', (payload) => {
      console.log(payload);
      setMembers(payload);
    } )
    if (!user) {
      return <></>;
    }
    
    function getRooms() {
      fetch('http://localhost:5001/rooms')
        .then((res) => res.json())
        .then((data) => setRooms(data));
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
        <ListGroup>
        {members.map((member) => (
          <ListGroup.Item key={member._id} style={{cursor: 'pointer'}} >{member.name}</ListGroup.Item>
        ))}
        </ListGroup>
    </>
  )
}

export default Sidebar