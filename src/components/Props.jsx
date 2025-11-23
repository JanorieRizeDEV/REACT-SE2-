import React from 'react'

const Props = ({nombre}) => {
  // El componente recibe `nombre` como prop y lo muestra.
  // Desestructuramos las props directamente en la firma de la función.
  return (
    <div>
      {/* Mostramos el nombre pasado desde el padre */}
      <h1> hola,{nombre}</h1>
    </div>
  )
}

export default Props
