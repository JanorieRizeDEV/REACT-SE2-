import React, {useState} from 'react'

const MensajeCondicional = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState('')
  return (
    <div>
      <input 
        type="text" 
        placeholder='Escribe algo...'
        value={mostrarMensaje}
        // Controlamos el input vinculándolo al estado `mostrarMensaje`.
        // Cada cambio actualiza el estado con el valor actual del input.
        onChange={(e) => setMostrarMensaje(e.target.value)}
      />
      {/*
        Renderizado condicional:
        - Si `mostrarMensaje` tiene contenido se muestra el mensaje.
        - Si está vacío se muestra un texto alternativo.
      */}
      {mostrarMensaje ? <p>Tu mensaje es: {mostrarMensaje}</p> : <p>No hay mensaje para mostrar</p>}
      {/* Uso del operador && para mostrar el botón solo si hay mensaje */}
      {mostrarMensaje && <button onClick={() => {alert(`Mensaje enviado. Mensaje: ${mostrarMensaje}`)}}>Borrar mensaje</button>}
    </div>
  )
}

export default MensajeCondicional
