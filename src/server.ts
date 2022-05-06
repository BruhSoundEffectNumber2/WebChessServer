import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: {
    origin: [
        "localhost:8080",
        /\.netlify\.app/
    ]
}});

let usersConnected = 0;

io.on("connection", (socket) => {
    usersConnected++;
    console.log("A user connected. Active users: " + usersConnected);

    io.on("disconnect", (reason) => {
        usersConnected--;
        console.log("A user disconnected. Active users: " + usersConnected);
    });
});

io.listen(3000);
console.log("Listening");