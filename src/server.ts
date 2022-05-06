import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "http://localhost:8080" } });

io.on("connection", (socket) => {
    console.log("A user connected.");

    socket.on("hello", (...args) => {
        console.log("message received!");
    });
});

io.listen(3000);
console.log("Listening");