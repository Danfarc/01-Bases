(()=>{

    // Funcion que termina con un error

    const abc = ( message:string ):never=>{
        throw new Error(message)
    }

    abc('Auxilio');

})()