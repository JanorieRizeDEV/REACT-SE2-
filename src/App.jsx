import React from 'react'
import Props from './components/Props.jsx'
import Contador from './components/Contador.jsx'
import Controles from './components/Controles.jsx'
import InputText from './components/inputText.jsx'
import { useState } from 'react'
import Formulario from './components/Formulario.jsx'
import MensajeCondicional from './components/MensajeCondicional.jsx'
import Sesion from './components/Sesion.jsx'
import MensajeConsola from './components/MensajeConsola.jsx'
import ContadorEffect from './components/ContadorEffect.jsx'
import ConsumoApi from './components/ConsumoApi.jsx'
function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <Props nombre="Pedrito Pedro" />
      <hr />
      <Contador contador={contador}/>
      <Controles setContador={setContador} contador={contador}/>
       <hr />
      <InputText />
      <hr />
      <Formulario />
      <hr />
      <MensajeCondicional />
      <hr />
      <Sesion />
      <hr />
      <MensajeConsola />
      <hr />
      <ContadorEffect />
      <hr />
      <ConsumoApi />
    </>
  )
}

export default App
