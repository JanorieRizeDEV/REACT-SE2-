import React    from 'react'

const Contador = ({contador}) => {
    // Este componente es 'presentacional': solo muestra la prop que recibe.
    // No mantiene estado propio; recibe `contador` desde el componente padre.
  return (
    <div>
      {/* Muestra el número de clics que se pasa vía props */}
      <p> has hecho clic {contador} veces </p>
    </div>
  )
}

export default Contador
