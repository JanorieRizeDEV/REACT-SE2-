import React from 'react'

const InputText = () => {
  // `text` es el estado que mantiene el valor del input controlado.
  // Usamos React.useState aquí (equivalente a `import { useState }`).
  const [text, setText] = React.useState('')  
  const manageChange = (event) => {
    // Actualizamos el estado cada vez que el usuario escribe.
    setText(event.target.value)
  }
  return (
    <div>
        <input type="text" 
        value={text} 
    onChange={manageChange}
        placeholder="Escribe algo..." />
    {/* Mostrar en tiempo real el texto que el usuario va escribiendo */}
    <p>Has escrito: {text}</p>
    </div>
  )
}

export default InputText
