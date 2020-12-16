import React, { useState } from 'react'

export const BandAdd = ({ crearBanda }) => {

    const [valor, setValor] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();

        if(valor.trim().length > 0){
            //aqui llamamos la funcion para emitir el evento
            crearBanda( valor );

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
