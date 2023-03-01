const socketController = (socket) => {
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => { 
        console.log('Cliente desconectado', socket.id)
    });

    // Recive la información desde el cliente
    socket.on('enviar-mensaje', (payload, callback) => { 

        const id = 123456;
        callback(id);


        // Enviar al cliente
       socket.broadcast.emit('enviar-mensaje', payload);
    });
}


module.exports = {
    socketController
}