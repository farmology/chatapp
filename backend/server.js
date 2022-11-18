const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const rooms = ['general', 'food', 'books', 'travel'];
const cors = require('cors');
const Message = require('./models/Message');
const User = require('./models/User');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);

require('./Connection')

const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

async function getLastMessagesFromRoom(room) {
    let roomMessages = await Message.aggregate([
        {$match: {to: room}},
        {$group: {_id: '$date', messagesByDate: {$push: '$$ROOT'}}}
    ])
    return roomMessages
}

function sortRoomMessagesByDate(messages) {
    return messages.sort(function(a, b) {
        let date1 = a._id.split('/');
        let date2 = b._id.split('/');

        date1 = date1[2] + date1[1] + date1[0]
        date2 = date2[2] + date2[1] + date2[0]
        
        return date1 < date2 ? -1 : 1
    })
}

// socket connection socket = user
io.on('connection', (socket) => {
    

    socket.on('new-user', async() => {
        const members = await User.find();
        io.emit('new-user', members)
        // emits to every user that new user has joined
    })
    // each user joins room
    socket.on('join-room', async(room) => {
        socket.join(room);
        let roomMessages = await getLastMessagesFromRoom(room);
        roomMessages = sortRoomMessagesByDate(roomMessages);
        socket.emit('room=messages', roomMessages)
    })
})

server.listen(PORT, () => {
    console.log('Listening to port', PORT)
})