class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {

        this.io.on('connection', (socket) => {

            socket.on('chat', (data) => {
                this.io.emit('chat-servidor', data);
            });

        });
    }

}

module.exports = Sockets;