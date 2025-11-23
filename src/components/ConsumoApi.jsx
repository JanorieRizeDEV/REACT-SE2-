import React,{useState,useEffect} from 'react'

const ConsumoApi = () => {
    const [data, setData] = useState("");
  // `data` almacena la respuesta de la API. Iniciamos con cadena vacía,
  // pero cuando recibimos JSON lo reemplazamos con el objeto/array.

  // Nota: existe un useEffect vacío en versiones previas; se deja comentado
  // porque no realiza ninguna acción útil y puede eliminarse.
  // useEffect(() => {}, []);
    const fetchData = async () => {
        try {
            const response = await fetch('https://fake-json-api.mock.beeceptor.com/companies');
            const json = await response.json();
      // Guardamos el JSON recibido en el estado para renderizarlo.
      setData(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <pre>
      {/* JSON.stringify formatea el objeto para que sea legible en pantalla */}
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default ConsumoApi
