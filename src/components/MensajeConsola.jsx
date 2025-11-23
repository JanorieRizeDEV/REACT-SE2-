import React,{useEffect} from 'react'

const MensajeConsola = () => {
    // useEffect con arreglo de dependencias vacío se ejecuta solo una vez
    // cuando el componente se monta. Aquí lo usamos para registrar un
    // mensaje en la consola como ejemplo de efecto secundario.
    useEffect(() => {
        console.log("Componente MensajeConsola montado")
    }, [])
  return (
    <div>
      {/* Indicamos al desarrollador que revise la consola del navegador */}
      Mira la consola del navegador
    </div>
  )
}

export default MensajeConsola
