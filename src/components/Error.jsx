// puedo reutilizar este msj de error, solo cambio el children en el componente padre
function Error( {children} ) {
    return(
        <>
            <div className="bg-red-600 p-2 rounded-lg mb-6">
                <p className="text-center text-white font-semibold uppercase">{children}</p>
            </div> 
        </>
    )
}

export default Error;