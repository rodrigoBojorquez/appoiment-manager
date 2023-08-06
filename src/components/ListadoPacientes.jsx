import { useEffect } from "react";
import Paciente from "./Paciente";

function ListadoPacientes( {pacientes, setPaciente, eliminarPaciente} ) {



    return(
        <>
            <div className="md:w-1/2 lg:w-3/5">

                {pacientes && pacientes.length ? (
                    // solo puedes retornar 1 contenedor
                    <>
                        <h2 className=" font-black text-3xl text-center">Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10">
                            Administra tus {""}
                            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
                        </p>

                        { pacientes.map( paciente => {
                            return (
                            <Paciente 
                                key={paciente.id}
                                paciente = {paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente= {eliminarPaciente}
                            />
                            );
                        })}    
                    </>  

                ) : (

                    <>
                        <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10">
                            Agrega pacientes{" "}
                            <span className="text-indigo-600 font-bold ">y aquí apareceran</span>
                        </p>                    
                    </>

                )}


            </div>
        </>
    )
}

export default ListadoPacientes;