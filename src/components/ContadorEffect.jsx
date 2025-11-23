import React,{useState,useEffect} from 'react'

const ContadorEffect = () => {
const [contador, setContador] = useState(0)
// `contador` es el estado local que representa el número actual.
useEffect(() => {
    // Este efecto se ejecuta cada vez que `contador` cambia.
    // Aquí solo registramos un mensaje en la consola, pero en apps reales
    // podríamos sincronizar con APIs, localStorage, o suscripciones.
    console.log(`El contador ha cambiado: ${contador}`)
}, [contador])

  return (
    <div>
      {/* Mostrar valor actual del contador */}
      <p> has hecho clic {contador} veces (con useEffect) </p>
      {/*
        Al actualizar el estado usamos la forma funcional `prev => prev + 12`.
        Esto evita problemas con cierres (stale state) cuando varias actualizaciones
        ocurren rápidamente.
      */}
      <button onClick={() => setContador(prev => prev + 12)}>
        incrementar</button>
    </div>
  )
}

export default ContadorEffect

