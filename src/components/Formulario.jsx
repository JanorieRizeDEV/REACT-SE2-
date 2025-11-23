import React, {useState} from 'react'

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: ''
  })
  // `formData` es un objeto que agrupa los campos del formulario.
  // Usamos `id` de cada input para mapear el campo correspondiente en el estado.
  const handleChange = (event) => {
    const {id, value} = event.target
    // Actualizamos solo la propiedad afectada manteniendo el resto con spread
    setFormData(prevState => ({ ...prevState, [id]: value }))
  }

  // Al enviar evitamos el comportamiento por defecto (recargar la página)
  // y, por simplicidad, mostramos los datos por consola. En una app real
  // aquí podrías validar, enviar a una API, o actualizar otro estado.
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Nombre: ${formData.nombre}, Apellido: ${formData.apellido}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" id="nombre" placeholder="Nombre" 
        value={formData.nombre}
      onChange={handleChange}
        />
      <input
        type="text" id="apellido" placeholder="Apellido" 
        value={formData.apellido}
      onChange={handleChange}
        />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
