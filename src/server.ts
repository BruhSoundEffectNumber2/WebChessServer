import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer, {
    // Options
});

// We are not serving files to the client, so set the flag to false
io.serveClient(false);

io.on("connection", (socket) => {
    console.log("A user connected.");
});

io.listen(3000);