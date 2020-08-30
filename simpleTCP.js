//Import net fra Node.js for at oprette socket
const net = require("net")

// Laver en socket og skriver "Hello" ved TCP connection
const server = net.createServer(socket => {
    socket.write("Hello.")
    //Ved modtagelse af data, skrives data i loggen
    socket.on("data", data => {
        console.log(data.toString())
    })
})

//Lytter ved port 8080 (HTTP)
server.listen(8080)