import React, { useContext, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { AppContext } from '../context/appContext';

function Sidebar() {
    // const rooms = ['general', 'food', 'books', 'travel']
    const user = useSelector((state) => state.user);
    const {socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages} = useContext(AppContext);
    
    function joinRoom(room, isPublic = true) {
      if (!user) {
        return alert('Please log in')
      }
      socket.emit('join-room', room);
      setCurrentRoom(room);

      if(isPublic) {
        setPrivateMemberMsg(null)
      }

      // notifications
      
    }

    useEffect(() => {
      if(user) {
        setCurrentRoom('general');
        getRooms();
        socket.emit('join-room', 'general');
        socket.emit('new-user');
      }
    }, [])

    socket.off('new-user').on('new-user', (payload) => {
      
      setMembers(payload);
    } )
    
    function getRooms() {
      fetch('http://localhost:5001/rooms')
        .then((res) => res.json())
        .then((data) => setRooms(data));
    }

    function orderIds(id1, id2) {
      if(id1 > id2) {
        return id1 + '-' + id2;
      } else {
        return id2 + '-' + id1;
      }
    }

    function handlePrivateMemberMsg(member) {
      setPrivateMemberMsg(member);
      const roomId = orderIds(user._id, member._id);
      joinRoom(roomId, false);
      
    }

    if (!user) {
      return <></>;
    }
    
  return (
    <>
        <h2>Topics</h2>
        <ListGroup>
            {rooms.map((room, i) => (
                <ListGroup.Item key={i} onClick={() => joinRoom(room)} active={room == currentRoom} style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between'}}>
                  {room} {currentRoom !== room && <span></span>}
                </ListGroup.Item>
            ))}
        </ListGroup>
        <h2>Members</h2>
        <ListGroup>
        {members.map((member) => (
          <ListGroup.Item key={member._id} style={{cursor: 'pointer'}} active={privateMemberMsg?._id == member?._id} onClick={() => handlePrivateMemberMsg(member)} disabled={member._id === user._id} >{member.name}</ListGroup.Item>
        ))}
        </ListGroup>
    </>
  )
}

export default Sidebar