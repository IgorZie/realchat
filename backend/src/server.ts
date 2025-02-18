import http from "http"
import { Server } from "socket.io"
import { app } from './app'
import dotenv from 'dotenv'
dotenv.config()

const server = http.createServer(app)
// const io = new Server(server, {
//     cors: { 
//         origin: [
//             "http://localhost:3000"
//         ] 
//     }
// })

// io.on("connection", (socket) => {
//     console.log("Novo usuário conectado:", socket.id)

//     socket.on("message", (data) => {
//         console.log("Mensagem recebida:", data)
//         io.emit("message", data)
//     });

//     socket.on("disconnect", () => {
//         console.log("Usuário desconectado:", socket.id)
//     })
// })

server.listen(3333, () => {
    console.log(`Server is running on port ${process.env.APP_PORT} 🚀`)
})
