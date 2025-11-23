import React from 'react'

const Controles = ({setContador}) => {
  // `setContador` viene del componente padre y es la función para actualizar
  // el estado compartido. Aquí la usamos con la forma funcional cuando
  // incrementamos/decrementamos para garantizar que la actualización se
  // base en el valor más reciente.
  return (
    <div>
      {/* Incrementa en 1 usando actualización funcional para evitar race conditions */}
      <button onClick={() => setContador(prev => prev + 1)}>
        incrementar</button>
      {/* Decrementa en 1 */}
      <button onClick={() => setContador(prev => prev - 1)}>
        decrementar</button>
      {/* Reinicia el contador a 0 (aquí pasamos el valor directamente) */}
      <button onClick={() => setContador(0)}>
        reiniciar</button>
    </div>
  )
}

export default Controles
