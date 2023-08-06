function Paciente( {paciente, setPaciente, eliminarPaciente} ) {
    
    const { mascota, propietario, email, alta, sintomas, id } = paciente;

    return(
        <>
            <div className="mt-5 mb-5 bg-white shadow-md py-7 px-5 rounded-lg mx-5">
                <p className="font-bold mb-3 text-gray-800 uppercase">Nombre: {""}
                    <span className="font-normal normal-case">{mascota}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">Propietario: {""}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                
                <p className="font-bold mb-3 text-gray-800 uppercase">Email: {""}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">Fecha Alta: {""}
                    <span className="font-normal normal-case">{alta}</span>
                </p> 

                <p className="font-bold mb-3 text-gray-800 uppercase">Sintomas: {""}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>      

                <div className="flex justify-between">

                    <button 
                    type="button" 
                    className="mt-3 py-2 px-7 bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all text-white text-sm font-bold uppercase"
                    // tiene que tener el =>
                    onClick={ () => setPaciente(paciente)}>
                        Editar
                    </button>

                    <button 
                    type="button" 
                    className="mt-3 py-2 px-7 bg-red-600 hover:bg-red-700 rounded-md transition-all text-white text-sm font-bold uppercase"
                    onClick= { () =>  eliminarPaciente(id)}>
                        Eliminar
                    </button>

                </div>                                                                         
            </div>
        </>
    )
}

export default Paciente;