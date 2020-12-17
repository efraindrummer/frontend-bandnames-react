import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {

    const [valor, setValor] = useState('');
    const { socket } = useContext(SocketContext);

    const onSubmit = (ev) => {
        ev.preventDefault();

        if(valor.trim().length > 0){
            socket.emit('crear-banda', { nombre: valor }); //emitir el evento
            setValor('');
        }
    }

    return (
        <>
            <h3>Agregar Banda</h3>
        
            <form onSubmit= { onSubmit }>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nueva banda" 
                    value={ valor }
                    onChange={ (ev) => setValor(ev.target.value) }
                />    
            </form>   
        </>
    )
}
