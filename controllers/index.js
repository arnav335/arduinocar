import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


const cars = [1,2,3,4]
const path = 'D:/aimodels/antiAccidentSystem'

const app = express();
const server = http.createServer(app);
const io = new Server(server)

function registerCar(socket) {
  const carID = cars.length++
  socket.emit('carRegistered', carID)
}

io.on('connection', (socket) => {
  console.log('a new user connected')
  socket.emit('cars', cars)

  socket.on('register', () => {
    registerCar(socket)
    socket.emit('cars', cars)
  })

  socket.on('command', (id,commands) => {
    console.log(id, commands)
    // socket.emit(id, cmd)
    // console.log(id, cmd)
  })
})


app.use(express.static(`${path}/controllers/public`))
app.get('/', (req, res) => {
  res.sendFile(`${path}/controllers/public/index.html`)
})
server.listen('9090', () => {
  console.log('HEY THERE!!! NodeJS Server successfully started on port 9090');
});
