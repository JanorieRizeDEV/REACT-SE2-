import React,{useState} from 'react'
import Login from './Login'
import Logout from './Logout'
const Sesion = () => {
    // `isLoggedIn` controla si mostramos la vista de sesión iniciada o la
    // vista de login. Inicialmente false (no autenticado).
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {/* Renderizado condicional: si `isLoggedIn` es true mostramos `Logout`, sino `Login` */}
        {isLoggedIn ? <Logout /> : <Login />}
        {/* Botón para alternar el estado de sesión. En una app real la lógica
            de login/logout sería más compleja (llamadas a servidor, tokens, etc.). */}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
    </div>
  )
}

export default Sesion
