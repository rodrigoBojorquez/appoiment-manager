import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {

  // setNombre es la funcion que modifica nombre
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  // validacion de form
  const [error, setError] = useState(false);

  useEffect( () => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente] )

  // generas tu id unico
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del Formulario
    if( [ mascota, propietario, email, alta, sintomas ].includes('') ) {

        setError(true)
        return;
    } 

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
        mascota, 
        propietario, 
        email, 
        alta, 
        sintomas
    }

    if (paciente.id) {
      //editando paciente
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => {
        if (pacienteState.id === paciente.id) {
          return objetoPaciente
        }
        else {
          return pacienteState
        }
      })

      setPacientes(pacientesActualizados);

      setPaciente({})

    }
    else {
      //añadiendo a pacientes
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el form
    setMascota('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }
  

  return (
    <>
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade paciente y {""}
            <span className="text-indigo-600 font-bold">Administralos</span> 
            </p>

            <form 
            className="bg-white shadow-md rounded-lg py-7 px-5 my-10 mx-5"
            onSubmit={handleSubmit}
            >
              {/* si es true, hacer esto */}
              { error && <Error><p>Faltan campos por llenar</p></Error> }

              <div className="flex flex-col">
                <label htmlFor="mascota" className="text-gray-800 uppercase font-bold mb-2">Nombre mascota</label>
                <input type="text" id="mascota" placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 placeholder-gray-500 rounded-md mb-5"
                value={mascota}
                // asi se puede guardar lo que el usuario escribe
                onChange={ (e) => setMascota(e.target.value) }/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="propietario" className="text-gray-800 uppercase font-bold mb-2">Nombre propietario</label>
                <input type="text" id="propietario" placeholder="Nombre del propietario"
                className="border-2 w-full p-2 placeholder-gray-500 rounded-md mb-5"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 uppercase font-bold mb-2">Correo electrónico</label>
                <input type="email" id="email" placeholder="Contacto del propietario"
                className="border-2 w-full p-2 placeholder-gray-500 rounded-md mb-5"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="alta" className="text-gray-800 uppercase font-bold mb-2">Fecha de alta</label>
                <input type="date" id="alta" placeholder="Fecha de alta"
                className="border-2 w-full p-2 placeholder-gray-500 rounded-md mb-5"
                value={alta}
                onChange={ (e) => setAlta(e.target.value) }/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="sintomas" className="text-gray-800 uppercase font-bold mb-2">Sintomas</label>
                <textarea id="sintomas" placeholder="Describe los sistomas" className="border-2 w-full p-2 placeholder-gray-500 rounded-md mb-5"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value) }/>
              </div>

              <input type="submit" 
              className="bg-indigo-600 w-full rounded-md py-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" 
              value= {paciente.id ? "Guardar cambios" : "Añadir paciente"}
              />
            </form>
        </div>
    </>
  )
}

export default Formulario;
